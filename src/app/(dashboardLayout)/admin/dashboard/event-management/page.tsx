import EventManagementHeader from '@/components/modules/event/EventManagementHeader'
import EventTable from '@/components/modules/event/EventTable'
import RefreshButton from '@/components/shared/RefreshButton'
import { TableSkeleton } from '@/components/shared/TableSkeleton'
import { getAllEvents } from '@/services/event/eventManagement'
import { Suspense } from 'react'

const EventManagementPage = async () => {
    const result = await getAllEvents();
    return (
        <div className='flex flex-col gap-4'>
            <EventManagementHeader />
            <div className="flex">
                <RefreshButton />
            </div>
            <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <EventTable events={result.data} />
            </Suspense>
        </div>
    )
}

export default EventManagementPage