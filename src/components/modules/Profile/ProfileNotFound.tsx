import { Button } from '@/components/ui/button';
import { ArrowLeft, SearchX } from 'lucide-react';
import Link from 'next/link';

const ProfileNotFound = () => {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center gap-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <SearchX className="h-8 w-8 text-muted-foreground" />
            </div>

            <div className="space-y-1">
                <h2 className="text-2xl font-semibold">Profile not found</h2>
                <p className="text-sm text-muted-foreground max-w-md">
                    The user may have deleted their account or the link is incorrect.
                </p>
            </div>

            <Button asChild>
                <Link href="/events" className="flex items-center gap-2">
                    <ArrowLeft size={16} />
                    Back to events
                </Link>
            </Button>
        </div>
    );
};

export default ProfileNotFound;
