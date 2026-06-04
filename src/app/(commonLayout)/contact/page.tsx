import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/modules/Contact/ContactForm";

const contactInfo = [
    {
        icon: Mail,
        title: "Email Support",
        value: "support@eventhub.com",
        description: "Reach our team anytime",
    },
    {
        icon: Clock,
        title: "Response Time",
        value: "Within 24–48 hours",
        description: "Mon–Fri, business hours",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "Dhaka, Bangladesh",
        description: "Remote-first team",
    },
];

const faqs = [
    {
        q: "How do I join an event?",
        a: "Browse events, pick one you love, and click Join. Free events are instant; paid events go through secure checkout.",
    },
    {
        q: "How do I become a host?",
        a: "Visit our Become a Host page and create a host account. You'll get access to event creation and management tools.",
    },
    {
        q: "Is EventHub free?",
        a: "Yes — browsing and joining free events is 100% free. Hosts pay a small fee only on paid ticket sales.",
    },
];

const ContactPage = () => {

    return (
        <div className="min-h-screen flex flex-col bg-background">

            {/* Hero */}
            <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/20 py-20 md:py-24">
                <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10 text-center max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                        <MessageCircle className="w-4 h-4" />
                        <span>We&apos;re here to help</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
                        Get in <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground">
                        Questions, feedback, or partnership ideas? We&apos;d love to hear from
                        you — our team typically replies within one business day.
                    </p>
                </div>
            </section>

            {/* Main: form + info */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-7xl grid lg:grid-cols-5 gap-8 items-center">
                    {/* Form */}
                    <Card className="lg:col-span-3 border-border/60 shadow-sm">
                        <CardContent className="p-6 md:p-10">
                            <div className="mb-6 space-y-2">
                                <h2 className="text-2xl font-bold text-foreground">Send us a message</h2>
                                <p className="text-muted-foreground">
                                    Fill out the form below and we&apos;ll get back to you shortly.
                                </p>
                            </div>
                            <ContactForm />
                        </CardContent>
                    </Card>

                    {/* Info */}
                    <div className="lg:col-span-2 space-y-4">
                        {contactInfo.map((info) => (
                            <Card key={info.title} className="border-border/60">
                                <CardContent className="p-6 flex gap-4">
                                    <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <info.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                                        <p className="text-foreground text-sm">{info.value}</p>
                                        <p className="text-xs text-muted-foreground">{info.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-10 space-y-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            Quick answers to common questions. Can&apos;t find what you need? Send us a message.
                        </p>
                    </div>
                    <Accordion type="single" collapsible className="space-y-3">
                        {faqs.map((f, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border border-border/60 rounded-lg px-5 bg-card"
                            >
                                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="text-center mt-10">
                        <Button asChild>
                            <Link href="/register">
                                Get Started
                                <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
