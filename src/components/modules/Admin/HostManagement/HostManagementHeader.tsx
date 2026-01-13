"use client"

import ManagementPageHeader from '@/components/shared/ManagementPageHeader'
import { CalendarPlus } from 'lucide-react';

const HostManagementHeader = () => {
    return (
        <ManagementPageHeader
            title="Host Management"
            description="Manage hosts, their profiles, and related information"
        />
    )
}

export default HostManagementHeader