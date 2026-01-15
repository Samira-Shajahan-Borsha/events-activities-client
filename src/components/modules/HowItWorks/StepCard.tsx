import { LucideIcon } from "lucide-react";

interface StepCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    color: string;
    number: number;
}

export default function StepCard({ title, description, icon: Icon, color, number }: StepCardProps) {
    return (
        <div className="relative group p-8 bg-white rounded-4xl border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white border shadow-sm rounded-full flex items-center justify-center font-bold text-primary">
                0{number}
            </div>
            
            <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon size={28} />
            </div>
            
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}