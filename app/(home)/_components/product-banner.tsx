"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const ProductBanner = () => {
    const calculateTimeLeft = () => {
        const targetTime = new Date(localStorage.getItem('targetTime') || '').getTime();
        const now = new Date().getTime();
        const difference = targetTime - now;

        let timeLeft = {
            hours: 0,
            days: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const targetTime = localStorage.getItem('targetTime');
        if (!targetTime) {
            const futureTime = new Date().getTime() + 86400000; // 24 hours from now
            localStorage.setItem('targetTime', new Date(futureTime).toString());
        }

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex lg:flex-row flex-col items-center justify-between min-h-[450px] bg-black dark:bg-white lg:p-8 p-2 space-y-4">
            <div className="flex-1 flex-col lg:space-y-8 space-y-3 justify-center items-center">
                <p className="text-green-500 text-sm">categories</p>
                <h1 className="max-w-[420px] lg:text-5xl text-2xl font-bold text-white dark:text-black">
                    Enhance Your Music Experience
                </h1>
                <div className="flex space-x-4">
                    <div className="flex w-[4rem] h-[4rem] rounded-full flex-col items-center justify-center bg-white dark:bg-black">
                        <p className="font-bold text-xl">{timeLeft.days}</p>
                        <span className="font-bold text-xs">Days</span>
                    </div>
                    <div className="flex w-[4rem] h-[4rem] rounded-full flex-col items-center justify-center bg-white dark:bg-black">
                        <p className="font-bold text-xl">{timeLeft.hours}</p>
                        <span className="font-bold text-xs">Hours</span>
                    </div>
                    <div className="flex w-[4rem] h-[4rem] rounded-full flex-col items-center justify-center bg-white dark:bg-black">
                        <p className="font-bold text-xl">{timeLeft.minutes}</p>
                        <span className="font-bold text-xs">Minutes</span>
                    </div>
                    <div className="flex w-[4rem] h-[4rem] rounded-full flex-col items-center justify-center bg-white dark:bg-black">
                        <p className="font-bold text-xl">{timeLeft.seconds}</p>
                        <span className="font-bold text-xs">Seconds</span>
                    </div>
                </div>
                <Button
                    size="lg"
                    className="bg-green-500 rounded-sm text-sm hover:bg-green-600 focus:bg-green-600"
                >
                    Buy Now
                </Button>
            </div>
            <div className="flex-1 relative justify-center items-center">
                {/* Blurred background div */}
                <Image
                    src="/home/category/jbl.svg"
                    alt="Banner Image"
                    width={450}
                    height={450}
                    className="object-contain max-w-full max-h-full"
                />
            </div>
        </div>
    )
}