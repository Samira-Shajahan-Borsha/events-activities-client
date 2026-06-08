import { Button } from "@/components/ui/button";
import { getMyProfileInfo } from "@/services/auth/getMyProfileInfo";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const FinalCTA = async () => {
    const userInfo = await getMyProfileInfo();

    const href = !userInfo ? '/login' : userInfo?.user?.role === "USER" ? `/dashboard/my-events` : `/${userInfo?.user?.role.toLocaleLowerCase()}/dashboard/create-event`

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/90 to-primary/80" />

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-primary-foreground text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Start your journey today</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                        Ready to Find Your Next Adventure?
                    </h2>

                    <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                        Join thousands of people who&apos;ve discovered amazing events and made lifelong friends.
                        Your next great experience is just a click away.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="text-sm font-medium tracking-tight"
                            asChild
                            variant="secondary"
                        >
                            <Link href='/explore-events'>
                                Explore Events
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                            <Link href={href} >
                                Create Your First Event
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;