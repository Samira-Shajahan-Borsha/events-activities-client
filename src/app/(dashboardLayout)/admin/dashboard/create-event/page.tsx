import CreateEventManagementHeader from '@/components/modules/EventsManagement/CreateEventPageHeader'
import EventForm from '@/components/modules/EventsManagement/EventForm'

const CreateEventPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <CreateEventManagementHeader />
      <EventForm />
    </div>
  )
}

export default CreateEventPage