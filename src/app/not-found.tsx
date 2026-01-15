import NotFoundContent from "@/components/not-found-content";
import { Suspense } from "react";

export default function NotFoundPage() {
    return (
        <Suspense fallback={null}>
            <NotFoundContent />
        </Suspense>
    );
}
