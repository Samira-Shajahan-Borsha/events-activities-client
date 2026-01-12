import z from "zod";

export const registerValidationSchema = z
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .refine((data: any) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });

export const loginValidationZodSchema = z.object({
    email: z.email().nonempty(),
    password: z
        .string()
        .min(8, "Password is required and must be at least 8 characters long")
        .nonempty({ message: "Password is required" }),
});
