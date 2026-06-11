import { Button } from "@/components/ui/button";
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";
import { ArrowRight, Users, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = async () => {

  const userInfo = await getMyProfileInfo();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/10 dark:from-primary/10 dark:via-background dark:to-accent/5" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Users className="w-4 h-4" />
              <span>Join 50,000+ activity seekers</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Find Your Crew,{" "}
              <span className="text-primary">Share the Experience</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              Connect with like-minded people for concerts, hiking trips, board game nights,
              tech meetups, and more. Never miss an event just because you don&apos;t have someone to go with.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-sm font-medium tracking-tight h-11"
                asChild
              >
                <Link href='/explore-events'>
                  Explore Events
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              {!userInfo &&
                <Button size="lg" variant="outline" asChild className="h-11 px-10 text-sm font-medium bg-white">
                  <Link href='become-a-host' >
                    Become a Host
                  </Link>
                </Button>
              }
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10K+</p>
                  <p className="text-sm text-muted-foreground">Events Hosted</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">50K+</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">100+</p>
                  <p className="text-sm text-muted-foreground">Cities Covered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                width={800}
                height={600}
                unoptimized
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=700&fit=crop"
                alt="People enjoying an outdoor activity together"
                className="w-full h-150 object-cover"
                loading="eager"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  {/* Avatar stack */}
                  <div className="flex -space-x-3">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
                      alt="Participant 1"
                      width={40}
                      height={40}
                      unoptimized
                      className="rounded-full border-2 border-card object-cover"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces"
                      alt="Participant 2"
                      width={40}
                      height={40}
                      unoptimized
                      className="rounded-full border-2 border-card object-cover"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces"
                      alt="Participant 3"
                      width={40}
                      height={40}
                      unoptimized
                      className="rounded-full border-2 border-card object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="font-semibold text-card-foreground">
                      Weekend Hiking Trip
                    </p>
                    <p className="text-sm text-muted-foreground">
                      12 people joined • Tomorrow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
