import HostManagementHeader from '@/components/modules/Admin/HostManagement/HostManagementHeader'
import HostTable from '@/components/modules/Admin/HostManagement/HostTable'
import RefreshButton from '@/components/shared/RefreshButton'
import SearchFilter from '@/components/shared/SearchFilter'
import SelectFilter from '@/components/shared/SelectFilter'
import { TableSkeleton } from '@/components/shared/TableSkeleton'
import { queryStringFormatter } from '@/lib/formatters'
import { getAllHosts } from '@/services/admin/userManagement'
import { STATUS } from '@/types/user.interface'
import { Suspense } from 'react'

const HostManagementPage = async ({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) => {

    const searchParamsObj = await searchParams;

    const queryString = queryStringFormatter(searchParamsObj);

    const result = await getAllHosts(queryString);

    return (
        <div className='flex flex-col gap-4'>
            <HostManagementHeader />
            <div className="flex items-center gap-4 flex-wrap">
                <SearchFilter paramName="searchTerm" placeholder="Search hosts..." />
                <SelectFilter
                    paramName="status"
                    placeholder="Filter by status"
                    options={Object.values(STATUS).map((status) => ({
                        label: status.charAt(0) + status.slice(1).toLowerCase(),
                        value: status,
                    }))}
                />
                <RefreshButton />
            </div>
            <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <HostTable hosts={result.data} />
            </Suspense>
        </div>
    )
}

export default HostManagementPage