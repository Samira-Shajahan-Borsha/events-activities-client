import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/services/event/eventManagement";
import { IEvent } from "@/types/event.interface";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import EventCard from "../Events/EventCard";

const FeaturedEvents = async () => {
    const result = await getAllEvents('');
    return (
        <section className="py-20 bg-muted/30">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Featured Events
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                            Discover upcoming events curated just for you. Join activities happening near you.
                        </p>
                    </div>
                    <Link href='/explore-events'>
                        <Button variant="ghost" className="mt-4 md:mt-0 text-primary hover:text-primary/80">
                            View All Events
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {result?.data?.slice(0, 8).map((event: IEvent) => (
                        <EventCard event={event} key={event._id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;
