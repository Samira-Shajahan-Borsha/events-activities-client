import * as Icons from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IEvent } from "@/types/event.interface";

export const CalendarIcon = Icons.Calendar;
export const MapPinIcon = Icons.MapPin;
export const UsersIcon = Icons.Users;
export const ArrowUpRightIcon = Icons.ArrowUpRight;

export default function EventCard({ event }: { event: IEvent }) {
    const formattedDate = format(new Date(event.date), "eee, MMM dd • hh:mm a");

    return (
        <Card className="relative rounded-2xl bg-white dark:bg-zinc-950 py-0 shadow-sm border">
            <div className="relative h-48 w-full">
                <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent rounded-t-2xl" />

                <Badge
                    className={`absolute top-2 right-2 px-2 py-0.5 rounded-md text-xs font-semibold ${event.isPaid === "FREE" ? "bg-emerald-500/90 text-white" : "bg-teal-600/90 text-white"
                        }`}
                >
                    {event.isPaid === "FREE" ? "FREE" : `$${event.joiningFee}`}
                </Badge>

                <Badge className="absolute top-2 left-2 bg-white/30 backdrop-blur-sm text-xs text-white px-2 py-0.5 rounded-md uppercase font-bold">
                    {event.type}
                </Badge>
            </div>

            <div className="p-4 space-y-2">
                <div className="flex items-center gap-1 text-xs text-teal-600 font-medium uppercase tracking-tight">
                    <CalendarIcon className="h-3 w-3" />
                    {formattedDate}
                </div>

                <Link href={`/events/${event.slug}`}>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white line-clamp-1 hover:text-teal-500 transition-all">
                        {event.name}
                    </h3>
                </Link>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                    {event.description}
                </p>

                <div className="pt-1 flex items-center justify-between text-xs text-zinc-400">
                    <div className="flex items-center gap-1">
                        <MapPinIcon className="h-3 w-3" />
                        <span>{event.location.split(",")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <UsersIcon className="h-3 w-3" />
                        <span>{event.maxParticipants} max</span>
                    </div>
                </div>

                <div className="mt-4">
                    <Button
                        asChild
                        variant="secondary"
                        className="w-full flex items-center justify-center gap-2 px-5 py-2 text-white bg-teal-600 hover:bg-teal-500 transition-all rounded-xl font-semibold text-sm"
                    >
                        <Link href={`/events/${event.slug}`}>
                            View Details <ArrowUpRightIcon className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    );
}
