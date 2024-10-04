"use client";

import { useEffect, useState } from "react";
import { useCurrentUser } from "./use-current-user";

const ADMIN_ROLE = "ADMIN";

export const useIsAdmin = () => {
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const user = useCurrentUser();

    useEffect(() => {
        if (user === undefined) {
            setIsAdmin(null);
            return;
        }

        if (!user) {
            setIsAdmin(false);
            return;
        }

        setIsAdmin(user.role === ADMIN_ROLE);
    }, [user]);

    return isAdmin;
};
