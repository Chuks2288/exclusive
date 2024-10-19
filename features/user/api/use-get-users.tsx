import { User } from "@prisma/client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getUsers } from "@/actions/user/get-users";

// Custom hook using TanStack Query to fetch users
export const useGetAllUsers = (): UseQueryResult<User[], Error> => {
    return useQuery<User[], Error>({
        queryKey: ['users'],
        queryFn: async () => {
            // Adjust this to return the `data` array from the response
            const fetchedUsers = await getUsers();

            if (fetchedUsers?.success && fetchedUsers.data) {
                return fetchedUsers.data; // Return only the data field (the users array)
            } else {
                throw new Error("Failed to fetch users");
            }
        },
    });
};
