import EventCard from "@/components/modules/Events/EventCard";
import ProfileNotFound from "@/components/modules/Profile/ProfileNotFound";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getUserProfile } from "@/services/user/profile";
import { IEvent } from "@/types/event.interface";

interface IProfilePageProps {
  params: Promise<{ id: string }>;
}

const ProfilePage = async ({ params }: IProfilePageProps) => {
  const { id } = await params;

  const result = await getUserProfile(id);
  const { profile, hostedEvents = [], joinedEvents = [] } = result?.data || {};

  if (!profile) {
    return (
      <ProfileNotFound />
    );
  }

  const user = profile.user;

  return (
    <div className="min-h-screen pb-24 space-y-12 px-6">
      <section className="bg-muted/10 py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 md:h-32 md:w-32">
            {profile.profilePhoto ? (
              <AvatarImage src={profile.profilePhoto} className="object-cover" />
            ) : (
              <AvatarFallback className="font-bold text-2xl">
                {user.fullName?.charAt(0) || "U"}
              </AvatarFallback>
            )}
          </Avatar>

          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-heading font-semibold">
              {user.fullName || "Unnamed User"}
            </h1>
            <p className="text-sm text-muted-foreground">{profile.location || "Unknown location"}</p>
            {profile.bio && <p className="text-sm text-muted-foreground max-w-xl">{profile.bio}</p>}

            {profile.interests?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {profile.interests.map((interest: string) => (
                  <Badge key={interest} className="bg-primary/5 text-primary font-medium">
                    {interest}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {hostedEvents.length > 0 && (
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-heading font-semibold">Hosted Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostedEvents.map((event: IEvent) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </section>
      )}

      {joinedEvents.length > 0 && (
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-heading font-semibold">Joined Events</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {joinedEvents.map((event: IEvent) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </section>
      )}

      {hostedEvents.length === 0 && joinedEvents.length === 0 && (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          No hosted or joined events yet.
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
