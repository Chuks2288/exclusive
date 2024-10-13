"use client";

import { useEffect } from "react";
import { useIsAdmin } from "@/hooks/use-isAdmin";
import { redirect } from "next/navigation";
import { AdminComponents } from "../_components/admin-components";
import { useIsModerator } from "@/hooks/use-isModerator";

const AdminPage = () => {
    const isAdmin = useIsAdmin();
    const isModerator = useIsModerator();

    useEffect(() => {
        if (isAdmin === false && isModerator === false) {
            redirect("/");
        }
    }, [isAdmin, isModerator]);

    if (isAdmin === null || isModerator === null) {
        return <p>Loading...</p>;
    }

    return (
        <AdminComponents />
    );
};

export default AdminPage;
