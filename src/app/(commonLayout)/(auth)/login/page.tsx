import { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import LoginForm from "@/components/login-form";

export const metadata: Metadata = {
    title: "Login | EventHub",
    description: "Login to your account to explore and join local events.",
};

const LoginPage = async ({
    searchParams,
}: {
    searchParams?: Promise<{ redirect?: string }>;
}) => {
    const params = (await searchParams) || {};

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
            <div className="w-full max-w-[350px] flex flex-col space-y-6">

                {/* Header */}
                <div className="flex flex-col space-y-2 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="rounded-full bg-primary/5 p-3">
                            <CalendarDays className="h-8 w-8 text-primary" />
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome back
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to sign in to your account
                    </p>
                </div>

                {/* Login Form */}
                <LoginForm redirect={params.redirect} />

                {/* Link to Register */}
                <p className="text-center text-sm text-muted-foreground">
                    <Link
                        href="/register"
                        className="hover:text-primary underline underline-offset-4"
                    >
                        Don&apos;t have an account? Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default LoginPage
