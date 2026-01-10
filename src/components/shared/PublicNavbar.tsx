import Link from "next/link";
import { CalendarDays, Menu } from "lucide-react";
import {
    Button,
} from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { href: "/events", label: "Explore Events" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About Us" },
];

export default function PublicNavbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 transition-opacity hover:opacity-90"
                >
                    <CalendarDays className="h-6 w-6 text-primary" />
                    <span className="text-xl font-semibold tracking-tight text-primary">
                        EventHub
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/register?role=HOST"
                        className="text-muted-foreground transition-colors hover:text-primary"
                    >
                        Become a Host
                    </Link>
                </nav>

                {/* Desktop Auth */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="ghost" size="sm" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href="/register">Register</Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="flex flex-col px-6 py-6">
                            <SheetHeader className="mb-6">
                                <SheetTitle className="text-lg font-semibold">
                                    Menu
                                </SheetTitle>
                            </SheetHeader>

                            {/* Mobile Nav Items */}
                            <nav className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <Link
                                    href="/register?role=HOST"
                                    className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                                >
                                    Become a Host
                                </Link>
                            </nav>

                            <div className="my-6 h-px bg-border" />

                            {/* Mobile Auth */}
                            <div className="flex flex-col gap-3">
                                <Button variant="outline" asChild className="w-full justify-start">
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button asChild className="w-full justify-start">
                                    <Link href="/register">Register</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
