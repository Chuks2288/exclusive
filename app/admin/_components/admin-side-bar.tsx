"use client";

import { cn } from '@/lib/utils';
import { SidebarCard } from './sidebar-card';
import { usePathname } from 'next/navigation';
import { sidebarItems } from '@/data';


type Props = {
    className: string;
}


export const AdminSidebar = ({
    className
}: Props) => {
    const pathname = usePathname();

    return (
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 shadow-sm flex-col mt-[95px] pt-4",
            className,
        )}>
            <h4 className='text-gray-400 px-4'>
                Dashboard
            </h4>
            <div className="pt-6 flex flex-col gap-y-2 pr-2">
                {sidebarItems.map((item) => (
                    <SidebarCard
                        key={item.name}
                        name={item.name}
                        path={item.path}
                        icon={item.icon}
                        isActive={pathname === item.path}
                    />
                )
                )}
            </div>
        </div>

    )
}
