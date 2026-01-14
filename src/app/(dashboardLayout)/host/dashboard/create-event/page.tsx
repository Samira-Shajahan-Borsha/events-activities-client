import CreateEventManagementHeader from '@/components/modules/EventsManagement/CreateEventPageHeader'
import EventForm from '@/components/modules/EventsManagement/EventForm'
import { getUserInfo } from '@/services/auth/getUserInfo';
import { IUserInfo } from '@/types/user.interface';

const CreateEventPage = async () => {
  const authInfo = await getUserInfo() as IUserInfo;
  return (
    <div className='flex flex-col gap-4'>
      <CreateEventManagementHeader role={authInfo && authInfo!.role} />
      <EventForm role={authInfo && authInfo!.role} />
    </div>
  )
}

export default CreateEventPage