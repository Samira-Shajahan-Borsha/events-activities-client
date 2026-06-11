"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Loader2, User, Mail, ArrowRight } from "lucide-react";
import { register } from "@/services/auth/register";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";
import PasswordInput from "./password-input";

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
            toast.error(state?.message);
        }
    }, [state]);

    return (
        <form action={formAction} className="space-y-5">

            <FieldGroup>
                <div className="grid grid-cols-1 gap-4">

                    {/* FULL NAME */}
                    <Field>
                        <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="fullName"
                                name="fullName"
                                placeholder="John Doe"
                                className="pl-9 h-11"
                            />
                            <InputFieldError field="fullName" state={state} />
                        </div>
                    </Field>

                    {/* EMAIL */}
                    <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="pl-9 h-11"
                            />
                            <InputFieldError field="email" state={state} />
                        </div>
                    </Field>

                    {/* PASSWORD */}
                    <PasswordInput
                        id="password"
                        name="password"
                        label="Password"
                        state={state}
                    />

                    {/* CONFIRM PASSWORD */}
                    <PasswordInput
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        state={state}
                    />
                </div>
            </FieldGroup>

            {/* SUBMIT */}
            <FieldGroup>
                <Button
                    type="submit"
                    className="w-full h-11"
                    disabled={isPending}
                >
                    {isPending && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Create Account
                    <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
            </FieldGroup>
        </form>
    );
}