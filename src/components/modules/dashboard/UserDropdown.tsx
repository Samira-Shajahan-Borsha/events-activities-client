"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/services/auth/logout";
import { IUserInfo } from "@/types/user.interface";
import { KeyRoundIcon, LogOutIcon, UserCircle, UserPenIcon } from "lucide-react";
import Link from "next/link";

interface UserDropdownProps {
    userInfo: IUserInfo
}

const UserDropdown = ({ userInfo }: UserDropdownProps) => {
    const handleLogout = async () => {
        await logout();
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto p-0">
                    <div className="relative">
                        <Avatar className="h-9 w-9">
                            <AvatarFallback className="font-semibold">
                                {/* {userData?.data?.name?.charAt(0)}  */}
                                p
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-64">
                <DropdownMenuLabel>
                    <p className="text-foreground truncate text-sm font-medium">{userInfo?.role}</p>
                    <p className="text-xs text-muted-foreground">{userInfo?.email}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href="/my-profile">
                        <DropdownMenuItem>
                            <UserCircle size={16} className="opacity-60" />
                            <span>My Profile</span>
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/edit-profile">
                        <DropdownMenuItem>
                            <UserPenIcon size={16} className="opacity-60" aria-hidden="true" />
                            <span>Edit Profile</span>
                        </DropdownMenuItem>
                    </Link>

                    <Link href='/change-password'>
                        <DropdownMenuItem
                        >
                            <KeyRoundIcon size={16} className="opacity-60" />
                            <span>Change Password</span>
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOutIcon size={16} className="opacity-60" />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    );
};

export default UserDropdown;
