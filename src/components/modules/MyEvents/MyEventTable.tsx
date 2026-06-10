"use client"

import ManagementTable from '@/components/shared/ManagementTable'
import { ITicket } from '@/types/ticket.interface';
import { myTicketColumns } from './MyEventColumn';

interface IEventTableProps {
    tickets: ITicket[];
}

const MyEventTable = ({ tickets }: IEventTableProps) => {
    return (
        <ManagementTable
            data={tickets}
            columns={myTicketColumns}
            getRowKey={(ticket) => ticket._id}
        />
    )
}

export default MyEventTable