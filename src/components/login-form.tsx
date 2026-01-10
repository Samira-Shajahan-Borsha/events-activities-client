/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { Loader2, Mail, Lock } from "lucide-react";
import { login } from "@/services/auth/login";

export default function LoginForm({ redirect }: { redirect?: string }) {
    const [state, formAction, isPending] = useActionState(login, null);

    const getFieldError = (fieldName: string) => {
        if (state && state?.errors) {
            const error = state?.errors?.find((err: any) => err.field === fieldName)
            return error.message;
        } else {
            return null;
        }
    }

    return (
        <form action={formAction} className="space-y-6">
            {redirect && <input type="hidden" name="redirect" value={redirect} />}
            {/* User Info Fields */}
            <FieldGroup>
                <div className="grid grid-cols-1 gap-4">
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
                </div>
            </FieldGroup>

            {/* Submit Button */}
            <FieldGroup>
                <Field>
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Login
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
}
