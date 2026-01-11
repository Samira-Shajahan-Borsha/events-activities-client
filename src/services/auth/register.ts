/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z from "zod";
import { login } from "./login";

const registerValidationSchema = z
    .object({
        fullName: z
            .string()
            .min(2, { error: "Name is required and must be at least 2 characters long." })
            .max(50, { error: "Name cannot exceed 50 characters." })
            .nonempty(),
        email: z.email().nonempty(),
        password: z
            .string()
            .min(1, "Password is required")
            .min(8, "Password must be at least 8 characters long")
            .regex(/[a-z]/, "Password must contain at least one lowercase letter")
            .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
            .regex(/\d/, "Password must contain at least one number")
            .regex(
                /[@$!%*?&^#()[\]{}\-_=+|;:'",.<>/~`]/,
                "Password must contain at least one special character"
            ),
        confirmPassword: z.string().min(1, "Confirm Password is required"),
    })
    .refine((data: any) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });

export const register = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const zodRegisterPayload = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),
        };

        const validatedFields = registerValidationSchema.safeParse(zodRegisterPayload);

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

        const registerData = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const res = await fetch("http://localhost:5000/api/v1/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
        });

        const result = await res.json();

        //  Logging In User Automatically After Register
        if (result.success) {
            await login(_currentState, formData);
        }

        return result;
    } catch (error: any) {
        // Re-throw NEXT_REDIRECT errors so Next.js can handle them
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        console.error(error);
        return { error: "Registration failed" };
    }
};
