import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";
import {
    ArrowRight,
    BadgeCheck,
    BarChart3,
    CalendarPlus,
    ClipboardList,
    CreditCard,
    DollarSign,
    Gavel,
    LayoutDashboard,
    Lock,
    Settings,
    ShieldCheck,
    Sparkles,
    Ticket,
    UserPlus,
    Users,
    Wallet,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Become a Host | EventHub",
    description:
        "Create and host your own events on EventHub. Share experiences, grow your community, and connect with people who love what you do.",
};

const benefits = [
    {
        icon: DollarSign,
        title: "Earn from your events",
        description: "Monetize your expertise and community with ticketed events on EventHub.",
    },
    {
        icon: Users,
        title: "Reach local audiences",
        description: "Get discovered by thousands of active members looking for activities near them.",
    },
    {
        icon: Settings,
        title: "Full control of your events",
        description: "Set pricing, capacity, schedule, and manage participants from one dashboard.",
    },
    {
        icon: ShieldCheck,
        title: "Secure payments via SSLCommerz",
        description: "Accept payments confidently with a trusted, PCI-compliant payment gateway.",
    },
];

const steps = [
    { icon: UserPlus, step: "01", title: "Sign up as a host", description: "Create your free host account in minutes with secure JWT-based authentication." },
    { icon: CalendarPlus, step: "02", title: "Create your event", description: "Add details, upload cover images via Cloudinary, set pricing and capacity." },
    { icon: Ticket, step: "03", title: "Users book tickets", description: "Members discover your event and join — free or paid, you decide." },
    { icon: Wallet, step: "04", title: "Get paid securely", description: "Receive earnings directly through SSLCommerz with transparent payouts." },
];

const features = [
    { icon: CalendarPlus, title: "Event creation & management", description: "Create, edit, and publish events with rich details and media." },
    { icon: ClipboardList, title: "Booking tracking", description: "Monitor registrations and ticket sales in real time." },
    { icon: Wallet, title: "Earnings dashboard", description: "Track revenue, payouts, and transaction history at a glance." },
    { icon: Users, title: "Participant management", description: "View attendees, communicate updates, and manage capacity." },
    { icon: BarChart3, title: "Analytics overview", description: "Understand performance with attendance and revenue insights." },
    { icon: LayoutDashboard, title: "Unified host dashboard", description: "Everything you need to run successful events in one place." },
];

const trust = [
    { icon: Lock, title: "JWT-based authentication", description: "Industry-standard secure sessions protect every host and attendee." },
    { icon: Gavel, title: "Admin moderation", description: "Our admin team ensures a safe, high-quality event marketplace." },
    { icon: BadgeCheck, title: "Verified users & hosts", description: "Account verification builds trust between hosts and participants." },
    { icon: CreditCard, title: "Reliable payments", description: "SSLCommerz processes transactions with bank-grade security." },
];

const faqs = [
    { q: "How do I become a host?", a: "Sign up for a free EventHub account, switch to host mode, and complete your host profile. You can publish your first event right after." },
    { q: "Is there any fee to join?", a: "Creating a host account is completely free. A small service fee applies only on successful paid ticket sales." },
    { q: "How do I receive payments?", a: "All paid bookings are processed securely through SSLCommerz, and earnings are transferred to your linked account on a regular payout schedule." },
    { q: "Can I cancel events?", a: "Yes. You can cancel an event from your host dashboard. Refunds for paid tickets are handled automatically through SSLCommerz." },
    { q: "Can I host free events?", a: "Absolutely. EventHub supports both free and paid events, so you can build your community before monetizing." },
];

