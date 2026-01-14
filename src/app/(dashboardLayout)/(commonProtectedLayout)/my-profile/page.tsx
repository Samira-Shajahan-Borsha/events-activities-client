import EditProfileForm from "@/components/modules/Profile/EditProfileForm";
import EditProfilePageHeader from "@/components/modules/Profile/EditProfilePageHeader";
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";
import { Suspense } from "react";

const MyProfilePage = async () => {
  const profileData = await getMyProfileInfo();

  if (!profileData) {
    return <div>Profile not found or you are not authorized.</div>;
  }

  return (
    <div className='flex flex-col gap-4'>
      <EditProfilePageHeader />
      <Suspense>
        <EditProfileForm initialData={profileData} imageUrl={profileData.profilePhoto ? profileData.profilePhoto : undefined} />
      </Suspense>
    </div>
  );
};

export default MyProfilePage;
