"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ClearFiltersButton() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const handleClear = () => {
        const params = new URLSearchParams(searchParams.toString());
        
        params.delete("searchTerm");
        params.delete("status");
        params.delete("isPaid");
        params.delete("type");
        params.delete("page");

        startTransition(() => {
            router.replace(`?${params.toString()}`, { scroll: false });
        });
    };

    const hasFilters =
        searchParams.get("searchTerm") ||
        searchParams.get("status") ||
        searchParams.get("isPaid") ||
        searchParams.get("type");

    if (!hasFilters) return null;

    return (
        <Button
            variant="ghost"
            size="default"
            onClick={handleClear}
            disabled={isPending}
            className="flex items-center gap-2"
        >
            <X className="h-4 w-4" />
            Clear All
        </Button>
    );
}