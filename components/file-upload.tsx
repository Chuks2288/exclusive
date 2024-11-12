import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { toast } from "sonner";

interface FileUploadProps {
    onChange: (urls: string[]) => void;
    value: string[];
    endpoint: "productImage";
}

export const FileUpload = ({
    onChange,
    value = [],
    endpoint,
}: FileUploadProps) => {

    const handleRemoveImage = (url: string) => {
        // Remove the image from the array
        const updatedImages = value.filter((imageUrl) => imageUrl !== url);
        onChange(updatedImages);
    };

    return (
        <div>
            {value.length > 0 ? (
                <div className="flex flex-wrap gap-4">
                    {value.map((imageUrl, index) => (
                        <div key={index} className="relative h-20 w-20">
                            <Image
                                alt="uploaded image"
                                src={imageUrl}
                                width={80}
                                height={80}
                                className="border border-gray-200 dark:border-gray-700 rounded"
                            />
                            <button
                                onClick={() => handleRemoveImage(imageUrl)}
                                className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-700"
                                type="button"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <UploadDropzone
                    className="cursor-pointer border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-md p-2"
                    endpoint={endpoint}
                    onClientUploadComplete={(res) => {
                        const newUrls = res?.map((file) => file.url) || [];
                        onChange([...value, ...newUrls]);
                        toast.success("Images Uploaded Successfully");
                    }}
                    onUploadError={(error: Error) => {
                        toast.error("Upload Error");
                    }}
                />
            )}
        </div>
    );
};
