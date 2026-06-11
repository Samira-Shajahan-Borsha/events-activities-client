import RegisterForm from "@/components/register-form";
import { BadgeCheck, CalendarDays, Lock, ShieldCheck } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import {
    Bell,
    Compass,
    Heart,
    Zap,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Register | EventHub",
    description: "Create a new account to explore and join local events.",
};

const highlights = [
    { icon: Compass, text: "Discover local events" },
    { icon: Zap, text: "Join activities instantly" },
    { icon: Heart, text: "Follow favorite hosts" },
    { icon: Bell, text: "Personalized recommendations" },
];

export default function RegisterPage() {
    return (
        <main className="grid lg:grid-cols-2 bg-background mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-175 justify-items-center-safe">

            {/* LEFT SIDE */}
            <aside className="relative hidden lg:flex flex-col justify-center py-12 w-full max-w-lg space-y-6">

                {/* blobs */}
                <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

                <div className="relative z-10 space-y-6">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        <CalendarDays className="w-4 h-4" />
                        Join EventHub Community
                    </div>

                    <h1 className="text-4xl font-bold leading-tight">
                        Start Your{" "}
                        <span className="text-primary">Event Journey</span>
                    </h1>

                    <p className="text-muted-foreground text-lg">
                        Create an account to discover events, meet people, and join unforgettable experiences.
                    </p>

                    <div className="grid grid-cols-1 gap-3 pt-2">
                        {highlights.map((h) => (
                            <div
                                key={h.text}
                                className="flex items-center gap-3 p-3 rounded-lg bg-card/70 backdrop-blur-sm border border-border/60"
                            >
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <h.icon className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm font-medium text-foreground">{h.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 flex items-center gap-6 text-sm text-muted-foreground mt-10">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        Secure
                    </div>
                    <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-primary" />
                        Encrypted
                    </div>
                    <div className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-primary" />
                        Trusted
                    </div>
                </div>
            </aside>

            {/* RIGHT SIDE */}
            <div className="flex items-center justify-center py-20">
                <div className="w-full sm:max-w-md md:max-w-2xl space-y-6">

                    {/* mobile logo */}
                    {/* <Link href="/" className="lg:hidden flex items-center gap-2">
                        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold">E</span>
                        </div>
                        <span className="font-bold text-lg">EventHub</span>
                    </Link> */}

                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold">Create account</h1>
                        <p className="text-muted-foreground text-sm">
                            Join EventHub and start exploring experiences near you.
                        </p>
                    </div>

                    {/* FORM */}
                    <RegisterForm />
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

                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-medium hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}