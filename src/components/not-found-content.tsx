"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";


const NotFoundContent = () => {

    const router = useRouter();

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
            {/* Decorative blurred shapes */}
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-destructive/10 blur-3xl" />

            <div className="relative z-10 max-w-xl text-center">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 text-destructive shadow">
                    <AlertTriangle className="h-10 w-10" />
                </div>

                {/* 404 */}
                <h1 className="text-7xl font-extrabold tracking-tight text-primary sm:text-8xl">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Page not found
                </h2>

                {/* Description */}
                <p className="mt-3 text-muted-foreground">
                    Sorry, the page you’re looking for doesn’t exist or may have been
                    moved.
                </p>

                {/* Actions */}
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => router.back()}
                        className="gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Go Back
                    </Button>

                    <Button size="lg" asChild className="gap-2">
                        <Link href="/">
                            <Home className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NotFoundContent