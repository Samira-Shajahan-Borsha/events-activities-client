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
    _id: string;
    fullName: string;
    readonly email: string;
    role: UserRole;
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

export interface IHost {
    _id: string;
    fullName: string;
    readonly email: string;
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

export interface IProfile {
    _id: string;
    user: IUser;
    location: string;
    profilePhoto: string;
    bio: string;
    interests: string[];
    createdAt: string;
    updatedAt: string;
}
