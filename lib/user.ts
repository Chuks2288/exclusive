import { db } from "./db";

import axios from "axios";

const API_KEY = process.env.GEOLOCATION_API_KEY; // Your IPInfo API key

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({
            where: { email }
        })

        return user;
    } catch (error) {
        return null;
    }
}

export const getCurrentUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findFirst({
            where: { email }
        })

        return user;
    } catch (error) {
        return null;
    }
}

export const getUserById = async (id: string | undefined) => {
    try {
        const user = await db.user.findUnique({ where: { id } });

        return user;
    } catch {
        return null;
    }
};

export const updateUserIP = async (
    userId: any,
    ipAddress: string,
    loginDate: Date,
    loginDevice: string
) => {
    await db.user.update({
        where: { id: userId },
        data: {
            ipAddress,
            loginDate,
            loginDevice
        },
    });
};

export const getGeolocation = async (ipAddress: any) => {
    try {
        const response = await axios.get(`https://ipinfo.io/${ipAddress}/json?token=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching geolocation data:', error);
        return null;
    }
};