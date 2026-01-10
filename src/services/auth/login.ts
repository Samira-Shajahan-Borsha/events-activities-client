/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z from "zod";

const loginValidationZodSchema = z.object({
    email: z.email().nonempty(),
    password: z
        .string()
        .min(8, "Password is required and must be at least 8 characters long")
        .nonempty({ message: "Password is required" }),
});

export const login = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const loginData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const validatedFields = loginValidationZodSchema.safeParse(loginData);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.issues?.map((issue) => {
                    return {
                        field: issue.path[0],
                        message: issue.message,
                    };
                }),
            };
        }

        const res = await fetch("http://localhost:5000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        }).then((res) => res.json());

        return res;
    } catch (error: any) {
        console.error(error);
        return { error: "Registration failed" };
    }
};
