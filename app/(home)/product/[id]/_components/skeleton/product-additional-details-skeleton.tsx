import { Skeleton } from "@/components/ui/skeleton";

export const ProductAdditionalDetailsSkeleton = () => {
    return (
        <div className="p-8 space-y-12">
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
                <div>
                    <h2 className="font-bold text-md mb-4">
                        <Skeleton className="w-1/2 h-6" />
                    </h2>
                    <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <li key={index} className="text-sm">
                                <Skeleton className="w-full h-4" />
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-md mb-4">
                        <Skeleton className="w-1/2 h-6" />
                    </h2>
                    <ul className="list-disc list-inside text-sm leading-relaxed space-y-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <li key={index} className="text-sm">
                                <Skeleton className="w-full h-4" />
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold text-md mb-4">
                        <Skeleton className="w-1/2 h-6" />
                    </h2>
                    <div className="space-y-2">
                        <Skeleton className="w-full h-4" />
                        <Skeleton className="w-full h-4" />
                        <Skeleton className="w-full h-4" />
                        <Skeleton className="w-full h-4" />
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-md mb-4">
                        <Skeleton className="w-1/2 h-6" />
                    </h2>
                    <div className="space-y-2">
                        <Skeleton className="w-full h-4" />
                        <Skeleton className="w-full h-4" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                <div className="bg-gray-100">
                    <h2 className="font-bold rounded-sm text-white p-1 text-md mb-4 text-gradient bg-gradient-to-r from-red-500 to-pink-500">
                        <Skeleton className="w-1/2 h-6" />
                    </h2>
                    <div className="space-y-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="p-4 rounded-sm bg-gray-100 dark:bg-gray-700">
                                <Skeleton className="w-3/4 h-4" />
                                <Skeleton className="w-1/2 h-4" />
                                <Skeleton className="w-full h-4" />
                                <Skeleton className="w-1/4 h-4" />
                            </div>
                        ))}
                        <div className="w-full m-4 space-y-2">
                            <Skeleton className="w-1/2 h-6" />
                            <Skeleton className="w-full h-24" />
                            <Skeleton className="w-1/4 h-8" />
                        </div>
                    </div>
                </div>

                {true && ( // Replace with a condition if warranty is optional
                    <div className="space-y-4">
                        <div>
                            <h2 className="font-bold text-md">
                                <Skeleton className="w-1/2 h-6" />
                            </h2>
                            <Skeleton className="w-full h-4" />
                            <Skeleton className="w-full h-4" />
                        </div>
                        <div>
                            <h2 className="font-bold text-md mb-4">
                                <Skeleton className="w-1/2 h-6" />
                            </h2>
                            <div className="space-y-2">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <div key={index} className="p-2 rounded-sm bg-gray-100 dark:bg-gray-700">
                                        <Skeleton className="w-full h-4" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="py-10 space-y-4">
                <div className="flex items-center gap-x-3">
                    <Skeleton className="w-3 h-8 rounded-sm bg-red-600" />
                    <Skeleton className="w-1/4 h-6 bg-red-600 text-red-600" />
                </div>
                <div>
                    <Skeleton className="w-full h-64" />
                </div>
            </div>
        </div>
    );
};
