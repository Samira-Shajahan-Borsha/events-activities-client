import { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = {
    title: "Login | EventHub",
    description: "Login to your account to explore and join local events.",
};

export default function LoginPage() {
    return (
        <div className="container relative flex min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
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

                {/* <LoginForm /> */}

                <p className="px-8 text-center text-sm text-muted-foreground">
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