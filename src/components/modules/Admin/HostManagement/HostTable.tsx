"use client"

import ManagementTable from '@/components/shared/ManagementTable'
import { IHost } from '@/types/user.interface';
import { hostColumns } from './HostColumns';

interface IHostTableProps {
    hosts: IHost[];
}

const HostTable = ({ hosts }: IHostTableProps) => {
    return (
        <>
            <ManagementTable
                data={hosts}
                columns={hostColumns}
                // onView={(host) => console.log("Edit:", host._id)}
                getRowKey={(host) => host._id}
                emptyMessage="No hosts found"
            />
        </>
    )
}

export default HostTable