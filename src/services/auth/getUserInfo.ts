/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IUserInfo } from "@/types/user.interface";
import { getCookie } from "./tokenHandlers";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getUserInfo = async (): Promise<IUserInfo | null> => {
    try {
        const accessToken = await getCookie("accessToken");

        if (!accessToken) {
            return null;
        }

        const verifiedToken = jwt.verify(
            accessToken,
            process.env.JWT_ACCESS_TOKEN_SECRET as string
        ) as JwtPayload;

        // console.log(verifiedToken, "verifiedToken");

        if (!verifiedToken) {
            return null;
        }

        const userInfo: IUserInfo = {
            userId: verifiedToken.userId as string,
            email: verifiedToken.email as string,
            role: verifiedToken.role as string,
        };

        return userInfo;
    } catch (error: any) {
        console.log(error);
        return null;
    }
};
