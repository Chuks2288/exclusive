"use client";

import React, { useState, useEffect } from 'react';

export const FlashSalesTime = () => {
    // Function to initialize or retrieve the target date
    const initializeTargetDate = () => {
        const storedTargetDate = localStorage.getItem('flashSalesTargetDate');
        if (storedTargetDate) {
            return parseInt(storedTargetDate, 10);
        }

        // If no stored target date, set a new one 3 days from now
        const newTargetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
        localStorage.setItem('flashSalesTargetDate', newTargetDate.toString());
        return newTargetDate;
    };

    const targetDate = initializeTargetDate();

    const calculateTimeLeft = () => {
        const currentTime = new Date().getTime();
        const difference = targetDate - currentTime;

        // Check if the countdown has ended
        if (difference <= 0) {
            localStorage.removeItem('flashSalesTargetDate'); // Clear the stored target date
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        // Update the countdown every second
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-between lg:max-w-[580px] max-w-[90%]">
            <h1 className="font-bold lg:text-2xl text-xl self-end">
                Flash Sales
            </h1>
            <div className="font-bold flex items-center gap-x-2">
                <div className="flex flex-col gap-y-1">
                    <p className="text-sm">Days</p>
                    <p className="text-2xl text-center">
                        {String(timeLeft.days).padStart(2, '0')}
                    </p>
                </div>
                <p className="font-bold text-red-600 pt-6">:</p>
                <div className="flex flex-col gap-y-1">
                    <p className="text-sm">Hours</p>
                    <p className="lg:text-2xl text-xl text-center">
                        {String(timeLeft.hours).padStart(2, '0')}
                    </p>
                </div>
                <p className="font-bold text-red-600 pt-6">:</p>
                <div className="flex flex-col gap-y-1">
                    <p className="text-sm">Minutes</p>
                    <p className="lg:text-2xl text-xl text-center">
                        {String(timeLeft.minutes).padStart(2, '0')}
                    </p>
                </div>
                <p className="font-bold text-red-600 pt-6">:</p>
                <div className="flex flex-col gap-y-1">
                    <p className="text-sm">Seconds</p>
                    <p className="lg:text-2xl text-xl text-center">
                        {String(timeLeft.seconds).padStart(2, '0')}
                    </p>
                </div>
            </div>
        </div>
    );
};
