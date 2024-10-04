"use client";

import { useEffect, useState } from "react";
import { useCurrentUser } from "./use-current-user";

export const useIsModerator = () => {
    const [isModerator, setIsModerator] = useState<boolean | null>(null);
    const user = useCurrentUser();

    const MODERATOR_ROLE = "MODERATOR";

    useEffect(() => {
        if (user === undefined) {
            setIsModerator(null);
            return;
        }

        if (!user) {
            setIsModerator(false);
            return;
        }

        setIsModerator(user?.role === MODERATOR_ROLE);
    }, [user]);

    return isModerator;
};
