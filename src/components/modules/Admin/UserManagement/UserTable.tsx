"use client"

import ManagementTable from '@/components/shared/ManagementTable'
import { userColumns } from './UserColumns';
import { IUser } from '@/types/user.interface';

interface IUserTableProps {
    users: IUser[];
}

const UserTable = ({ users }: IUserTableProps) => {
    return (
        <>
            <ManagementTable
                data={users}
                columns={userColumns}
                // onView={(user) => console.log("Edit:", user._id)}
                getRowKey={(user) => user._id}
                emptyMessage="No users found"
            />
        </>
    )
}

export default UserTable