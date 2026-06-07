import EventManagementHeader from '@/components/modules/EventsManagement/EventManagementHeader'
import EventTable from '@/components/modules/EventsManagement/EventTable'
import ClearFiltersButton from '@/components/shared/ClearFiltersButton'
import RefreshButton from '@/components/shared/RefreshButton'
import SearchFilter from '@/components/shared/SearchFilter'
import SelectFilter from '@/components/shared/SelectFilter'
import { TableSkeleton } from '@/components/shared/TableSkeleton'
import { queryStringFormatter } from '@/lib/formatters'
import { getUserInfo } from '@/services/auth/getUserInfo'
import { getMyEvents } from '@/services/event/eventManagement'
import { EVENT_STATUS, IS_PAID } from '@/types/event.interface'
import { IUserInfo } from '@/types/user.interface'
import { Suspense } from 'react'

const EventManagement = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {
    const searchParamsObj = await searchParams;

    const queryString = queryStringFormatter(searchParamsObj); // {searchTerm: "Music", status: "ACTIVE"} => "searchTerm=Music&status=ACTIVE"
    const result = await getMyEvents(queryString);
    const authInfo = await getUserInfo() as IUserInfo;

    return (
        <div className='flex flex-col gap-4'>
            <EventManagementHeader role={authInfo && authInfo!.role} />
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
                <ClearFiltersButton />
            </div>
            <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <EventTable events={result.data} role={authInfo && authInfo!.role} />
            </Suspense>
        </div>
    )
}

export default EventManagement