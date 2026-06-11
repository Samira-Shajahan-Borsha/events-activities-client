"use client";

import { NavUser } from "@/components/ui/nav-user";
import { NavMain } from "@/components/ui/nav-main";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { NavSection } from "@/types/dashboard.interface";
import { IProfile } from "@/types/user.interface";
import Link from "next/link";
import Logo from "@/components/shared/Logo";

interface DashboardSidebarContentProps {
    userInfo: IProfile;
    navItems: NavSection[];
    dashboardHome: string;
}

const DashboardSidebarContent = ({ userInfo, navItems, dashboardHome }: DashboardSidebarContentProps) => {
    return (
        <Sidebar collapsible="offcanvas">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Logo />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain sections={navItems} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser userInfo={userInfo} />
            </SidebarFooter>
        </Sidebar>
    )
}

export default DashboardSidebarContent