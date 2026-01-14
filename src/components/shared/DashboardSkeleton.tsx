import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
    const skeletonClass =
        "bg-muted/50 dark:bg-muted-foreground/30 animate-pulse";

    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <Skeleton className={`h-5 w-64 ${skeletonClass}`} />
                    <Skeleton className={`h-3 w-96 ${skeletonClass}`} />
                </div>
                <Skeleton className={`h-8 w-28 rounded-full ${skeletonClass}`} />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
                <Skeleton className={`h-8 w-60 rounded-full ${skeletonClass}`} />
                <Skeleton className={`h-8 w-24 rounded-full ${skeletonClass}`} />
                <Skeleton className={`h-8 w-24 rounded-full ${skeletonClass}`} />
                <Skeleton className={`h-8 w-20 rounded-full ${skeletonClass}`} />
            </div>

            {/* Table */}
            <div className="rounded-xl border bg-background">
                {/* Table Header */}
                <div className="grid grid-cols-[60px_2fr_1fr_1.5fr_1.5fr_1fr_1fr_1fr_80px] gap-3 border-b py-2 px-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <Skeleton key={i} className={`h-3 w-full ${skeletonClass}`} />
                    ))}
                </div>

                {/* Table Rows */}
                {Array.from({ length: 8 }).map((_, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="grid grid-cols-[60px_2fr_1fr_1.5fr_1.5fr_1fr_1fr_1fr_80px] gap-3 border-b py-2 px-4 last:border-b-0"
                    >
                        {/* Image */}
                        <Skeleton className={`h-10 w-10 rounded-lg ${skeletonClass}`} />

                        {/* Event Name */}
                        <div className="space-y-1">
                            <Skeleton className={`h-3.5 w-40 ${skeletonClass}`} />
                            <Skeleton className={`h-2.5 w-20 ${skeletonClass}`} />
                        </div>

                        {/* Type */}
                        <Skeleton className={`h-5 w-16 rounded-full ${skeletonClass}`} />

                        {/* Date */}
                        <Skeleton className={`h-3.5 w-28 ${skeletonClass}`} />

                        {/* Location */}
                        <Skeleton className={`h-3.5 w-32 ${skeletonClass}`} />

                        {/* Price */}
                        <Skeleton className={`h-3.5 w-12 ${skeletonClass}`} />

                        {/* Capacity */}
                        <Skeleton className={`h-3.5 w-16 ${skeletonClass}`} />

                        {/* Status */}
                        <Skeleton className={`h-5 w-16 rounded-full ${skeletonClass}`} />

                        {/* Actions */}
                        <Skeleton className={`h-6 w-6 rounded-full ${skeletonClass}`} />
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
                <Skeleton className={`h-7 w-20 rounded-full ${skeletonClass}`} />
                <div className="flex gap-2">
                    <Skeleton className={`h-6 w-6 rounded-full ${skeletonClass}`} />
                    <Skeleton className={`h-6 w-6 rounded-full ${skeletonClass}`} />
                    <Skeleton className={`h-6 w-6 rounded-full ${skeletonClass}`} />
                </div>
                <Skeleton className={`h-7 w-20 rounded-full ${skeletonClass}`} />
            </div>
        </div>
    );
}
