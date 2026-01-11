"use client";

import { NavUser } from "@/components/ui/nav-user";
import { NavMain } from "@/components/ui/nav-main";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { NavSection } from "@/types/dashboard.interface";
import { IUserInfo } from "@/types/user.interface";
import Link from "next/link";

interface DashboardSidebarContentProps {
    userInfo: IUserInfo;
    navItems: NavSection[];
    dashboardHome: string;
}

const DashboardSidebarContent = ({ userInfo, navItems, dashboardHome }: DashboardSidebarContentProps) => {
    return (
        <Sidebar collapsible="offcanvas">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link href={dashboardHome}>
                            <span className="text-xl font-semibold tracking-tight text-primary">
                                EventHub
                            </span>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain sections={navItems} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={userInfo} />
            </SidebarFooter>
        </Sidebar>
    )
}

export default DashboardSidebarContent