"use client"

import ManagementTable from '@/components/shared/ManagementTable'
import { userColumns } from './UserColumns';
import { IUser } from '@/types/user.interface';
import { useState } from 'react';
import UserDialog from './UserDialog';
import { useRouter } from 'next/navigation';

interface IUserTableProps {
    users: IUser[];
}

const UserTable = ({ users }: IUserTableProps) => {
    const [editingUser, setEditingUser] = useState<IUser | null>(null);

    const router = useRouter();

    const handleEdit = (user: IUser) => {
        setEditingUser(user);
    }

    return (
        <>
            <ManagementTable
                data={users}
                columns={userColumns}
                onView={(user) => router.push(`/user/${user._id}`)}
                onEdit={handleEdit}
                getRowKey={(user) => user._id}
                emptyMessage="No users found"
            />

            <UserDialog
                open={!!editingUser}
                onClose={() => setEditingUser(null)}
                user={editingUser}
                onSuccess={() => {
                    setEditingUser(null);
                }}
            />
        </>
    )
}

export default UserTable