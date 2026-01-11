"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Lock, Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    error?: string | null;
}

export default function PasswordInput({
    id,
    name,
    label,
    placeholder = "********",
    error,
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Field>
            {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
            <div className="relative w-full">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                <Input
                    id={id}
                    name={name}
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    className="pl-9 pr-10"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
            </div>
            {error && <FieldDescription className="mt-1 text-red-600">{error}</FieldDescription>}
        </Field>
    );
}
