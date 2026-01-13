import { UserRole } from "@/lib/auth-utils";

export interface IUserInfo {
    userId: string;
    email: string;
    role: string;
}

export enum STATUS {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED",
}

export interface IUser {
    fullName: string;
    readonly email: string;
    role: UserRole;
    status: STATUS;
    isVerified?: boolean;
    isDeleted?: boolean;
}

export interface IHost {
    _id: string;
    fullName: string;
    email: string;
    status: STATUS;
    createdAt: string;
    updatedAt: string;
    profile: {
        _id: string;
        location: string;
        profilePhoto: string;
        bio: string;
        interests: string[];
    };
}
