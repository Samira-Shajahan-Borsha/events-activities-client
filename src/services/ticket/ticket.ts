"use server";

import { serverFetch } from "@/lib/server-fetch";

export const getTicket = async (transactionId: string) => {
    try {
        const response = await serverFetch.get(`/ticket/${transactionId}`);

        const result = await response.json();

        return result;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};

export const getMyTickets = async () => {
    try {
        const response = await serverFetch.get(`/ticket/my-tickets`);

        const result = await response.json();

        return result;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};
