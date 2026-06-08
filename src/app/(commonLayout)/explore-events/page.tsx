import EventCard from "@/components/modules/Events/EventCard";
import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import TablePagination from "@/components/shared/TablePagination";
import { queryStringFormatter } from "@/lib/formatters";
import { getAllEvents } from "@/services/event/eventManagement";
import { EVENT_STATUS, IEvent, IS_PAID } from "@/types/event.interface";
import { Compass } from "lucide-react";

export default async function ExploreEventsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const searchParamsObj = await searchParams;

  searchParamsObj.limit = "12";

  const queryString = queryStringFormatter(searchParamsObj);

  const result = await getAllEvents(queryString);

  const events: IEvent[] = result?.data;

  const eventTypes = Array.from(new Set(events?.map((e) => e.type))).map((type) => ({
    label: type,
    value: type,
  }));

  return (
    <main>
      <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/20 py-20 md:py-24">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Compass className="w-4 h-4" />
            <span>Discover Experiences</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            Find Events That Match Your{" "}
            <span className="text-primary">Interests</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore workshops, networking sessions, sports activities, conferences,
            community gatherings, and more — all in one place.
          </p>
        </div>
      </section>

      <section className="border-b mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="container py-12 space-y-6">
          {/* Search & Filter */}
          <div className="flex flex-wrap gap-4 w-full">
            <SearchFilter paramName="searchTerm" placeholder="Search events..." />
            <SelectFilter
              paramName="status"
              placeholder="Filter by status"
              options={Object.values(EVENT_STATUS).map((status) => ({
                label: status.charAt(0) + status.slice(1).toLowerCase(),
                value: status,
              }))}
            />
            <SelectFilter
              paramName="isPaid"
              placeholder="Filter by payment"
              options={Object.values(IS_PAID).map((isPaid) => ({
                label: isPaid === "PAID" ? "Paid" : "Free",
                value: isPaid,
              }))}
            />
            <SelectFilter
              paramName="type"
              placeholder="Filter by event type"
              options={eventTypes}
            />
            <ClearFiltersButton />
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {events?.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">No events found.</p>
        )}

        <div className="mt-10">
          {
            events?.length ? <TablePagination currentPage={result.meta?.page} totalPages={result.meta?.totalPage} /> : <></>
          }
        </div>
      </div>
    </main>
  );
}
