import { Button } from '@/components/ui/button'
import { IEvent } from '@/types/event.interface'
import { IUser } from '@/types/user.interface'
import { CheckCircle2Icon } from 'lucide-react'
import Link from 'next/link'

interface IEventActionButtonProps { user: IUser | null, isParticipant: boolean, event: IEvent, participantsCount: number }

const EventActionButton = ({ user, isParticipant, event, participantsCount }: IEventActionButtonProps) => {
    const isOpen = event.status === "OPEN";
    const isFull = participantsCount >= event.maxParticipants;

    return (
        <>
            {!user ? (
                <Button asChild className="w-full h-11 cursor-pointer">
                    <Link href={`/login?redirect=/events/${event.slug}`}>Login to join</Link>
                </Button>
            ) : isParticipant ? (
                <Button disabled className="w-full h-11 gap-2">
                    <CheckCircle2Icon size={16} />
                    Attending
                </Button>
            ) : (
                <Button
                    disabled={isFull || !isOpen}
                    className="w-full h-11 cursor-pointer"
                >
                    {isFull ? "Event Full" : isOpen ? "Join Event" : "Closed"}
                </Button>
            )}
        </>
    )
}

export default EventActionButton