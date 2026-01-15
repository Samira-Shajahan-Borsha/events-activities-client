import { IEvent } from "./event.interface";
import { IUser } from "./user.interface";

export enum TICKET_STATUS {
    PENDING = "PENDING", // Joined but payment not completed
    CONFIRMED = "CONFIRMED", // Successfully joined
    CANCELED = "CANCELED", // User left / host removed
    FAILED = "FAILED", // Payment failed
}

export interface ITicket {
    _id: string;
    user: IUser;
    event: IEvent;
    status: TICKET_STATUS;
    payment: string | null;
    createdAt: Date;
    updatedAt: Date;
}