const BecomeHost = async () => {

    const userInfo = await getMyProfileInfo();

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/20 py-20 md:py-28">
                <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                            <Sparkles className="w-4 h-4" />
                            <span>Host Events. Build Communities.</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                            Turn Your Passion Into{" "}
                            <span className="text-primary">Experiences People Love</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            EventHub gives creators, organizers, instructors, and communities everything they need to launch successful events — from beautiful event pages to secure payments and powerful management tools.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 pt-2">
                            {
                                !userInfo && <Button size="lg" className="px-8">
                                    Become a Host
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            }
                            <Button size="lg" variant="outline" className="px-8">
                                <Link href='/explore-events'>Explore Events</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Become a Host */}
            <section className="py-20 bg-muted/30">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why become a host</h2>
                        <p className="text-base md:text-lg text-muted-foreground">Everything you need to turn your ideas and gatherings into real, thriving events.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((b) => (
                            <Card key={b.title} className="border-border/60">
                                <CardHeader>
                                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                                        <b.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{b.title}</CardTitle>
                                    <CardDescription>{b.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How it works</h2>
                        <p className="text-base md:text-lg text-muted-foreground">From sign-up to your first payout in four simple steps.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
                        {/* Connecting line - hidden on mobile */}
                        <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-linear-to-r from-primary/20 via-primary to-primary/20" />

                        {steps.map((s) => (
                            <div key={s.step} className="relative text-center group">
                                <div className="relative z-10 mb-6">
                                    <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-r from-primary/10 to-accent/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                        <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-lg">
                                            <s.icon className="w-10 h-10 text-primary" />
                                        </div>
                                    </div>
                                    <span className="absolute -top-2 right-[calc(50%-4rem-0.5rem)] w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                                        {s.step}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                                <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Host Dashboard Features */}
            <section className="py-20  bg-muted/30">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Host dashboard features</h2>
                        <p className="text-base md:text-lg text-muted-foreground">A complete toolkit built around how real hosts run events.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <Card key={f.title} className="border-border/60">
                                <CardHeader>
                                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                                        <f.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{f.title}</CardTitle>
                                    <CardDescription>{f.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Earnings & Payment System */}
            <section className="py-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Earnings & payments
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground mb-6">
                                EventHub uses SSLCommerz to process ticket sales securely. Once an attendee pays, the transaction is verified, recorded, and reflected in your earnings dashboard — with full transparency at every step.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Set your own ticket price and capacity",
                                    "Attendees pay securely via SSLCommerz",
                                    "Earnings appear instantly in your dashboard",
                                    "Scheduled payouts to your linked account",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-foreground">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Card className="border-border/60">
                            <CardHeader>
                                <CardTitle className="text-lg">Revenue flow</CardTitle>
                                <CardDescription>How a ticket sale turns into your payout.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { label: "Attendee purchases ticket", icon: Ticket },
                                    { label: "Payment processed via SSLCommerz", icon: CreditCard },
                                    { label: "Earnings recorded in host dashboard", icon: BarChart3 },
                                    { label: "Payout transferred to your account", icon: Wallet },
                                ].map((row) => (
                                    <div key={row.label} className="flex items-center gap-3 p-3 rounded-md border border-border/60 bg-background">
                                        <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                                            <row.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground">{row.label}</span>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Trust & Safety */}
            <section className="py-20 bg-muted/30">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trust & safety</h2>
                        <p className="text-base md:text-lg text-muted-foreground">Built with security, moderation, and reliability at the core.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trust.map((t) => (
                            <Card key={t.title} className="border-border/60">
                                <CardHeader>
                                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                                        <t.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{t.title}</CardTitle>
                                    <CardDescription>{t.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20">
                <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently asked questions</h2>
                            <p className="text-muted-foreground">Everything you need to know before getting started.</p>
                        </div>
                        <Card className="border-border/60">
                            <CardContent className="pt-6">
                                <Accordion type="single" collapsible className="w-full">
                                    {faqs.map((f, i) => (
                                        <AccordionItem key={i} value={`item-${i}`}>
                                            <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/90 to-primary/80" />

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-primary-foreground text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span>Start hosting today</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                            Ready to host your first event?
                        </h2>
                        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                            Join a growing community of hosts using EventHub to create memorable experiences and earn securely.
                        </p>
                        <div className="flex justify-center">
                            {!userInfo &&
                                <Button
                                    size="lg"
                                    className="text-sm font-medium tracking-tight"
                                    asChild
                                    variant="secondary">
                                    <Link href='/register'>
                                        Become a Host Today
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BecomeHost;