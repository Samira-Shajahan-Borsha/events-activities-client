import { Button } from "@/components/ui/button";
import { MapPin, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8 z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        2,400+ Active Events Nearby
                    </div>

                    <h1 className="text-5xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                        Don&apos;t miss out <br />
                        <span className="text-primary">just because</span> <br />
                        you&apos;re alone.
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                        Connect with like-minded people for concerts, hiking, board games, or tech meetups. Find your tribe and turn interests into shared experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-2xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                            <Link href="/events">Find Activities</Link>
                        </Button>
                    </div>

                    <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            <span>10k+ Members</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span>50+ Cities</span>
                        </div>
                    </div>
                </div>

                {/* Visual Content */}
                <div className="relative h-137.5 w-full hidden lg:block">
                    {/* Main Hero Image - Group Socializing/Event */}
                    <div className="absolute top-0 right-0 w-[95%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                        <Image
                            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200"
                            alt="People enjoying a social event"
                            fill
                            className="object-cover transform hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                    </div>

                    {/* Decorative Element: Secondary smaller image or shape */}
                    <div className="absolute -bottom-4 right-12 w-64 h-64 rounded-[2.5rem] overflow-hidden border-8 border-background shadow-xl z-20 hidden xl:block">
                        <Image
                            src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600"
                            alt="Group hiking"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Floating Trust Card */}
                    <div className="absolute top-20 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-border animate-bounce-slow z-30">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-zinc-900">Verified Hosts</p>
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Safety First</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Activity Card */}
                    {/* <div className="absolute bottom-24 left-10 bg-white p-4 rounded-2xl shadow-2xl border border-border z-30 flex flex-col gap-2 min-w-45">
                        <div className="flex -space-x-3 overflow-hidden">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-zinc-200" />
                            ))}
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white ring-2 ring-white">
                                +12
                            </div>
                        </div>
                        <p className="text-xs font-bold text-zinc-800 leading-tight">Join Sarah & others for <br />Friday Night Jazz</p>
                    </div> */}
                </div>
            </div>
        </section>
    );
}