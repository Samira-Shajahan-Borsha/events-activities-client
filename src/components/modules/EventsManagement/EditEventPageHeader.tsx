"use client"

import ManagementPageHeader from "@/components/shared/ManagementPageHeader"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const EditEventPageHeader = () => {
    const router = useRouter()

    return (
        <ManagementPageHeader
            title="Edit Event"
            description="Update the event details below"
            action={{
                label: "Back to Events",
                icon: ArrowLeft,
                onClick: () => router.push("/host/dashboard/event-management"),
            }}
        />
    )
}

export default EditEventPageHeader