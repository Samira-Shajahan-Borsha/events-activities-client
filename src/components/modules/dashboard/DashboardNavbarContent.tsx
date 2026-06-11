"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { IProfile } from "@/types/user.interface";
import UserDropdown from "@/components/modules/Dashboard/UserDropdown";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ModeToggle } from "@/components/shared/ModeToggler";

interface DashboardNavbarContentProps {
    userInfo: IProfile
}

const DashboardNavbarContent = ({ userInfo }: DashboardNavbarContentProps) => {
    return (
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                />
                <Link href="/">
                    <h1 className="text-base font-medium">Home</h1>
                </Link>
                <div className="ml-auto flex items-center gap-3">
                    <ModeToggle />
                    <UserDropdown userInfo={userInfo} />
                </div>
            </div>
        </header>
    )
}

export default DashboardNavbarContent