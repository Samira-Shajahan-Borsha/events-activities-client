/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import z from "zod";
import { parse } from "cookie";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";

const loginValidationZodSchema = z.object({
    email: z.email().nonempty(),
    password: z
        .string()
        .min(8, "Password is required and must be at least 8 characters long")
        .nonempty({ message: "Password is required" }),
});

export const login = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const redirectTo = formData.get("redirect") || null;
        let accessTokenObject: null | any = null;
        let refreshTokenObject: null | any = null;

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
        });

        const setCookieHeaders = res.headers.getSetCookie();

        if (setCookieHeaders && setCookieHeaders.length > 0) {
            setCookieHeaders.forEach((cookie: string) => {
                const parsedCookie = parse(cookie);

                if (parsedCookie["accessToken"]) {
                    accessTokenObject = parsedCookie;
                }
                if (parsedCookie["refreshToken"]) {
                    refreshTokenObject = parsedCookie;
                }
            });
        } else {
            throw new Error("No Set-Cookie header found");
        }

        if (!accessTokenObject) {
            throw new Error("Tokens not found in cookies");
        }

        if (!refreshTokenObject) {
            throw new Error("Tokens not found in cookies");
        }

        const cookieStore = await cookies();

        cookieStore.set("accessToken", accessTokenObject.accessToken, {
            secure: true,
            httpOnly: true,
            maxAge: parseInt(accessTokenObject["Max-Age"]) || 1000 * 60 * 60,
            path: accessTokenObject.Path || "/",
            sameSite: accessTokenObject["SameSite"] || "none",
        });

        cookieStore.set("refreshToken", refreshTokenObject.refreshToken, {
            secure: true,
            httpOnly: true,
            maxAge: parseInt(refreshTokenObject["Max-Age"]) || 1000 * 60 * 60 * 24 * 90,
            path: refreshTokenObject.Path || "/",
            sameSite: refreshTokenObject["SameSite"] || "none",
        });

        return { success: true };
    } catch (error: any) {
        // Re-throw NEXT_REDIRECT errors so Next.js can handle them
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        console.log(error);
        return { error: "Login failed" };
    }
};
