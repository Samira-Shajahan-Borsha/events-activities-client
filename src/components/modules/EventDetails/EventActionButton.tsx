"use client"

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { IEvent, IS_PAID } from "@/types/event.interface";
import { IUser } from "@/types/user.interface";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { joinEvent } from "@/services/ticket/ticket";

interface IEventActionButtonProps {
    user: IUser | null;
    isParticipant: boolean;
    event: IEvent;
    participantsCount: number;
}

const EventActionButton = ({ user, isParticipant, event, participantsCount }: IEventActionButtonProps) => {
    const [isPending, startTransition] = useTransition();

    const isOpen = event.status === "OPEN";
    const isFull = participantsCount >= event.maxParticipants;

    const router = useRouter();

    const handleJoin = () => {
        if (!user) return;

        startTransition(async () => {
            try {
                const payload = { eventId: event._id };
                const data = await joinEvent(payload);

                if (!data.success) {
                    toast.error(data.message || "Failed to join event");
                    return;
                }

                if (event.isPaid === IS_PAID.PAID && data.data?.paymentUrl) {
                    window.location.href = data.data.paymentUrl;
                    return;
                }

                if (event.isPaid === IS_PAID.FREE) {
                    toast.success("Your ticket is confirmed! 🎉");
                    router.push('/dashboard/my-events');
                    return;
                }
                router.refresh();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                toast.error(err?.message || "Something went wrong");
            }
        });
    };

    if (!user) {
        return (
            <Button asChild className="w-full h-11">
                <Link href={`/login?redirect=/events/${event.slug}`}>
                    Login to join
                </Link>
            </Button>
        );
    }

    if (isParticipant) {
        return (
            <Button disabled className="w-full h-11 gap-2">
                <CheckCircle2 size={16} />
                Attending
            </Button>
        );
    }

    return (
        <Button
            onClick={handleJoin}
            disabled={isFull || !isOpen || isPending}
            className={`w-full h-11 ${isOpen && "cursor-pointer"}`}
        >
            {isPending ? "Joining..." : isFull ? "Event Full" : isOpen ? "Join Event" : "Closed"}
        </Button>
    );
};

export default EventActionButton;
