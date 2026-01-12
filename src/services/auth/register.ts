/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { login } from "./login";
import { zodValidator } from "@/lib/zodValidator";
import { serverFetch } from "@/lib/server-fetch";
import { registerValidationSchema } from "@/zod/auth.validation";

export const register = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const payload = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmPassword: formData.get("confirmPassword"),
        };

        if (zodValidator(payload, registerValidationSchema).success === false) {
            return zodValidator(payload, registerValidationSchema);
        }

        const validatedPayload: any = zodValidator(payload, registerValidationSchema).data;

        const registerData = {
            fullName: validatedPayload.fullName,
            email: validatedPayload.email,
            password: validatedPayload.password,
        };

        const res = await serverFetch.post("/user/register", {
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
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development"
                    ? error.message
                    : "Registration Failed. Please try again."
            }`,
        };
    }
};
