import EditEventPageHeader from "@/components/modules/EventsManagement/EditEventPageHeader";
import EventForm from "@/components/modules/EventsManagement/EventForm";
import { getEvent } from "@/services/event/eventManagement";

interface IEditEventPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const EditEventPage = async ({ params }: IEditEventPageProps) => {
    const { slug } = await params;

    const result = await getEvent(slug);

    if (!result?.success) {
        throw new Error("Failed to load event");
    }

    const event = result.data;

    return (
        <div className="flex flex-col gap-4">
            <EditEventPageHeader />
            <EventForm
                eventId={event._id}
                defaultValues={{
                    name: event.name,
                    type: event.type,
                    location: event.location,
                    description: event.description,
                    date: event.date,
                    joiningFee: event.joiningFee,
                    minParticipants: event.minParticipants,
                    maxParticipants: event.maxParticipants,
                }}
                imageUrl={event.image}
            />
        </div>
    );
};

export default EditEventPage;
