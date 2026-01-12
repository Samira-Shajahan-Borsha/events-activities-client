"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import ManagementTable from "@/components/shared/ManagementTable";
import { IEvent } from "@/types/event.interface";
import { eventColumns } from "./EventColumns";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import { deleteEvent } from "@/services/event/eventManagement";
import { useRouter } from "next/navigation";

interface IEventTableProps {
    events: IEvent[];
}

const EventTable = ({ events }: IEventTableProps) => {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isDeleting, setIsDeleting] = useState(false);
    const [deletingEvent, setDeletingEvent] = useState<IEvent | null>(null);

    const handleRefresh = () => {
        startTransition(() => {
            router.refresh();
        });
    }

    const handleDelete = (event: IEvent) => {
        setDeletingEvent(event);
    };

    const handleConfirmDelete = async () => {
        if (!deletingEvent) return;

        try {
            setIsDeleting(true);
            const res = await deleteEvent(deletingEvent._id);

            if (res.success) {
                toast.success("Event deleted successfully");
                setDeletingEvent(null);
                handleRefresh();
            } else {
                toast.error(res.message || "Failed to delete event");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <ManagementTable
                data={events}
                columns={eventColumns}
                onDelete={handleDelete}
                onEdit={(event) => console.log("Edit:", event._id)}
                onView={(event) => router.push(`/events/${event.slug}`)}
                getRowKey={(event) => event._id}
                emptyMessage="No events found"
            />

            <DeleteConfirmationDialog
                open={!!deletingEvent}
                onOpenChange={(open) => !open && setDeletingEvent(null)}
                onConfirm={handleConfirmDelete}
                title="Delete Event"
                itemName={deletingEvent?.name}
                description={
                    deletingEvent
                        ? `Are you sure you want to delete the "${deletingEvent.name}" event? This action cannot be undone.`
                        : undefined
                }
                isDeleting={isDeleting}
            />
        </>
    );
};

export default EventTable;