import { Column } from "@/components/shared/ManagementTable";
import { Badge } from "@/components/ui/badge";
import { IEvent, EVENT_STATUS } from "@/types/event.interface";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const eventColumns: Column<IEvent>[] = [
    {
        header: "Image",
        accessor: (row) => (
            <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-border bg-muted">
                {row.image ? (
                    <Image src={row.image} alt={row.name} fill className="object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                )}
            </div>
        ),
        className: "w-[100px]",
    },
    {
        header: "Event Name",
        accessor: (row) => (
            <div className="flex flex-col">
                <Link
                    href={`/events/${row.slug}`}
                    className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1"
                >
                    {row.name}
                </Link>
                <span className="text-xs text-muted-foreground uppercase tracking-tight">ID: {row._id.slice(-6)}</span>
            </div>
        ),
        className: "min-w-[200px]",
    },
    {
        header: "Type",
        accessor: (row) => (
            <Badge variant="outline" className="capitalize font-normal border-border text-muted-foreground">
                {row.type}
            </Badge>
        ),
    },
    {
        header: "Date & Time",
        accessor: (row) => <span className="text-sm text-muted-foreground truncate">{format(new Date(row.date), "MMM do, yyyy 'at' h:mm a")}</span>,
        className: "max-w-[220px]",
    },
    {
        header: "Location",
        accessor: (row) => (
            <span className="text-sm text-muted-foreground truncate">{row.location}</span>
        ),
        className: "max-w-[220px]",
    },
    {
        header: "Price",
        accessor: (row) => (
            <span className="font-medium text-sm text-foreground">
                {row.isPaid === "PAID" ? `$${row.joiningFee.toFixed(2)}` : (
                    <span className="text-primary font-bold">Free</span>
                )}
            </span>
        ),
    },
    {
        header: "Capacity",
        accessor: (row) => (
            <span className="text-sm text-muted-foreground tabular-nums">
                {row.minParticipants}–{row.maxParticipants}
            </span>
        ),
    },
    {
        header: "Status",
        accessor: (row) => {
            const statusConfig: Record<EVENT_STATUS, string> = {
                [EVENT_STATUS.OPEN]: "bg-primary text-primary-foreground border-transparent",
                [EVENT_STATUS.FULL]: "bg-amber-500/10 text-amber-600 border-amber-500/20",
                [EVENT_STATUS.CANCELLED]: "bg-destructive text-destructive-foreground border-transparent",
                [EVENT_STATUS.COMPLETED]: "bg-secondary text-secondary-foreground border-transparent",
            };

            return (
                <Badge
                    className={cn(
                        "font-bold shadow-none pointer-events-none px-2.5 py-0.5",
                        statusConfig[row.status as EVENT_STATUS]
                    )}
                >
                    {row.status}
                </Badge>
            );
        },
    }
];