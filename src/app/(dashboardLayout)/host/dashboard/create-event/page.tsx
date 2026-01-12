import CreateEventManagementHeader from '@/components/modules/event/CreateEventPageHeader'
import EventForm from '@/components/modules/event/EventForm'

const CreateEventPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <CreateEventManagementHeader />
      <EventForm />
    </div>
  )
}

export default CreateEventPage