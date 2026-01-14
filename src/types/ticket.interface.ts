export enum TICKET_STATUS {
    PENDING = "PENDING", // Joined but payment not completed
    CONFIRMED = "CONFIRMED", // Successfully joined
    CANCELED = "CANCELED", // User left / host removed
    FAILED = "FAILED", // Payment failed
}