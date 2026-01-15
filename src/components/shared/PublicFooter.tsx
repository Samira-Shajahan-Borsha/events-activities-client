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
    return (
        <footer className="w-full bg-white border-t mt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-0 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Logo />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Discover meaningful experiences and connect with your community.
                            From workshops to seminars, find the events that help you grow.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors">
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors">
                                <Github className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links (Synced with NavItems) */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-6">
                            Navigation
                        </h4>
                        <ul className="space-y-4">
                            <li><Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Explore Events</Link></li>
                            <li><Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link></li>
                            <li><Link href="/become-a-host" className="text-sm text-muted-foreground hover:text-primary transition-colors">Become a Host</Link></li>
                            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Support</Link></li>
                            <li><Link href="/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">Member Login</Link></li>
                        </ul>
                    </div>

                    {/* Popular Categories */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-6">
                            Categories
                        </h4>
                        <ul className="space-y-4">
                            <li><Link href="/events?type=Workshop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skill Workshops</Link></li>
                            <li><Link href="/events?type=Seminar" className="text-sm text-muted-foreground hover:text-primary transition-colors">Educational Seminars</Link></li>
                            <li><Link href="/events?type=Meetup" className="text-sm text-muted-foreground hover:text-primary transition-colors">Social Meetups</Link></li>
                            <li><Link href="/events?type=Networking" className="text-sm text-muted-foreground hover:text-primary transition-colors">Business Networking</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-6">
                            Stay Updated
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Subscribe to get notified about new events in your area.
                        </p>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Email address"
                                    className="rounded-xl border-zinc-200 focus-visible:ring-primary"
                                />
                                <Button className="rounded-xl px-4">
                                    Join
                                </Button>
                            </div>
                        </div>
                        <div className="pt-2 space-y-3">
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>support@eventhub.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} EventHub Platform. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/" className="hover:text-primary">Privacy Policy</Link>
                        <Link href="/" className="hover:text-primary">Terms of Service</Link>
                        <Link href="/" className="hover:text-primary">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}