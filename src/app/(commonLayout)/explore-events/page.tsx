import EventCard from "@/components/modules/Events/EventCard";
import SearchFilter from "@/components/shared/SearchFilter";
import SelectFilter from "@/components/shared/SelectFilter";
import { queryStringFormatter } from "@/lib/formatters";
import { IEvent } from "@/types/event.interface";
import { EVENT_STATUS, IS_PAID } from "@/types/event.interface";
import { getAllEvents } from "@/services/event/eventManagement";
import TablePagination from "@/components/shared/TablePagination";

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
    <div className="px-6">
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

          {/* Search & Filter */}
          <div className="flex flex-wrap items-center gap-4">
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
          </div>
        </div>
      </section>

      <div className="container py-12">
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
    </div>
  );
}
