import Link from "next/link";
import {
    Facebook,
    Twitter,
    Instagram,
    Github,
    Mail,
    MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "./Logo";

export default function PublicFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t bg-background mt-20">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Logo />

                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Discover meaningful experiences and connect with your community.
                            From workshops to seminars, find the events that help you grow.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-3">
                            {[
                                { icon: Twitter, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Facebook, href: "#" },
                                { icon: Github, href: "#" },
                            ].map(({ icon: Icon, href }, i) => (
                                <Link
                                    key={i}
                                    href={href}
                                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <Icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
                            Navigation
                        </h4>

                        <ul className="space-y-4">
                            {[
                                { href: "/explore-events", label: "Explore Events" },
                                { href: "/how-it-works", label: "How It Works" },
                                { href: "/become-a-host", label: "Become a Host" },
                                { href: "/login", label: "Member Login" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
                            Categories
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { label: "Skill Workshops", href: "/explore-events?type=Workshop" },
                                { label: "Educational Seminars", href: "/explore-events?type=Seminar" },
                                { label: "Social Meetups", href: "/explore-events?type=Meetup" },
                                { label: "Business Networking", href: "/explore-events?type=Networking" },
                            ].map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Stay Updated
                        </h4>

                        <p className="text-sm text-muted-foreground">
                            Subscribe to get notified about new events in your area.
                        </p>

                        <div className="flex gap-1 items-center">
                            <Input
                                placeholder="Email address"
                                className=""
                            />
                            <Button className="font-medium">
                                Join
                            </Button>
                        </div>

                        {/* Contact */}
                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>support@eventhub.com</span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">

                    <p>
                        © {currentYear} EventHub Platform. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <Link href="/" className="hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link href="/" className="hover:text-primary">
                            Terms of Service
                        </Link>
                        <Link href="/" className="hover:text-primary">
                            Cookie Settings
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}