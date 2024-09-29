import { LucideIcon } from "lucide-react";
import Image from "next/image";

type Props = {
    memberImage: string;
    name: string;
    position: string;
    socials: {
        icon: LucideIcon;
        url: string;
    }[]
}

export const BoardMemberCard = ({
    memberImage,
    name,
    position,
    socials
}: Props) => {

    return (
        <div className="flex flex-col space-y-2">
            <div className=" bg-gray-200 h-[350px] pt-10 px-4 rounded-md flex items-center justify-center">
                <Image
                    src={memberImage}
                    alt={name}
                    width={200}
                    height={200}
                    className="self-end object-cover"
                />
            </div>
            <div className="flex flex-col gap-y-0.5 text-left">
                <h3 className="font-bold text-lg">{name}</h3>
                <p className="text-sm text-gray-500 mb-4 ">{position}</p>
            </div>
            <div className="flex space-x-2">
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-red-500 transition-colors"
                    >
                        <social.icon className="size-4" />
                    </a>
                ))}
            </div>
        </div>
    );
}
