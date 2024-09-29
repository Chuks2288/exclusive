"use client";

import { motion } from "framer-motion";
import { abouts } from "@/data";

export const CompanyOverview = () => {
    return (
        <div className="py-8 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
            {abouts.map((about) => (
                <motion.div
                    key={about.id}
                    className="flex flex-col items-center text-center border group p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-500"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                    <div className="bg-gray-200 rounded-full p-2 sm:p-3 inline-block mb-2">
                        <motion.div
                            className="bg-black rounded-full p-3 sm:p-4 inline-flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <about.icon
                                className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                                strokeWidth={1.5}
                            />
                        </motion.div>
                    </div>
                    <h4 className="font-bold mt-4 text-sm sm:text-lg text-black dark:text-white group-hover:text-white">
                        {about.value}
                    </h4>
                    <h4 className="font-bold mt-2 md:text-sm text-xs text-black dark:text-white group-hover:text-white">
                        {about.title}
                    </h4>
                </motion.div>
            ))}
        </div>
    );
};
