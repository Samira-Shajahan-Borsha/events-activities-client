import EventManagementHeader from '@/components/modules/EventsManagement/EventManagementHeader'
import EventTable from '@/components/modules/EventsManagement/EventTable'
import RefreshButton from '@/components/shared/RefreshButton'
import SearchFilter from '@/components/shared/SearchFilter'
import SelectFilter from '@/components/shared/SelectFilter'
import TablePagination from '@/components/shared/TablePagination'
import { TableSkeleton } from '@/components/shared/TableSkeleton'
import { queryStringFormatter } from '@/lib/formatters'
import { getAllEvents } from '@/services/event/eventManagement'
import { EVENT_STATUS, IS_PAID, } from '@/types/event.interface'
import { Suspense } from 'react'

const EventManagementPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const searchParamsObj = await searchParams;

    const queryString = queryStringFormatter(searchParamsObj);

    const result = await getAllEvents(queryString);

    return (
        <div className='flex flex-col gap-4'>
            <EventManagementHeader />
            <div className="flex items-center gap-4 flex-wrap">
                <SearchFilter paramName="searchTerm" placeholder="Search events..." />
                <SelectFilter
                    paramName="status"
                    placeholder="Filter by status"
                    options={Object.values(EVENT_STATUS).map((status) => ({
                        label: status.charAt(0) + status.slice(1).toLowerCase(),
                        value: status,
                    }))}
                />
                <SelectFilter
                    paramName="isPaid"
                    placeholder="Filter by payment"
                    options={Object.values(IS_PAID).map((isPaid) => ({
                        label: isPaid === "PAID" ? "Paid" : "Free",
                        value: isPaid,
                    }))}
                />
                <RefreshButton />
            </div>
            <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <EventTable events={result.data} />
                <TablePagination currentPage={result.meta.page} totalPages={result.meta.totalPage} />
            </Suspense>
        </div>
    )
}

export default EventManagementPage