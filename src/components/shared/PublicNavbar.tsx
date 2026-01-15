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
import NavLink from "./NavLink";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Explore Events" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/become-a-host", label: "Become a Host" }
];

export default async function PublicNavbar() {
    const userInfo = await getMyProfileInfo();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-0">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
                    <CalendarDays className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold tracking-tight text-primary">
                        EventHub
                    </span>
                </Link>

                {/* Desktop Nav - Centered with consistent spacing */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <NavLink key={item.label} {...item} />
                    ))}

                    {userInfo && (
                        <NavLink
                            href={getDefaultDashboardRoute(userInfo.user.role)}
                            label="Dashboard"
                        />
                    )}
                </nav>

                {/* Desktop Auth Section */}
                <div className="hidden md:flex items-center gap-3">
                    {userInfo ? (
                        <UserDropdown userInfo={userInfo} />
                    ) : (
                        <>
                            <Button variant="ghost" size="sm" asChild className="rounded-xl font-medium">
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button size="sm" asChild className="rounded-xl font-medium px-5">
                                <Link href="/register">Register</Link>
                            </Button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Section */}
                <div className="md:hidden flex items-center gap-2">
                    {/* If user is logged in, show dropdown even on mobile next to menu */}
                    {userInfo && <UserDropdown userInfo={userInfo} />}

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-xl">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-75 px-6 py-6">
                            <SheetHeader className="mb-8 text-left">
                                <SheetTitle className="text-primary flex items-center gap-2">
                                    <CalendarDays className="h-5 w-5" />
                                    EventHub
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <NavLink key={item.label} {...item} />
                                ))}
                            </div>

                            <div className="my-6 h-px bg-border/60" />

                            <div className="space-y-4">
                                {userInfo ? (
                                    <MobileUserMenu userInfo={userInfo} />
                                ) : (
                                    <div className="flex flex-col gap-3">
                                        <Button variant="outline" asChild className="w-full rounded-xl">
                                            <Link href="/login">Login</Link>
                                        </Button>
                                        <Button asChild className="w-full rounded-xl">
                                            <Link href="/register">Register</Link>
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}