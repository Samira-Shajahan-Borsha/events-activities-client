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
    status: EVENT_STATUS;
    slug: string;
    host: string;
    maxParticipants: number;
    minParticipants: number;
};

export enum EVENT_STATUS {
    OPEN = "OPEN",
    FULL = "FULL",
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED",
}