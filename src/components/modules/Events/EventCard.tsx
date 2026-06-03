import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { IEvent } from "@/types/event.interface";
import { format } from "date-fns";
import Link from "next/link";

const formatPrice = (isPaid: "FREE" | "PAID", fee: number): string => {
    if (isPaid === "FREE") return "Free";
    return `৳ ${fee}`;
};

export default function EventCard({ event }: { event: IEvent }) {

    return (
        <Link href={`/events/${event.slug}`}>
            <Card
                className="group overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 pt-0"
            >
                <div className="relative overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                        <Image
                            src={event.image}
                            alt={event.name}
                            fill
                            loading="eager"
                            unoptimized
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute top-2 left-3 flex gap-2">
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">{event.type}</Badge>
                    </div>
                    <div className="absolute top-2 right-3">
                        <span className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-foreground">
                            {formatPrice(event.isPaid, event.joiningFee)}
                        </span>
                    </div>
                </div>

                <CardContent className="px-5 flex flex-col gap-4">
                    <div>
                        <h3 className="font-semibold text-lg leading-snug text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                            {event.name}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                            {event.description}
                        </p>
                    </div>

                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4 text-primary shrink-0" />
                            <span>{format(new Date(event.date), "MMM d, yyyy")}</span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                            <span className="line-clamp-1">{event.location}</span>
                        </div>

                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4 text-primary shrink-0" />
                            <span>{event.maxParticipants} max participants</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
