"use client"

import EventFormDialog from "./EventForm"
import ManagementPageHeader from "@/components/shared/ManagementPageHeader"
import { CalendarPlus, Plus } from "lucide-react"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import RefreshButton from "@/components/shared/RefreshButton"

const EventManagementHeader = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [, startTransition] = useTransition();
    const router = useRouter()

    const handleSuccess = () => {
        startTransition(() => {
            router.refresh()
        })
    }
    return (
        <>
            {/* <EventFormDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSuccess={handleSuccess}
            /> */}

            <ManagementPageHeader
                title="Event Management"
                description="Manage event information and details"
                action={{
                    label: "Add Event",
                    icon: CalendarPlus,
                    onClick: () => router.push('/host/dashboard/create-event')
                }} />
        </>
    )
}

export default EventManagementHeader