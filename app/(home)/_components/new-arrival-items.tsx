import { Button } from "@/components/ui/button";
import Image from "next/image";

export const NewArrivalItems = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section */}
            <div className="bg-black relative dark:bg-white p-4 rounded-md flex flex-col items-center justify-center">
                <Image
                    src="/home/category/ps5.svg"
                    alt="Left Section Image"
                    width={350}
                    height={350}
                    className="mb-4"
                />
                <div className="absolute bottom-4 left-4 text-white dark:text-black">
                    <h4 className="text-md font-semibold mb-2">
                        PlayStation 5
                    </h4>
                    <Button
                        variant="link"
                        className="text-white dark:text-black -ml-4 underline"
                    >
                        Shop Now
                    </Button>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-6">
                {/* Top Box */}
                <div className="bg-black relative dark:bg-white p-4 rounded-md flex flex-col items-center justify-center">
                    <Image
                        src="/home/category/women-clothings.png"
                        alt="Right Top Image"
                        width={300}
                        height={300}
                        className="-mb-4"
                    />
                    <div className="absolute bottom-4 left-4 text-white dark:text-black">
                        <h4 className="text-md font-semibold mb-2">
                            Women’s Collections
                        </h4>
                        <Button
                            variant="link"
                            className="text-white dark:text-black -ml-4 underline"
                        >
                            Shop Now
                        </Button>
                    </div>
                </div>

                {/* Bottom Boxes */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black relative dark:bg-white p-4 rounded-md flex flex-col items-center justify-center">
                        <Image
                            src="/home/category/speakers.svg"
                            alt="Bottom Left Image"
                            width={100}
                            height={100}
                            className="mb-2"
                        />
                        <div className="absolute bottom-4 left-4 text-white dark:text-black">
                            <h4 className="text-md font-semibold mb-2 ">
                                Speakers
                            </h4>
                            <Button
                                variant="link"
                                className="text-white dark:text-black -ml-4 underline"
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                    <div className="bg-black relative dark:bg-white p-4 rounded-md flex flex-col items-center justify-center">
                        <Image
                            src="/home/category/perfume.svg"
                            alt="Bottom Right Image"
                            width={100}
                            height={100}
                            className="mb-2"
                        />
                        <div className="absolute bottom-4 left-4 text-white dark:text-black">
                            <h4 className="text-md font-semibold mb-2 ">
                                Perfume
                            </h4>
                            <Button
                                variant="link"
                                className="text-white dark:text-black -ml-4 underline"
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};