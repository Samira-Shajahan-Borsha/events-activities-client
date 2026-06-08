import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accessibility,
    ArrowRight,
    BadgeCheck,
    Briefcase,
    Eye,
    Globe,
    Heart,
    Lock,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
} from "lucide-react";
import Link from "next/link";

const offerings = [
    {
        icon: Users,
        title: "For Attendees",
        description:
            "Discover, book, and join events with personalized recommendations and a frictionless experience.",
    },
    {
        icon: Briefcase,
        title: "For Hosts",
        description:
            "Powerful tools to create events, manage attendees, track revenue, and grow your audience.",
    },
    {
        icon: ShieldCheck,
        title: "For Admins",
        description:
            "Moderation, analytics, and a verification system that keeps the platform safe and trustworthy.",
    },
];

const whyUs = [
    { icon: Sparkles, title: "Easy Event Discovery", desc: "Smart filters and curation." },
    { icon: Lock, title: "Secure Authentication", desc: "JWT-based auth and encrypted sessions." },
    { icon: Briefcase, title: "Host Management", desc: "End-to-end event lifecycle tools." },
    { icon: ShieldCheck, title: "Admin Moderation", desc: "Trust & safety at every layer." },
];

const values = [
    { icon: BadgeCheck, title: "Trust", desc: "Verified hosts and transparent reviews." },
    { icon: Lock, title: "Security", desc: "Bank-grade payments and data protection." },
    { icon: Heart, title: "Community", desc: "Real connections over real experiences." },
    { icon: Accessibility, title: "Accessibility", desc: "Inclusive design for everyone." },
];

const AboutPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background">

            {/* Hero */}
            <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/20 py-20 md:py-28">
                <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                        <Globe className="w-4 h-4" />
                        <span>Our story</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                        About <span className="text-primary">EventHub</span>
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground">
                        We&apos;re building the world&apos;s most trusted platform for discovering
                        real-world events and bringing people together through shared
                        experiences.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6">
                    <Card className="border-border/60">
                        <CardContent className="p-8 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Target className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                EventHub exists to bring people together through meaningful real-world
                                experiences. Our mission is to make discovering, joining, and hosting
                                events simple, accessible, and enjoyable for everyone. Whether it&apos;s a
                                workshop, networking session, sports activity, community gathering, or
                                cultural event, we empower individuals and organizations to build
                                stronger connections, share knowledge, and create memorable experiences
                                that extend beyond the digital world.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-border/60">
                        <CardContent className="p-8 space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Eye className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                We envision a world where discovering opportunities to learn, connect,
                                and grow is effortless. EventHub aims to become the go-to platform for
                                communities, creators, and organizations to engage with audiences,
                                foster collaboration, and inspire participation. By bridging technology
                                with human interaction, we strive to create a future where every person
                                can easily find events that match their interests and every host has the
                                tools to build thriving communities.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* What We Offer */}
            <section className="py-20 bg-muted/30">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What We Offer</h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            A role-based platform built for everyone in the events ecosystem.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-6">
                        {offerings.map((o) => (
                            <Card key={o.title} className="border-border/60 hover:shadow-lg transition-shadow">
                                <CardContent className="p-8 space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <o.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground">{o.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{o.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why EventHub */}
            <section className="py-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why EventHub</h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            Built with modern technology and a relentless focus on user experience.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyUs.map((w) => (
                            <div
                                key={w.title}
                                className="p-6 rounded-xl border border-border/60 bg-card hover:border-primary/40 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <w.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-semibold text-foreground mb-1">{w.title}</h3>
                                <p className="text-sm text-muted-foreground">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-muted/30">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            The principles that guide every product decision we make.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v) => (
                            <Card key={v.title} className="text-center border-border/60">
                                <CardContent className="p-6 space-y-3">
                                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                                        <v.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/80 p-10 md:p-16 text-center">
                        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                        <div className="relative z-10 max-w-2xl mx-auto text-primary-foreground space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Join thousands of users today
                            </h2>
                            <p className="text-primary-foreground/90 text-lg">
                                Be part of a community that turns interests into experiences.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <Button size="lg" variant="secondary" asChild>
                                    <Link href="/register">
                                        Create Account
                                        <ArrowRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                                    asChild
                                >
                                    <Link href="/login">Sign In</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
