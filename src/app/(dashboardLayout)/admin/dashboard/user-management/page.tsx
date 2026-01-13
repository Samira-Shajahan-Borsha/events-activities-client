import UserManagementHeader from '@/components/modules/Admin/UserManagement/UserManagementHeader'
import UserTable from '@/components/modules/Admin/UserManagement/UserTable'
import RefreshButton from '@/components/shared/RefreshButton'
import { TableSkeleton } from '@/components/shared/TableSkeleton'
import { getAllUsers } from '@/services/admin/userManagement'
import { Suspense } from 'react'

const UserManagementPage = async () => {
  const result = await getAllUsers();
  return (
    <div className='flex flex-col gap-4'>
      <UserManagementHeader />
      <div className="flex">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <UserTable users={result.data} />
      </Suspense>
    </div>
  )
}

export default UserManagementPage