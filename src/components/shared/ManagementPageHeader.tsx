"use client";
import { LucideIcon, Plus } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface ManagementPageHeaderProps {
    title: string;
    description?: string;
    action?: {
        icon?: LucideIcon;
        label: string;
        onClick: () => void;
    };
    children?: React.ReactNode;
}

const ManagementPageHeader = ({
    title,
    description,
    action,
    children,
}: ManagementPageHeaderProps) => {
    const Icon = action?.icon || Plus;
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Title block */}
            <div className="space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h1>

                {description && (
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[65ch]">
                        {description}
                    </p>
                )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                {action && (
                    <Button size="sm" className="gap-2 cursor-pointer" onClick={action.onClick}>
                        <Icon className="h-4 w-4" />
                        {action.label}
                    </Button>
                )}

                {children}
            </div>
        </div>
    );
};

export default ManagementPageHeader