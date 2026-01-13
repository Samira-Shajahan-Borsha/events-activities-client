import HostManagementHeader from '@/components/modules/Admin/HostManagement/HostManagementHeader'
import HostTable from '@/components/modules/Admin/HostManagement/HostTable'
import RefreshButton from '@/components/shared/RefreshButton'
import { TableSkeleton } from '@/components/shared/TableSkeleton'
import { getAllHosts } from '@/services/admin/userManagement'
import { Suspense } from 'react'

const HostManagementPage = async () => {
    const result = await getAllHosts();

    return (
        <div className='flex flex-col gap-4'>
            <HostManagementHeader />
            <div className="flex">
                <RefreshButton />
            </div>
            <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <HostTable hosts={result.data} />
            </Suspense>
        </div>
    )
}

export default HostManagementPage