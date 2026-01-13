/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

export const getAllHosts = async (queryString: string) => {
    try {
        const response = await serverFetch.get(
            `/user/all-hosts${queryString ? `?${queryString}` : ""}`
        );

        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};

export const getAllUsers = async (queryString: string) => {
    try {
        const response = await serverFetch.get(
            `/user/all-users${queryString ? `?${queryString}` : ""}`
        );

        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};

export const getUser = async (id: string) => {
    try {
        const response = await serverFetch.get(`/profile/${id}`);

        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};

export const updateUserRole = async (id: string) => {
    try {
        const response = await serverFetch.patch(`/user/role/${id}`);

        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};

export const approveHost = async (id: string) => {
    try {
        const response = await serverFetch.patch(`/user/role/${id}`);
        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
        };
    }
};

export const blockUser = async (id: string) => {
    try {
        const response = await serverFetch.patch(`/user/block/${id}`);
        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
        };
    }
};

export const unblockUser = async (id: string) => {
    try {
        const response = await serverFetch.patch(`/user/unblock/${id}`);
        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
        };
    }
};
