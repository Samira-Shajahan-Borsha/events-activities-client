"use client"

import ManagementPageHeader from "@/components/shared/ManagementPageHeader"
import { CalendarPlus } from "lucide-react"
import { useRouter } from "next/navigation"

interface EventManagementHeaderProps {
    role: string
}

const EventManagementHeader = ({ role }: EventManagementHeaderProps) => {
    const router = useRouter();

    return (
        <ManagementPageHeader
            title="Event Management"
            description="Manage event information and details"
            action={{
                label: "Add Event",
                icon: CalendarPlus,
                onClick: async () => {
                    router.push(`${role === "HOST" ? '/host' : "/admin"}/dashboard/create-event`)
                }
            }}
        />
    )
}

export default EventManagementHeader