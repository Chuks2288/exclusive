import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth, auth as getAuth } from "@/auth";  // Assuming you have an actual auth function

const f = createUploadthing();

// Use the real authentication method from your auth module

const handleAuth = () => {
    const userId = auth();

    if (!userId) throw new Error("Unauthorized");

    return { userId: userId }
}

export const ourFileRouter = {
    productImage: f({ image: { maxFileSize: "4MB", maxFileCount: 5 } })
        .middleware(() => handleAuth())
        .onUploadComplete(() => { }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
