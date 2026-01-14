import { Column } from "@/components/shared/ManagementTable";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { IHost, STATUS } from "@/types/user.interface";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { getInitials } from "@/lib/formatters";

export const hostColumns: Column<IHost>[] = [
    {
        header: "Profile",
        accessor: (row) => (
            <Link href={`/profile/${row._id}`}>
                <Avatar>
                    {row.profile.profilePhoto ? (
                        <Image
                            src={row.profile.profilePhoto}
                            alt={row.fullName}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-primary font-semibold">
                            {getInitials(row.fullName)}
                        </div>
                    )}
                </Avatar>
            </Link>
        ),
        className: "w-[30px]",
    },
    {
        header: "Full Name",
        accessor: (row) => (
            <div className="flex flex-col">
                <Link
                    href={`/profile/${row._id}`}
                    className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1"
                >
                    {row.fullName}
                </Link>
                <span className="text-xs text-muted-foreground uppercase tracking-tight">
                    ID: {row._id.slice(-6)}
                </span>
            </div>
        ),
        className: "min-w-[180px]",
        sortKey: "fullName",
    },
    {
        header: "Email",
        accessor: (row) => (
            <span className="text-sm text-muted-foreground truncate">
                {row.email}
            </span>
        ),
        className: "max-w-[220px]",
        sortKey: "email",
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
                    className={cn("px-2 py-0.5 text-xs", statusColor[row.status])}
                >
                    {row.status}
                </Badge>
            );
        },
    },
    {
        header: "Joined",
        accessor: (row) =>
            format(new Date(row.createdAt), "MMM do, yyyy 'at' h:mm a"),
        className: "whitespace-nowrap text-sm text-foreground",
        sortKey: "createdAt",
    },
    {
        header: "Updated At",
        accessor: (row) =>
            format(new Date(row.updatedAt), "MMM do, yyyy 'at' h:mm a"),
        className: "whitespace-nowrap text-sm text-foreground"
    },
];
