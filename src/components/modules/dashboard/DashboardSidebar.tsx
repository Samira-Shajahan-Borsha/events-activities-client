import { getUserInfo } from "@/services/auth/getUserInfo";
import { IUserInfo } from "@/types/user.interface";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { getDefaultDashboardRoute, UserRole } from "@/lib/auth-utils";
import {  NavSection } from "@/types/dashboard.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";

const DashboardSidebar = async () => {
  const userInfo = await getUserInfo() as IUserInfo;
  const navItems: NavSection[] = getNavItemsByRole(userInfo.role as UserRole)
  const dashboardHome = getDefaultDashboardRoute(userInfo.role as UserRole)

  return <DashboardSidebarContent
    userInfo={userInfo}
    navItems={navItems}
    dashboardHome={dashboardHome}
  />
}

export default DashboardSidebar