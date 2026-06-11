import { Column } from "@/components/shared/ManagementTable";
import { Badge } from "@/components/ui/badge";
import { ITicket, TICKET_STATUS } from "@/types/ticket.interface";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const myTicketColumns: Column<ITicket>[] = [
    {
        header: "Event",
        accessor: (row) => (
            <Link href={`/events/${row.event.slug}`}>
                <div className="flex items-center gap-2">
                    <div className="relative h-8 w-8 overflow-hidden rounded-sm border border-border bg-muted">
                        {row.event.image ? (
                            <Image
                                src={row.event.image}
                                alt={row.event.name}
                                fill
                                unoptimized
                                sizes="48px"
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center">
                                <ImageIcon className="h-5 w-5 text-muted-foreground" />
                            </div>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1">
                            {row.event.name}
                        </span>
                        <span className="text-xs text-muted-foreground uppercase tracking-tight">
                            Ticket ID: {row._id.slice(-6)}
                        </span>
                    </div>
                </div>
            </Link>
        ),
        className: "min-w-[220px]",
    },
    {
        header: "Type",
        accessor: (row) => (
            <Badge
                variant="outline"
                className="capitalize font-normal border-border text-muted-foreground"
            >
                {row.event.type}
            </Badge>
        ),
        className: "min-w-[120px]",
    },
    {
        header: "Date & Time",
        accessor: (row) => (
            <span className="text-sm text-muted-foreground truncate">
                {format(new Date(row.event.date), "MMM do, yyyy 'at' h:mm a")}
            </span>
        ),
        className: "max-w-[220px]",
    },
    {
        header: "Location",
        accessor: (row) => (
            <span className="text-sm text-muted-foreground truncate">
                {row.event.location}
            </span>
        ),
        className: "max-w-[220px]",
    },
    {
        header: "Price",
        accessor: (row) => (
            <span className="font-medium text-sm text-foreground">
                {row.event.isPaid === "PAID"
                    ? `$${row.event.joiningFee.toFixed(2)}`
                    : <span className="text-primary font-bold">Free</span>
                }
            </span>
        ),
    },
    {
        header: "Ticket Status",
        accessor: (row) => {
            const statusConfig: Record<TICKET_STATUS, string> = {
                [TICKET_STATUS.PENDING]: "bg-amber-500/10 text-amber-600 border-amber-500/20",
                [TICKET_STATUS.CONFIRMED]: "bg-primary text-primary-foreground border-transparent",
                [TICKET_STATUS.CANCELED]: "bg-destructive text-destructive-foreground border-transparent",
                [TICKET_STATUS.FAILED]: "bg-red-200 text-red-700 border-red-200", // <-- add this
            };

            return (
                <Badge
                    className={cn(
                        "font-bold shadow-none pointer-events-none px-2.5 py-0.5",
                        statusConfig[row.status]
                    )}
                >
                    {row.status}
                </Badge>
            );
        },
    },
    {
        header: "Purchased At",
        accessor: (row) => (
            <span className="text-sm text-muted-foreground truncate">
                {format(new Date(row.createdAt), "MMM do, yyyy h:mm a")}
            </span>
        ),
    },
];
