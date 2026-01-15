import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="py-12">
            <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
                {/* Background Decorative Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

                <div className="relative z-10 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-md">
                        <Sparkles className="w-4 h-4" /> Ready to explore?
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                        Stop waiting for &quot;the right time&quot; <br className="hidden md:block" />
                        and start making memories today.
                    </h2>
                    <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
                        Join thousands of people discovering local events and meeting new companions every single day.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" variant="secondary" className="h-14 px-10 rounded-2xl font-bold text-primary" asChild>
                            <Link href="/register">Create Your Account</Link>
                        </Button>
                        <Button size="lg" className="h-14 px-10 rounded-2xl font-bold bg-zinc-900 text-white hover:bg-zinc-800" asChild>
                            <Link href="/events">Explore All Events</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}