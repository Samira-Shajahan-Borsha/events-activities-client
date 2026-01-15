import { format } from "date-fns";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import EventActionButton from "@/components/modules/EventDetails/EventActionButton";
import EventNotFound from "@/components/modules/EventDetails/EventNotFound";
import InfoItem from "@/components/modules/EventDetails/InfoItem";
import ProgressBar from "@/components/modules/EventDetails/ProgressBar";
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";
import { getEvent } from "@/services/event/eventManagement";
import { IProfile, IUser } from "@/types/user.interface";

type EventDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

const EventDetailsPage = async ({ params }: EventDetailsPageProps) => {
  const { slug } = await params;

  const eventResponse = await getEvent(slug);
  const profileResponse = await getMyProfileInfo();
  const user = (profileResponse?.user as IUser) ?? null;

  if (!eventResponse?.success) {
    return <EventNotFound />;
  }

  const { event, participants, participantsCount } = eventResponse.data;

  const isFull = participantsCount >= event.maxParticipants;
  const formattedDate = format(
    new Date(event.date),
    "EEEE, MMM dd, yyyy • hh:mm a"
  );

  const isParticipant =
    !!user &&
    participants.some(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (p: any) => p.user?._id === user._id || p.user === user._id
    );

  return (
    <div className="min-h-screen pb-24 px-6">
      {/* ---------------- HERO ---------------- */}
      <div className="relative -mx-6 h-[36vh] md:h-[42vh] overflow-hidden border-b">
        <Image
          src={event.image}
          alt={event.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-black/10" />

        <Link
          href="/events"
          className="absolute top-6 left-8 z-10 inline-flex items-center gap-2 rounded-lg border bg-white/90 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur hover:text-primary transition"
        >
          <ArrowLeft size={16} />
          Back to Events
        </Link>
      </div>

      <div className="-mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* EVENT INFO */}
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6 md:p-8">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/5 text-primary font-medium">
                    {event.type}
                  </Badge>

                  {isFull && (
                    <Badge variant="destructive" className="font-medium">
                      Full
                    </Badge>
                  )}

                  {event.isFeatured && (
                    <Badge className="bg-amber-500/5 text-amber-600 font-medium">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h1 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight mb-6">
                  {event.name}
                </h1>

                {/* Meta */}
                <div className="grid md:grid-cols-2 gap-5">
                  <InfoItem
                    icon={<Calendar size={18} />}
                    label="Date & Time"
                    value={formattedDate}
                  />
                  <InfoItem
                    icon={<MapPin size={18} />}
                    label="Location"
                    value={event.location}
                  />
                </div>

                <Separator className="my-6" />

                {/* Description */}
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-semibold">
                    About this Event
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
                    {event.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* PARTICIPANTS */}
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading text-lg font-semibold">
                    Participants
                  </h3>
                  <span className="flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium">
                    <TrendingUp size={14} className="text-primary" />
                    {participantsCount}/{event.maxParticipants}
                  </span>
                </div>

                {participants.length ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {participants.map((p: IProfile) => (
                      <Link
                        key={p._id}
                        href={`/profile/${p.user._id}`}
                        className="flex items-center gap-3 rounded-xl bg-muted/40 p-3 hover:bg-muted transition"
                      >
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={p.user.profile?.profilePhoto} className="object-cover" />
                          <AvatarFallback className="font-medium">
                            {p.user.fullName.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium truncate">
                          {p.user.fullName}
                        </span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="py-10 text-center text-sm text-muted-foreground italic">
                    No one has joined yet.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="space-y-6">
            <Card className="rounded-2xl shadow-md sticky top-6">
              <div className="h-1.5 bg-primary" />
              <CardContent className="p-6 space-y-7">
                {/* Price */}
                <div>
                  <p className="text-xs font-semibold uppercase text-muted-foreground mb-1">
                    Entry Fee
                  </p>
                  <p className="text-2xl font-semibold">
                    {event.isPaid === "FREE" ? (
                      <span className="text-primary">Free</span>
                    ) : (
                      `BDT ${event.joiningFee}`
                    )}
                  </p>
                </div>

                <ProgressBar
                  current={participantsCount}
                  max={event.maxParticipants}
                />

                <EventActionButton
                  user={user}
                  isParticipant={isParticipant}
                  event={event}
                  participantsCount={participantsCount}
                />

                <div className="flex justify-center items-center gap-2 text-xs font-medium text-muted-foreground">
                  <ShieldCheck size={14} className="text-primary" />
                  {event.isPaid === "FREE"
                    ? "Instant Access"
                    : "Secure Payment"}
                </div>

                <Separator />

                {/* HOST */}
                <Link
                  href={`/profile/${event.host._id}`}
                  className="flex items-center justify-between rounded-xl bg-muted/40 p-4 hover:bg-muted transition"
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={event.host.profile?.profilePhoto} className="object-cover" />
                      <AvatarFallback className="font-medium">
                        {event.host.fullName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">
                        {event.host.fullName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Organizer
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-muted-foreground" />
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;

