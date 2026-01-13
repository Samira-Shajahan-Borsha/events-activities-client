import { Column } from "@/components/shared/ManagementTable";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { User } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { IHost, STATUS } from "@/types/user.interface";

export const hostColumns: Column<IHost>[] = [
    {
        header: "Profile",
        accessor: (row) => (
            <div className="relative h-12 w-12 rounded-full border border-border bg-muted flex items-center justify-center overflow-hidden">
                {row.profile.profilePhoto ? (
                    <Image
                        src={row.profile.profilePhoto}
                        alt={row.fullName}
                        fill
                        className="object-cover"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                )}
            </div>
        ),
        className: "w-[30px]",
    },
    {
        header: "Full Name",
        accessor: (row) => (
            <div className="flex flex-col">
                <span className="font-semibold text-foreground line-clamp-1">{row.fullName}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-tight">ID: {row._id.slice(-6)}</span>
            </div>
        ),
        className: "min-w-[180px]",
    },
    {
        header: "Email",
        accessor: (row) => (
            <span className="text-sm text-muted-foreground truncate">{row.email}</span>
        ),
        className: "max-w-[220px]",
    },
    {
        header: "Status",
        accessor: (row) => {
            const statusColor: Record<STATUS, string> = {
                [STATUS.ACTIVE]: "bg-green-100 text-green-700 border-green-200",
                [STATUS.INACTIVE]: "bg-yellow-100 text-yellow-700 border-yellow-200",
                [STATUS.BLOCKED]: "bg-red-100 text-red-700 border-red-200",
            };

            return (
                <Badge
                    variant="outline"
                    className={cn(
                        "px-2 py-0.5 text-xs",
                        statusColor[row.status]
                    )}
                >
                    {row.status}
                </Badge>
            );
        },
    },
    {
        header: "Created At",
        accessor: (row) => format(new Date(row.createdAt), "MMM do, yyyy 'at' h:mm a"),
        className: "whitespace-nowrap text-sm text-foreground",
    },
    {
        header: "Updated At",
        accessor: (row) => format(new Date(row.updatedAt), "MMM do, yyyy 'at' h:mm a"),
        className: "whitespace-nowrap text-sm text-foreground",
    },

];
