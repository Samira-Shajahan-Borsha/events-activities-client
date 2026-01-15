import * as Icons from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

// Mapping your real API "type" values to Icons and professional colors
const categoryMap = [
  { 
    name: "Workshop", 
    icon: "DraftingCompass", 
    count: "24", 
    color: "bg-teal-50 text-teal-600",
    href: "/events?type=Workshop" 
  },
  { 
    name: "Seminar", 
    icon: "Presentation", 
    count: "12", 
    color: "bg-blue-50 text-blue-600",
    href: "/events?type=Seminar" 
  },
  { 
    name: "Meetup", 
    icon: "Users2", 
    count: "45", 
    color: "bg-purple-50 text-purple-600",
    href: "/events?type=Meetup" 
  },
  { 
    name: "Networking", 
    icon: "Network", 
    count: "18", 
    color: "bg-emerald-50 text-emerald-600",
    href: "/events?type=Networking" 
  },
  { 
    name: "Outdoor", 
    icon: "Mountain", 
    count: "32", 
    color: "bg-orange-50 text-orange-600",
    href: "/events?type=Outdoor" 
  },
  { 
    name: "Music", 
    icon: "Music", 
    count: "15", 
    color: "bg-rose-50 text-rose-600",
    href: "/events?type=Music" 
  },
];

export default function HomeCategories() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Browse by Activity
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Discover {categoryMap.length} types of experiences curated for your interests.
          </p>
        </div>
        
        <Link 
          href="/events" 
          className="text-primary text-sm font-bold hover:underline flex items-center gap-1 transition-all"
        >
          View all events <Icons.ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {categoryMap.map((cat) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const Icon = (Icons as any)[cat.icon] || Icons.Calendar;
          
          return (
            <Link key={cat.name} href={cat.href}>
              <Card className="p-6 h-full flex flex-col items-center text-center gap-4 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-pointer border-border/60 rounded-3xl">
                <div className={`p-4 rounded-2xl ${cat.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-zinc-900 leading-none">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                    {cat.count} Events
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}