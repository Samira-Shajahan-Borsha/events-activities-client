"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { logout } from "@/services/auth/logout";
import { IProfile } from "@/types/user.interface";
import {
    KeyRoundIcon,
    LayoutDashboard,
    LogOutIcon,
    UserCircle,
    UserPenIcon,
} from "lucide-react";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/formatters";

interface MobileUserMenuProps {
    userInfo: IProfile;
}

const MobileUserMenu = ({ userInfo }: MobileUserMenuProps) => {
    return (
        <div className="space-y-4">
            <div className="flex gap-x-2 items-center">
                <Avatar className="h-9 w-9 rounded-full">
                    <AvatarImage src={userInfo.profilePhoto} alt={userInfo?.user.fullName} className="object-cover" />
                    <AvatarFallback className="font-semibold">
                        {getInitials(userInfo?.user.fullName)}
                    </AvatarFallback>
                </Avatar>
                {/* User Info */}
                <div>
                    <p className="text-sm font-medium">{userInfo.user.fullName}</p>
                    <p className="text-xs text-muted-foreground">
                        {userInfo.user.email}
                    </p>
                </div>
            </div>

            <div className="h-px bg-border" />

            {/* Links */}
            <nav className="flex flex-col gap-3">
                <Link href={getDefaultDashboardRoute(userInfo.user.role)}>
                    <Button variant="ghost" className="w-full justify-start">
                        <LayoutDashboard size={16} className="mr-2 opacity-60" />
                        Dashboard
                    </Button>
                </Link>

                <Link href={`/profile/${userInfo.user._id}`}>
                    <Button variant="ghost" className="w-full justify-start">
                        <UserCircle size={16} className="mr-2 opacity-60" />
                        My Profile
                    </Button>
                </Link>

                <Link href="/my-profile">
                    <Button variant="ghost" className="w-full justify-start">
                        <UserPenIcon size={16} className="mr-2 opacity-60" />
                        Edit Profile
                    </Button>
                </Link>

                <Link href="/change-password">
                    <Button variant="ghost" className="w-full justify-start">
                        <KeyRoundIcon size={16} className="mr-2 opacity-60" />
                        Change Password
                    </Button>
                </Link>

                <Button
                    variant="secondary"
                    className="w-full justify-start"
                    onClick={logout}
                >
                    <LogOutIcon size={16} className="mr-2" />
                    Logout
                </Button>
            </nav>
        </div>
    );
};

export default MobileUserMenu;
