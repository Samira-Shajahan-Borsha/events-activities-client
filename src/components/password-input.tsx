"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Lock, Eye, EyeOff } from "lucide-react";
import InputFieldError from "./shared/InputFieldError";
import { IInputErrorState } from "@/lib/getInputFieldError";

interface PasswordInputProps {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    value: string;
    state?: IInputErrorState;
    setPassword: (value: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PasswordInput({
    id,
    name,
    label,
    placeholder = "********",
    value,
    state,
    setPassword
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
                    value={value}
                    onChange={setPassword}
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
            {state && <InputFieldError field={name} state={state} />}
        </Field>
    );
}
