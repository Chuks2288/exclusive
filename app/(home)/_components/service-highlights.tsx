"use client";

import { motion } from "framer-motion";
import { features } from "@/data";

export const ServiceHighlights = () => {

    return (
        <div className="flex justify-around items-center py-8">
            {features.map((feature) => (
                <motion.div
                    key={feature.id}
                    className="text-center"
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
                    <div className="bg-gray-200 rounded-full p-2 sm:p-3 inline-block">
                        <motion.div
                            className="bg-black rounded-full p-3 sm:p-4 inline-flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <feature.icon
                                className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                                strokeWidth={1.5}
                            />
                        </motion.div>
                    </div>
                    <h4 className="font-bold mt-4 text-sm sm:text-md">{feature.title}</h4>
                    <p className="text-xs">{feature.description}</p>
                </motion.div>
            ))}
        </div>
    );
};
