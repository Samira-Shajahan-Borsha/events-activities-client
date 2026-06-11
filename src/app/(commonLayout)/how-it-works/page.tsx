import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";
import {
    ArrowRight,
    Briefcase,
    Compass,
    ShieldCheck,
    Sparkles,
    Ticket,
    Users,
} from "lucide-react";
import Link from "next/link";

const steps = [
    {
        step: "01",
        icon: Compass,
        title: "Discover Events",
        description:
            "Browse a curated catalog of events by category, location, and date. Use smart filters to find experiences that match your interests.",
    },
    {
        step: "02",
        icon: Ticket,
        title: "Join Events Instantly",
        description:
            "Reserve your spot in seconds for both free and paid events. Get instant confirmation, digital tickets, and reminders.",
    },
    {
        step: "03",
        icon: Users,
        title: "Connect with People",
        description:
            "Meet like-minded attendees, join communities, and grow your network through meaningful in-person experiences.",
    },
    {
        step: "04",
        icon: Briefcase,
        title: "Become a Host",
        description:
            "Create and publish your own events, manage participants, track attendance, and grow your brand with our host tools.",
    },
    {
        step: "05",
        icon: ShieldCheck,
        title: "Secure Payments",
        description:
            "Pay safely via SSLCommerz with encrypted transactions, verified hosts, and transparent refunds — built for trust.",
    },
];

const HowItWorksPage = async () => {

    const userInfo = await getMyProfileInfo();

    return (
        <div className="min-h-screen flex flex-col bg-background">

            {/* Hero */}
            <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/20 py-20 md:py-28">
                <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Simple. Seamless. Social.</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                        How <span className="text-primary">EventHub</span> Works
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground mb-8">
                        From discovering experiences to hosting your own — EventHub makes
                        every step effortless, secure, and built around community.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Button size="lg" asChild className="text-sm font-medium tracking-tight h-11">
                            <Link href="/explore-events">
                                Explore Events
                                <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </Button>
                        {
                            !userInfo &&
                            <Button size="lg" variant="outline" asChild className="text-sm font-medium tracking-tight h-11">
                                <Link href="/become-a-host">Become a Host</Link>
                            </Button>
                        }
                    </div>
                </div>
            </section>

            {/* Steps timeline */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="space-y-6">
                        {steps.map((s, i) => (
                            <Card
                                key={s.step}
                                className="group border-border/60 hover:border-primary/40 hover:shadow-lg transition-all"
                            >
                                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                                    <div className="relative shrink-0">
                                        <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-primary/10 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                                            <s.icon className="w-9 h-9 text-primary" />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow">
                                            {s.step}
                                        </span>
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                            {s.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {s.description}
                                        </p>
                                    </div>
                                    <div className="hidden md:block text-muted-foreground/40 text-sm font-medium">
                                        Step {i + 1} of {steps.length}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80 p-10 md:p-16 text-center">
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                        <div className="relative z-10 max-w-2xl mx-auto text-primary-foreground space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Start exploring events today
                            </h2>
                            <p className="text-primary-foreground/90 text-lg">
                                Join a thriving community of attendees and hosts. Your next
                                memorable experience is just one click away.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Button size="lg" variant="secondary" asChild>
                                    <Link href="/register">
                                        Get Started
                                        <ArrowRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                                    asChild
                                >
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksPage;
