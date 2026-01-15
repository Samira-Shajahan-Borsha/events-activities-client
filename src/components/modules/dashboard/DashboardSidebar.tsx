import { IProfile } from "@/types/user.interface";
import { getDefaultDashboardRoute, UserRole } from "@/lib/auth-utils";
import { NavSection } from "@/types/dashboard.interface";
import { getNavItemsByRole } from "@/lib/navItems.config";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";

const DashboardSidebar = async () => {
  const userInfo = await getMyProfileInfo() as IProfile;
  const navItems: NavSection[] = getNavItemsByRole(userInfo?.user.role as UserRole)
  const dashboardHome = getDefaultDashboardRoute(userInfo?.user.role as UserRole)

  console.log(userInfo)

  return <DashboardSidebarContent
    userInfo={userInfo}
    navItems={navItems}
    dashboardHome={dashboardHome}
  />
}

export default DashboardSidebar