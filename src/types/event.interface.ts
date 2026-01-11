export type IEvent = {
    _id: string;
    name: string;
    type: string;
    description: string;
    image: string;
    date: string;
    location: string;
    isPaid: "PAID" | "FREE";
    joiningFee: number;
    status: "OPEN" | "CLOSED";
    slug: string;
    host: string;
    maxParticipants: number
};
