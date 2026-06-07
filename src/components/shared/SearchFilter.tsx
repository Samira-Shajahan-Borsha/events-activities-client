"use client";

import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Input } from "../ui/input";
import { useDebounce } from "@/hooks/useDebounce";

interface SearchFilterProps {
  placeholder?: string;
  paramName?: string;
}

const SearchFilter = ({
  placeholder = "Search...",
  paramName = "searchTerm",
}: SearchFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const urlValue = searchParams.get(paramName) || "";

  const [value, setValue] = useState(urlValue);
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    setValue(urlValue);
  }, [urlValue]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const current = searchParams.get(paramName) || "";

    if (debouncedValue === current) return;

    if (debouncedValue) {
      params.set(paramName, debouncedValue); // ?searchTerm=debouncedValue
      params.set("page", "1"); // reset to first page on search
    } else {
      params.delete(paramName); // remove searchTerm param
      params.delete("page"); // reset to first page on search clear
    }

    startTransition(() => {
      router.replace(`?${params.toString()}`, { scroll: false });
    });
  }, [debouncedValue]);

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

      <Input
        placeholder={placeholder}
        className="pl-10 pr-10 w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isPending}
      />
    </div>
  );
};

export default SearchFilter;