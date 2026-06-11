import HostManagementHeader from '@/components/modules/Admin/HostManagement/HostManagementHeader'
import HostTable from '@/components/modules/Admin/HostManagement/HostTable'
import ClearFiltersButton from '@/components/shared/ClearFiltersButton'
import RefreshButton from '@/components/shared/RefreshButton'
import SearchFilter from '@/components/shared/SearchFilter'
import SelectFilter from '@/components/shared/SelectFilter'
import TablePagination from '@/components/shared/TablePagination'
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
                <ClearFiltersButton />
            </div>
            <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <HostTable hosts={result.data} />
                <TablePagination currentPage={result.meta.page} totalPages={result.meta.totalPage} />
            </Suspense>
        </div>
    )
}

export default HostManagementPage