/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { Loader2, User, Mail } from "lucide-react";
import { register } from "@/services/auth/register";
import PasswordInput from "./password-input";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";

export default function RegisterForm() {

    const [state, formAction, isPending] = useActionState(register, null);

    /* const getFieldError = (fieldName: string) => {
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
    } */

    useEffect(() => {
        if (state && !state?.success && state?.message) {
            toast.error(state?.message)
        }
    }, [state])

    return (
        <form action={formAction} className="space-y-6">
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
                            <InputFieldError field="fullName" state={state} />
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
                            <InputFieldError field="email" state={state} />
                        </div>
                    </Field>

                    {/* Password */}
                    <PasswordInput
                        id="password"
                        name="password"
                        label="Password"
                        state={state}
                    />

                    {/* Confirm Password */}
                    <PasswordInput
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        state={state}
                    />
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
