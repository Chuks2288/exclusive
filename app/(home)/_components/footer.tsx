"use client";

import { footerData } from "@/data";
import Image from "next/image";

export const Footer = () => {
    return (
        <div className="bg-black dark:bg-gray-800 text-white dark:text-gray-200">
            <div className="max-w-[1170px] mx-auto">
                <footer className="py-10">
                    <div className="container mx-auto grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
                        {footerData.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="font-bold text-md">{section.title}</h4>
                                <div className="mt-4 space-y-4">
                                    {section.content.map((item: any, idx) => {
                                        if (item.type === "text") {
                                            return <p key={idx} className="text-xs">{item.text}</p>;
                                        } else if (item.type === "link") {
                                            return (
                                                <div key={idx} className="flex flex-col space-y-2">
                                                    <a href={item.href} className="text-xs hover:underline dark:hover:text-gray-400">
                                                        {item.text}
                                                    </a>
                                                </div>
                                            );
                                        } else if (item.type === "iconText") {
                                            const Icon = item.icon;
                                            return (
                                                <div key={idx} className="flex items-center space-x-2 text-xs">
                                                    <Icon className="w-4 h-4" />
                                                    <p>{item.text}</p>
                                                </div>
                                            );
                                        } else if (item.type === "form") {
                                            const ButtonIcon = item.buttonIcon;
                                            return (
                                                <div key={idx} className="flex mt-4 max-w-[50px]">
                                                    {/* <input
                                                        type="email"
                                                        placeholder={item.placeholder}
                                                        className="p-2 rounded-l-md bg-gray-700 dark:bg-gray-600 text-white focus:outline-none"
                                                    />
                                                    <button className="bg-gray-700 dark:bg-gray-600 p-2 rounded-r-md hover:bg-gray-600 dark:hover:bg-gray-500">
                                                        <ButtonIcon className="w-4 h-4" />
                                                    </button> */}
                                                    love
                                                </div>
                                            );
                                        } else if (item.type === "image") {
                                            return (
                                                <div key={idx} className="flex space-x-4 mt-4">
                                                    {item.images.map((image: any, imgIdx: any) => (
                                                        <Image
                                                            key={imgIdx}
                                                            src={image.src}
                                                            alt={image.alt}
                                                            width={96}  // Adjust width and height based on your requirements
                                                            height={90}  // Next.js requires explicit width and height
                                                            className="w-24 h-auto"
                                                        />
                                                    ))}
                                                </div>
                                            );
                                        } else if (item.type === "socialIcons") {
                                            return (
                                                <div key={idx} className="flex space-x-4 mt-6">
                                                    {item.icons.map((social: any, socialIdx: any) => {
                                                        const SocialIcon = social.icon;
                                                        return (
                                                            <>
                                                                <div>

                                                                    <a
                                                                        key={socialIdx}
                                                                        href={social.href}
                                                                        className="hover:text-gray-400 dark:hover:text-gray-300"
                                                                    >
                                                                        <SocialIcon className="w-4 h-4" />
                                                                    </a>
                                                                </div>
                                                            </>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10 border-t border-gray-700 dark:border-gray-600 pt-6">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            © Copyright Rimel 2022. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};
