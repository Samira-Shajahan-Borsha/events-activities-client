"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="relative flex min-h-screen items-center justify-center bg-linear-to-b from-background to-muted/20 p-4">
            {/* Decorative Glowing Shape */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-destructive/5 blur-3xl animate-pulse -z-10" />

            <div className="w-full max-w-2xl flex flex-col items-center space-y-6 text-center">
                {/* Animated Error Icon */}
                <div className="relative flex items-center justify-center scale-100 animate-scale-in">
                    <div className="absolute inset-0 rounded-full bg-destructive/10 animate-pulse" />
                    <div className="relative z-10 rounded-full bg-destructive/10 p-6">
                        <AlertTriangle className="h-16 w-16 text-destructive" />
                    </div>
                </div>

                {/* Error Message */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-primary">
                        Oops! Something went wrong
                    </h1>
                    <p className="text-muted-foreground">
                        We encountered an unexpected error. Don&apos;t worry, it&apos;s not
                        your fault.
                    </p>
                </div>

                {/* Error Details (Development Only) */}
                {process.env.NODE_ENV === "development" && (
                    <div className="w-full rounded-lg bg-muted p-4 text-left">
                        <p className="text-sm font-mono text-muted-foreground break-all">
                            {error.message}
                        </p>
                        {error.digest && (
                            <p className="text-xs font-mono text-muted-foreground mt-2">
                                Error ID: {error.digest}
                            </p>
                        )}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Button onClick={reset} size="lg" className="gap-2">
                        <RefreshCcw className="h-4 w-4" />
                        Try Again
                    </Button>
                    <Button variant="outline" size="lg" asChild className="gap-2">
                        <Link href="/">
                            <Home className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                {/* Help Text */}
                <p className="text-sm text-muted-foreground">
                    If this problem persists, please contact our support team.
                </p>
            </div>
        </div>
    );
}
