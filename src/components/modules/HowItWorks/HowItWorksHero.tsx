export default function HowItWorksHero() {
    return (
        <section className="relative py-12 md:py-16 overflow-hidden border-b">
            <div className="max-w-7xl mx-auto px-6 md:px-0 relative z-10">
                <div className="max-w-2xl">
                    <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-primary uppercase bg-primary/10 rounded-full">
                        Our Process
                    </span>

                    {/* Scaled down to 2xl/3xl for a more subtle header */}
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-4">
                        Bridging the gap between <span className="text-primary">online and offline.</span>
                    </h1>

                    {/* Reduced to small/base text */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        EventHub ensures no one has to miss out on a concert, hike, or board game night
                        just because they don&apos;t have someone to go with.
                    </p>
                </div>
            </div>
        </section>
    );
}