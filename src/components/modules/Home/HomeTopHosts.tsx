import { Star, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const topHosts = [
  {
    id: "1",
    name: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    rating: 4.9,
    reviews: 124,
    category: "Outdoor Expert",
    location: "Seattle, WA",
  },
  {
    id: "2",
    name: "Marcus Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5.0,
    reviews: 89,
    category: "Tech & Gaming",
    location: "Austin, TX",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    rating: 4.8,
    reviews: 210,
    category: "Art & Culture",
    location: "New York, NY",
  },
];

export default function TopHosts() {
  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Top Rated Hosts</h2>
          <p className="text-muted-foreground">The most active and trusted community leaders.</p>
        </div>
        {/* <Button variant="outline" className="rounded-xl" asChild>
          <Link href="/hosts">View All Hosts</Link>
        </Button> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topHosts.map((host) => (
          <div key={host.id} className="group relative bg-white rounded-4xl p-6 border transition-all hover:shadow-xl hover:border-primary/20">
            <div className="flex items-start gap-5">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                <Image src={host.image} alt={host.name} fill className="object-cover" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-lg text-foreground">{host.name}</h3>
                  <CheckCircle2 className="w-4 h-4 text-primary fill-primary/10" />
                </div>
                <p className="text-sm font-medium text-primary">{host.category}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-foreground">{host.rating}</span> ({host.reviews})
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {host.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              {/* <Button variant="secondary" className="w-full rounded-xl text-xs h-9" asChild>
                <Link href={`/profile/${host.id}`}>View Profile</Link>
              </Button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}