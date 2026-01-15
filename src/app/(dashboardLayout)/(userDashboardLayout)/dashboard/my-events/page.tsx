import MyEventPageHeader from '@/components/modules/MyEvents/MyEventPageHeader'
import MyEventTable from '@/components/modules/MyEvents/MyEventTable'
import RefreshButton from '@/components/shared/RefreshButton'
import { TableSkeleton } from '@/components/shared/TableSkeleton'
import { getMyTickets } from '@/services/ticket/ticket'
import { Suspense } from 'react'

const MyEventsPage = async () => {

    const result = await getMyTickets();

    return (
        <div className='flex flex-col gap-4'>
            <MyEventPageHeader />
            <div className="flex items-center gap-4 flex-wrap">
                <RefreshButton />
            </div>
            <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <MyEventTable tickets={result.data} />
            </Suspense>
        </div>
    )
}

export default MyEventsPage