"use client"

import ManagementPageHeader from "@/components/shared/ManagementPageHeader"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const CreateEventManagementHeader = () => {
    const router = useRouter()

    return (
        <ManagementPageHeader
            title="Create Event"
            description="Fill in the details below to add a new event"
            action={{
                label: "Back to Events",
                icon: ArrowLeft,
                onClick: () => router.push("/host/dashboard/event-management"),
            }}
        />
    )
}

export default CreateEventManagementHeader