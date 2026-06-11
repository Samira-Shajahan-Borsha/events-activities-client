import RegisterForm from "@/components/register-form";
import {
    BadgeCheck,
    Bell,
    CalendarDays,
    Compass,
    Heart,
    Lock,
    ShieldCheck,
    Zap,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Register | EventHub",
    description: "Create a new account to explore and join local events.",
};

const highlights = [
    {
        icon: Compass,
        text: "Discover local events",
    },
    {
        icon: Zap,
        text: "Join activities instantly",
    },
    {
        icon: Heart,
        text: "Follow favorite hosts",
    },
    {
        icon: Bell,
        text: "Personalized recommendations",
    },
];

export default function RegisterPage() {
    return (
        <main className="relative mx-auto w-full max-w-7xl min-h-[calc(100vh-80px)] px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2">

            {/* LEFT SIDE */}
            <aside className="relative hidden lg:flex flex-col justify-center max-w-xl">

                <div className="absolute top-20 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />

                <div className="relative z-10 space-y-6">

                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        <CalendarDays className="h-4 w-4" />
                        Join EventHub Community
                    </div>

                    <h1 className="text-5xl font-bold leading-tight">
                        Start Your{" "}
                        <span className="text-primary">Event Journey</span>
                    </h1>

                    <p className="max-w-md text-lg text-muted-foreground">
                        Create an account to discover events, meet people, and join
                        unforgettable experiences.
                    </p>

                    <div className="grid gap-3 pt-4">
                        {highlights.map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/70 p-4 backdrop-blur-sm"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <item.icon className="h-4 w-4 text-primary" />
                                </div>

                                <span className="font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            Secure
                        </div>

                        <div className="flex items-center gap-2">
                            <Lock className="h-4 w-4 text-primary" />
                            Encrypted
                        </div>

                        <div className="flex items-center gap-2">
                            <BadgeCheck className="h-4 w-4 text-primary" />
                            Trusted
                        </div>
                    </div>

                </div>
            </aside>

            {/* RIGHT SIDE */}
            <section className="flex items-center justify-center py-0">
                <div className="w-full max-w-xl space-y-6">

                    <div className="space-y-2 text-center">
                        <h1 className="text-4xl font-bold">Create account</h1>

                        <p className="text-sm text-muted-foreground">
                            Join EventHub and start exploring experiences near you.
                        </p>
                    </div>

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
                        <Link
                            href="/login"
                            className="font-medium text-primary hover:underline"
                        >
                            Sign in
                        </Link>
                    </p>

                </div>
            </section>
        </main>
    );
}