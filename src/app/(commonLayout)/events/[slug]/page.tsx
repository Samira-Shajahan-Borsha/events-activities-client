import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";
import { getEvent } from "@/services/event/eventManagement";
import EventNotFound from "@/components/modules/EventDetails/EventNotFound";
import EventActionButton from "@/components/modules/EventDetails/EventActionButton";
import { IProfile, IUser } from "@/types/user.interface";

type EventDetailsPageProps = {
  params: Promise<{ slug: string }>
};

const EventDetailsPage = async ({
  params
}: EventDetailsPageProps) => {
  const { slug } = await params;

  const eventResponse = await getEvent(slug);

  const myProfileResponse = await getMyProfileInfo();

  const user = (myProfileResponse?.user as IUser) ?? null;

  if (!eventResponse?.success) {
    return <EventNotFound />
  }

  const { event, participants, participantsCount } = eventResponse.data;

  const isFull = participantsCount >= event.maxParticipants;
  const formattedDate = format(new Date(event.date), "EEEE, MMM dd, yyyy • hh:mm a");


  const isParticipant =
    !!user &&
    participants.some(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (p: any) =>
        p.user?._id === user._id ||
        p.user === user._id
    );


  return (
    <div className="min-h-screen pb-20">
      {/* HERO */}
      <div className="relative h-[32vh] md:h-[38vh] w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent" />

        <Link
          href="/events"
          className="absolute top-6 left-6 z-10 flex items-center gap-2 rounded-lg bg-background/80 px-3 py-2 text-sm font-medium backdrop-blur"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>

      <main className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* MAIN */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="rounded-xl">
              <CardContent className="p-6 md:p-8">
                {/* BADGES */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-[11px]">
                    {event.type}
                  </Badge>

                  {isFull && (
                    <Badge variant="destructive" className="text-[11px]">
                      Full
                    </Badge>
                  )}

                  {event.isFeatured && (
                    <Badge className="bg-primary/10 text-primary border border-primary/20 text-[11px]">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                  {event.name}
                </h1>

                {/* META */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-secondary text-primary">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Date & Time
                      </p>
                      <p className="text-sm font-medium">{formattedDate}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-secondary text-primary">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Location
                      </p>
                      <p className="text-sm font-medium">{event.location}</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* DESCRIPTION */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Description</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                    {event.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* PARTICIPANTS */}
            <Card className="rounded-xl">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">
                    Participants
                    <span className="ml-2 text-sm text-muted-foreground">
                      ({participantsCount})
                    </span>
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <TrendingUp size={14} />
                    {Math.round((participantsCount / event.maxParticipants) * 100)}%
                  </div>
                </div>

                {participants.length ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {participants.map((p: IProfile) => (
                      <div
                        key={p._id}
                        className="flex items-center gap-3 rounded-lg bg-secondary/40 p-3"
                      >
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={p.user.profile?.profilePhoto} />
                          <AvatarFallback className="text-xs">
                            {p.user.fullName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium truncate">
                          {p.user.fullName}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No participants yet
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <Card className="rounded-xl sticky top-6">
              <CardContent className="p-6 space-y-6">
                {/* PRICE */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Price
                  </p>
                  <p className="text-3xl font-semibold">
                    {event.isPaid === "FREE" ? "Free" : `$${event.joiningFee}`}
                  </p>
                </div>

                {/* PROGRESS */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Available slots</span>
                    <span>{event.maxParticipants - participantsCount}</span>
                  </div>

                  <div className="h-2 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{
                        width: `${(participantsCount / event.maxParticipants) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <EventActionButton
                  user={user}
                  isParticipant={isParticipant}
                  event={event}
                  participantsCount={participantsCount}
                />

                <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
                  <ShieldCheck size={14} />
                  {event.isPaid === "FREE"
                    ? "Instant enrollment"
                    : "Secure payment"}
                </div>

                <Separator />

                {/* HOST */}
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Hosted by
                  </p>

                  <Link href={`/profile/${event.host._id}`}>
                    <div className="flex items-center gap-3 rounded-lg bg-secondary/40 p-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={event.host.profile?.profilePhoto} className="object-cover" />
                        <AvatarFallback>
                          {event.host.fullName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-medium">
                        {event.host.fullName}
                      </p>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetailsPage;
