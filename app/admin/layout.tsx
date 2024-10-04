import React, { useState, useEffect } from "react";
import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";

type Props = {
    children: React.ReactNode;
};

const AdminLayout = ({
    children
}: Props) => {

    return <main>{children}</main>;
};

export default AdminLayout;
