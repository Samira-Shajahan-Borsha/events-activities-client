/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { Loader2, User, Mail, Lock } from "lucide-react";
import { register } from "@/services/auth/register";

export default function RegisterForm() {
    const [state, formAction, isPending] = useActionState(register, null);

    const getFieldError = (fieldName: string) => {
        if (state && state?.errors) {
            const error = state?.errors?.find((err: any) => err.field === fieldName)
            if (error) {
                return error?.message;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    return (
        <form action={formAction} className="space-y-6">
            {/* User Info Fields */}
            <FieldGroup>
                <div className="grid grid-cols-1 gap-4">
                    {/* Full Name */}
                    <Field>
                        <FieldLabel htmlFor="name">Full Name</FieldLabel>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="John Doe"
                                className="pl-9"
                            />
                            {
                                getFieldError("fullName") && <FieldDescription className="text-red-600">
                                    {getFieldError("fullName")}
                                </FieldDescription>
                            }
                        </div>

                    </Field>

                    {/* Email */}
                    <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                className="pl-9"
                            />
                            {
                                getFieldError("email") && <FieldDescription className="text-red-600">
                                    {getFieldError("email")}
                                </FieldDescription>
                            }
                        </div>
                    </Field>

                    {/* Password */}
                    <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="********"
                                className="pl-9"
                            />
                            {
                                getFieldError("password") && <FieldDescription className="text-red-600">
                                    {getFieldError("password")}
                                </FieldDescription>
                            }
                        </div>
                    </Field>

                    {/* Confirm Password */}
                    <Field>
                        <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="********"
                                className="pl-9"
                            />
                            {
                                getFieldError("confirmPassword") && <FieldDescription className="text-red-600">
                                    {getFieldError("confirmPassword")}
                                </FieldDescription>
                            }
                        </div>
                    </Field>
                </div>
            </FieldGroup>

            {/* Submit Button */}
            <FieldGroup>
                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Account
                </Button>
            </FieldGroup>
        </form>
    );
}
