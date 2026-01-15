import { IProfile } from "@/types/user.interface";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";

const DashboardNavbar = async () => {
    const userInfo = await getMyProfileInfo() as IProfile;

    return (
        <DashboardNavbarContent userInfo={userInfo} />
    )
}

export default DashboardNavbar