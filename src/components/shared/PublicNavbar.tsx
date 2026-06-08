import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import UserDropdown from "../modules/Dashboard/UserDropdown";
import MobileUserMenu from "./MobileUserMenu";
import { ModeToggle } from "./ModeToggler";
import NavLink from "./NavLink";
import Logo from "./Logo";

export const navItems = [
    { href: "/", label: "Home" },
    { href: "/explore-events", label: "Explore Events" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/become-a-host", label: "Become a Host" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default async function PublicNavbar() {
    const userInfo = await getMyProfileInfo();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background supports-backdrop-filter:bg-background">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <Logo />

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink key={item.label} href={item.href} label={item.label} />
                    ))}
                    {userInfo && (
                        <NavLink
                            href={getDefaultDashboardRoute(userInfo.user.role)}
                            label="Dashboard"
                        />
                    )}
                </div>

                {/* Desktop Auth Section */}
                <div className="hidden lg:flex items-center gap-2">
                    <ModeToggle />
                    {userInfo ? (
                        <UserDropdown userInfo={userInfo} />
                    ) : (
                        <>
                            <Button variant="ghost" asChild className="font-medium">
                                <Link href="/login">
                                    <LogIn className="w-4 h-4 mr-2" />
                                    Login</Link>
                            </Button>
                            <Button asChild className="font-medium px-6">
                                <Link href="/register">Register</Link>
                            </Button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Section */}
                <div className="lg:hidden flex items-center gap-2">
                    <ModeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-xl p-2 hover:bg-muted transition"
                            >
                                <Menu className="h-6 w-6 text-foreground" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="right"
                            className="py-8"
                        >
                            <SheetHeader className="text-left">
                                <SheetTitle className="text-primary flex items-center gap-3 text-lg sm:text-xl font-bold">
                                    <Logo />
                                </SheetTitle>
                                <SheetDescription className="sr-only">Logo</SheetDescription>
                            </SheetHeader>

                            {/* Navigation links */}
                            <div className="flex flex-col gap-3 px-4">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.label}
                                        {...item}
                                    />
                                ))}
                            </div>


                            <div className="my-2 h-px bg-border/40" />

                            {/* Auth / Mobile User Menu */}
                            <div className="flex flex-col gap-3 px-4">
                                {userInfo ? (
                                    <MobileUserMenu userInfo={userInfo} />
                                ) : (
                                    <>
                                        <Button
                                            variant="outline"
                                            asChild
                                            className="py-3 text-sm font-medium"
                                        >
                                            <Link href="/login">Login</Link>
                                        </Button>
                                        <Button
                                            asChild
                                            className="py-3 text-sm font-medium"
                                        >
                                            <Link href="/register">Register</Link>
                                        </Button>
                                    </>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
