import { IEvent } from "@/types/event.interface";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EventCard from "../Events/EventCard";

interface FeaturedEventsProps {
  events: IEvent[];
}

export default function HomeFeaturedEvents({ events }: FeaturedEventsProps) {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Upcoming Near You</h2>
          <p className="text-muted-foreground">Handpicked experiences happening in your city this week.</p>
        </div>
        <Button variant="outline" className="rounded-xl border-2" asChild>
          <Link href="/events" className="flex items-center gap-2">
            Explore All Events <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events?.length > 0 ? (
          events.slice(0, 8).map((event) => (
            <EventCard key={event.slug} event={event} />
          ))
        ) : (
          // Empty State
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed">
            <p className="text-muted-foreground font-medium">No upcoming events found. Be the first to host one!</p>
            <Button className="mt-4 bg-primary text-white" asChild>
                <Link href="/events/create">Create Event</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}