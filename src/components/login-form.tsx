/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useActionState } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail, Briefcase, Shield, User, ArrowRight } from "lucide-react";
import { login } from "@/services/auth/login";
import { toast } from "sonner";
import PasswordInput from "./password-input";
import InputFieldError from "./shared/InputFieldError";

const demoAccounts = [
    {
        label: "Admin",
        email: "admin@gmail.com",
        password: "12345678@admin",
        icon: Shield,
    },
    {
        label: "Host",
        email: "fahim@gmail.com",
        password: "1234@Fahim",
        icon: Briefcase,
    },
    {
        label: "User",
        email: "rafi@gmail.com",
        password: "1234@Rafi",
        icon: User,
    }
];

export default function LoginForm({ redirect }: { redirect?: string }) {
    const [state, formAction, isPending] = useActionState(login, null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (state && !state?.success && state?.message) {
            toast.error("Login Failed. You might have entered incorrect email or password.");
        }
    }, [state]);

    const fillDemo = (e: string, p: string) => {
        setEmail(e);
        setPassword(p);
    };

    return (
        <div className="space-y-6">
            <form action={formAction} className="space-y-5">
                {redirect && (
                    <input type="hidden" name="redirect" value={redirect} />
                )}
                <FieldGroup>
                    <div className="grid grid-cols-1 gap-4">
                        {/* EMAIL */}
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="pl-9 h-11"
                                />
                                <InputFieldError field="email" state={state} />
                            </div>
                        </Field>

                    </div>
                </FieldGroup>

                {/* PASSWORD */}
                <PasswordInput
                    id="password"
                    name="password"
                    label="Password"
                    state={state}
                    value={password}
                    setPassword={(e: any) => setPassword(e.target.value)}
                />

                {/* SUBMIT */}
                <Button type="submit" className="w-full h-11" disabled={isPending}>
                    {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign In
                    <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
            </form>

            {/* DEMO ACCOUNTS */}
            <div className="space-y-3">
                <div>
                    <p className="text-sm font-semibold">Quick Access Accounts</p>
                    <p className="text-xs text-muted-foreground">
                        Try demo accounts instantly
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {demoAccounts.map((demoAccount) => (
                        <Button
                            key={demoAccount.label}
                            type="button"
                            variant="outline"
                            className="h-11 gap-2"
                            onClick={() => fillDemo(demoAccount.email, demoAccount.password)}
                        >
                            <demoAccount.icon className="w-4 h-4 text-primary" />
                            <span className="text-xs">Login as {demoAccount.label}</span>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}