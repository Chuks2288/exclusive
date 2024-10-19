"use client";

import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { useGetAllUsers } from "@/features/user/api/use-get-users";


const UsersPage = () => {
    const { data: users, isLoading } = useGetAllUsers();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <p className="text-md font-bold">Loading Users...</p>
            </div>
        );
    }



    if (!users || users.length === 0) {
        return (
            <div className="flex items-center justify-center h-[70vh]">
                <p className="text-md font-bold">No Users</p>
            </div>
        );
    }

    return (
        <div className="h-full">
            <DataTable columns={columns} data={users} />
        </div>
    );
};

export default UsersPage;
