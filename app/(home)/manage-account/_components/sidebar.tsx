import { SidebarItemsCard } from "./sidebar-items-card";


type sidebarItemsProps = {
    title: string;
    subItems: {
        label: string;
        path: string;
    }[]
}

const sidebarItems: sidebarItemsProps[] = [
    {
        title: "Manage My Account",
        subItems: [
            {
                label: "My Profile",
                path: "/manage-account",
            },
            {
                label: "Address Book",
                path: "/manage-account/address-book",
            },
            {
                label: "My Payment Options",
                path: "/manage-account/payment-options",
            },
        ],
    },
    {
        title: "My Orders",
        subItems: [
            {
                label: "My Returns",
                path: "/manage-account/returns",
            },
            {
                label: "Cancellations",
                path: "/manage-account/cancellations",
            },
        ],
    },
    {
        title: "My Wishlists",
        subItems: [
            {
                label: "wishlist",
                path: "/manage-account/wishlists",
            },
        ],
    },
]


export const Sidebar = () => {
    return (
        <div className="md:w-72 md:flex hidden md:pr-8 pr-0 h-screen">
            <div className="flex flex-col gap-8">
                {sidebarItems.map((item) => (
                    <SidebarItemsCard
                        key={item.title}
                        title={item.title}
                        subItems={item.subItems}
                    />
                ))}
            </div>
        </div>
    )
}
