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
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import UserDropdown from "../modules/Dashboard/UserDropdown";
import MobileUserMenu from "./MobileUserMenu";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Explore Events" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/become-a-host", label: "Become a Host" },
    { href: "/contact", label: "Contact" },
];

export default async function PublicNavbar() {
    const userInfo = await getMyProfileInfo();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur max-w-7xl mx-auto">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <CalendarDays className="h-6 w-6 text-primary" />
                    <span className="text-xl font-semibold text-primary">
                        EventHub
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-muted-foreground hover:text-primary"
                        >
                            {item.label}
                        </Link>
                    ))}

                    {userInfo && (
                        <Link
                            href={getDefaultDashboardRoute(userInfo.user.role)}
                            className="text-muted-foreground hover:text-primary"
                        >
                            Dashboard
                        </Link>
                    )}
                </nav>

                {/* Desktop Auth */}
                <div className="hidden md:flex items-center gap-3">
                    {userInfo ? (
                        <UserDropdown userInfo={userInfo} />
                    ) : (
                        <>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button size="sm" asChild>
                                <Link href="/register">Register</Link>
                            </Button>
                        </>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="px-6 py-6">
                            <SheetHeader className="mb-6">
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>

                            <nav className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-base font-medium text-muted-foreground hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="my-6 h-px bg-border" />

                            {userInfo ? (
                                <MobileUserMenu userInfo={userInfo} />
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <Button variant="outline" asChild className="w-full">
                                        <Link href="/login">Login</Link>
                                    </Button>
                                    <Button asChild className="w-full">
                                        <Link href="/register">Register</Link>
                                    </Button>
                                </div>
                            )}
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
