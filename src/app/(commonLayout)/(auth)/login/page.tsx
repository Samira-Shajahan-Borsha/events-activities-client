import { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, CalendarDays, Lock, ShieldCheck } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 bg-background container mx-auto px-4 lg:px-0 max-w-342 h-175">

            {/* LEFT SIDE - Branding */}
            <aside className="relative hidden lg:flex flex-col justify-center pr-44 py-12">

                {/* background blobs stay but no container bg */}
                <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

                <div className="relative z-10 space-y-6 container mx-auto px-4 lg:px-0 max-w-342">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <CalendarDays className="w-4 h-4" />
                        Trusted Event Platform
                    </div>

                    <h1 className="text-4xl font-bold leading-tight text-foreground">
                        Discover Experiences{" "}
                        <span className="text-primary">That Matter</span>
                    </h1>

                    <p className="text-muted-foreground text-lg">
                        Join local events, workshops, meetups, and activities that connect people together.
                    </p>

                </div>

                <div className="relative z-10 mt-10 flex items-center gap-6 text-sm text-muted-foreground">

                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        Secure authentication
                    </div>

                    <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-primary" />
                        Protected data
                    </div>

                    <div className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-primary" />
                        Verified hosts
                    </div>

                </div>
            </aside>

            {/* RIGHT SIDE - FORM */}
            <main className="flex items-center justify-center py-20">
                <div className="w-full max-w-md space-y-6">

                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold">Welcome back</h1>
                        <p className="text-muted-foreground text-sm">
                            Sign in to continue exploring events near you
                        </p>
                    </div>

                    {/* Login Form */}
                    <LoginForm redirect={params.redirect} />

                    {/* <div className="relative">
                        <Separator />
                        <span className="absolute inset-0 -top-2.5 flex justify-center">
                            <span className="bg-background px-3 text-xs uppercase tracking-wider text-muted-foreground">
                                Or continue with
                            </span>
                        </span>
                    </div>

                    <Button type="button" variant="outline" className="w-full h-11 gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.4 14.6 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z" />
                        </svg>
                        Continue with Google
                    </Button> */}

                    {/* Register link */}
                    <p className="text-center text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-primary font-medium hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </main >
        </div >
    );
};

export default LoginPage;