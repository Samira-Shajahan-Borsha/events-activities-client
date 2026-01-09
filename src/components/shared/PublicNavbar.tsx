import Link from "next/link";
import { CalendarDays, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const PublicNavbar = () => {
    const navItems = [
        { href: "/events", label: "Explore Events" },
        { href: "/how-it-works", label: "How It Works" },
        { href: "/about", label: "About Us" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90">
                    <CalendarDays className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold tracking-tight text-primary">
                        EventHub
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/register?role=HOST"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        Become a Host
                    </Link>
                </nav>

                {/* Auth Buttons (Static for now) */}
                <div className="hidden md:flex items-center space-x-3">
                    <Button variant="ghost" asChild size="sm">
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild size="sm">
                        <Link href="/register">Register</Link>
                    </Button>
                </div>

                {/* Mobile Menu (Using Sheet for responsiveness) */}
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="text-left">Menu</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col space-y-4 mt-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-lg font-medium hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <hr className="my-2" />
                                <Button variant="outline" asChild className="justify-start">
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button asChild className="justify-start">
                                    <Link href="/register">Register</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default PublicNavbar;