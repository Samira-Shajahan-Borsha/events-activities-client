import { serverFetch } from "@/lib/server-fetch";
import EventCard from "@/components/modules/event/EventCard";
import { IEvent } from "@/types/event.interface";

export default async function ExploreEventsPage() {
  const res = await serverFetch.get(`/event/all-events`);
  const { data, meta } = await res.json();
  const events: IEvent[] = data;

  return (
    <div>
      {/* ---------------- Header ---------------- */}
      <section className="border-b">
        <div className="container py-12 space-y-6">
          <div>
            <h1 className="text-4xl font-bold">
              Discover <span className="text-teal-600">Events</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Explore networking nights, masterclasses, and festivals near you.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- Events Grid ---------------- */}
      <main className="container py-12">
        {events.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </main>
    </div>
  );
}