import EventManagementHeader from '@/components/modules/event/EventManagementHeader'
import EventTable from '@/components/modules/event/EventTable'
import RefreshButton from '@/components/shared/RefreshButton'
import { TableSkeleton } from '@/components/shared/TableSkeleton'
import { getMyEvents } from '@/services/event/eventManagement'
import { Suspense } from 'react'

const EventManagement = async () => {
    const result = await getMyEvents();
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

export default EventManagement