// import { z } from "zod";
// import { useOpenProduct } from "@/features/products/hooks/use-open-product";
// import { useEditProduct } from "@/features/products/api/use-edit-product";
// import { useDeleteProduct } from "@/features/products/api/use-delete-product";
// import { useGetProduct } from "@/features/products/api/use-get-product";
// import { ProductForm } from "@/features/products/components/product-form";
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
// } from "@/components/ui/sheet";
// import { AdminProductFormSchema } from "@/schema";
// import { ProductFormSkeleton } from "./skeleton/product-form-skeleton";
// import { useConfirm } from "@/hooks/use-confirm";

// type FormValues = z.input<typeof AdminProductFormSchema>;


// export const EditProductSheet = () => {
//     const { isOpen, onClose, id } = useOpenProduct();
//     const [ConfirmDialog, confirm] = useConfirm(
//         "Are you sure?",
//         "You are about to delete this product"
//     );

//     const productQuery = useGetProduct(id);
//     const editMutation = useEditProduct(id);
//     const deleteMutation = useDeleteProduct(id);

//     const isPending = editMutation.isPending || deleteMutation.isPending;
//     const isLoading = productQuery.isLoading;

//     const form = useForm<FormValues>({
//         resolver: zodResolver(AdminProductFormSchema),
//         defaultValues: {
//             name: "",
//             description: "",
//             price: 0,
//             initialPrice: 0,
//             currency: "",
//             brand: "",
//             category: "",
//             subcategory: "",
//             availability: "",
//             stockQuantity: 0,
//             images: [],
//             features: [],
//             specifications: [],
//             isNew: false,
//             warranty: {
//                 duration: "",
//                 coverage: "",
//             },
//             shipping: {
//                 weight: "",
//                 dimensions: "",
//                 cost: 0,
//                 deliveryTime: "",
//             },
//             returnPolicy: {
//                 returnable: false,
//                 returnPeriod: "",
//                 conditions: "",
//             },
//             discount: {
//                 amount: 0,
//                 type: "",
//                 validUntil: new Date(),
//             },
//         },
//         mode: "onChange",
//     });


//     const onSubmit = (values: FormValues) => {
//         editMutation.mutate(values, {
//             onSuccess: () => {
//                 onClose();
//             }
//         });
//     };

//     const onDelete = async () => {
//         const ok = await confirm();

//         if (ok) {
//             deleteMutation.mutate(undefined, {
//                 onSuccess: () => {
//                     onClose();
//                 }
//             });
//         }
//     };

//     const defaultValues = productQuery.data
//         ? {
//             name: productQuery.data.name,
//             description: productQuery.data.description,
//             price: productQuery.data.price,
//             // Map additional fields from the API response
//         }
//         : {
//             name: "",
//             description: "",
//             price: 0,
//             // Default values for all other fields
//         };

//     return (
//         <>
//             <ConfirmDialog />
//             <Sheet open={isOpen} onOpenChange={onClose}>
//                 <SheetContent className="space-y-4">
//                     <SheetHeader>
//                         <SheetTitle>Edit Product</SheetTitle>
//                         <SheetDescription>Edit the product details as needed.</SheetDescription>
//                     </SheetHeader>
//                     {isLoading ? (
//                         <ProductFormSkeleton />
//                     ) : (
//                         <ProductForm
//                             id={id}
//                             onSubmit={onSubmit}
//                             disabled={isPending}
//                             defaultValues={defaultValues}
//                             onDelete={onDelete}
//                         />
//                     )}
//                 </SheetContent>
//             </Sheet>
//         </>
//     );
// };
