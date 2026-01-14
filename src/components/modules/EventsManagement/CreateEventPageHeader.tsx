"use client"

import ManagementPageHeader from "@/components/shared/ManagementPageHeader"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface CreateEventManagementHeaderProps {
    role: string
}

const CreateEventManagementHeader = ({ role }: CreateEventManagementHeaderProps) => {
    const router = useRouter()

    return (
        <ManagementPageHeader
            title="Create Event"
            description="Fill in the details below to add a new event"
            action={{
                label: "Back to Events",
                icon: ArrowLeft,
                onClick: async () => {
                    router.push(`${role === "HOST" ? '/host' : "/admin"}/dashboard/event-management`)
                }
            }}
        />
    )
}

export default CreateEventManagementHeader