import { z } from "zod";
import { Loader2, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AdminProductFormSchema } from "@/schema";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { AmountInput } from "./amount-input";
import { InitialAmountInput } from "./initial-amount-input";
import { FileUpload } from "@/components/file-upload";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ShippingCostAmount } from "./shipping-cost-amount";

type FormValues = z.input<typeof AdminProductFormSchema>;

type Props = {
    id?: string;
    defaultValues?: FormValues;
    onSubmit: (values: FormValues) => void;
    onDelete?: () => void;
    disabled?: boolean;
    isPending: boolean;
};

export const ProductForm = ({
    id,
    defaultValues,
    onSubmit,
    onDelete,
    disabled,
    isPending
}: Props) => {

    const form = useForm<FormValues>({
        resolver: zodResolver(AdminProductFormSchema),
        defaultValues,
        mode: "onChange",
    });

    const handleDelete = () => {
        onDelete?.();
    };

    return (
        <Form {...form}>
            <div className="max-h-[75vh] overflow-y-auto scrollbar-none no-scrollbar p-2">
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField name="images" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Images</FormLabel>
                            <FormControl>
                                <FileUpload
                                    endpoint="productImage"
                                    value={field.value as string[]}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name="name" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter product name" {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField
                        name="description"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-y-1">
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Enter description" {...field} className="textarea-class" />
                                </FormControl>
                            </FormItem>
                        )} />

                    {/* Price and Initial Price */}
                    <FormField name="price" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                                <AmountInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Enter Amount"
                                    disabled={disabled}
                                />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name="initialPrice" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>Initial Price</FormLabel>
                            <FormControl>
                                <InitialAmountInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Enter Amount"
                                    disabled={disabled}
                                />
                            </FormControl>
                        </FormItem>
                    )} />

                    <FormField name="brand" control={form.control} render={({ field }) => (
                        <FormItem>
                            <FormLabel>Brand</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter brand" {...field} />
                            </FormControl>
                        </FormItem>
                    )} />

                    {/* Stock and Availability */}
                    <FormField
                        name="stockQuantity"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Stock Quantity</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Stock quantity"
                                        {...field}
                                        value={field.value !== undefined ? String(field.value) : ""}
                                        onChange={(e) => {
                                            const value = Number(e.target.value);
                                            // Ensure the value is a positive integer
                                            if (value > 0) {
                                                field.onChange(value);
                                            }
                                        }}
                                        min="1"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />


                    <FormField
                        name="availability"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex flex-col w-full">
                                <FormLabel>Availability</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => field.onChange(value === "yes")}
                                        value={field.value ? "yes" : "no"}
                                    >
                                        <SelectTrigger className="w-full text-left">
                                            <SelectValue placeholder="Select availability">
                                                {field.value ? "Yes" : "No"}
                                            </SelectValue>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Availability</SelectLabel>
                                                <SelectItem value="yes">Yes</SelectItem>
                                                <SelectItem value="no">No</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Warranty Details */}
                    <div className="flex flex-col gap-y-4">
                        <FormLabel>Warranty</FormLabel>
                        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                            <FormField name="warranty.duration" control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="duration" {...field} />
                                    </FormControl>
                                </FormItem>
                            )} />

                            <FormField name="warranty.coverage" control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="coverage" {...field} />
                                    </FormControl>
                                </FormItem>
                            )} />
                        </div>
                    </div>

                    {/* Shipping Details */}
                    <div className=" flex flex-col gap-y-4">
                        <FormLabel>Shipping</FormLabel>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            <FormField name="shipping.weight" control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="weight" {...field} />
                                    </FormControl>
                                </FormItem>
                            )} />

                            <FormField name="shipping.dimensions" control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="dimensions" {...field} />
                                    </FormControl>
                                </FormItem>
                            )} />
                            <FormField
                                name="shipping.cost"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <ShippingCostAmount
                                                value={field.value}
                                                onChange={field.onChange}
                                                placeholder="Shipping cost"
                                                disabled={disabled}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField name="shipping.deliveryTime" control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="delivery time" {...field} />
                                    </FormControl>
                                </FormItem>
                            )} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <FormLabel>Return Policy</FormLabel>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {/* Returnable Field */}
                            <FormField
                                name="returnPolicy.returnable"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Select
                                                onValueChange={(value) => field.onChange(value === "yes")}
                                                value={field.value ? "yes" : "no"}
                                            >
                                                <SelectTrigger className="w-full text-left">
                                                    <SelectValue placeholder="Select">
                                                        {field.value ? "Yes" : "No"}
                                                    </SelectValue>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Returnable</SelectLabel>
                                                        <SelectItem value="yes">Yes</SelectItem>
                                                        <SelectItem value="no">No</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Return Period Field */}
                            <FormField
                                name="returnPolicy.returnPeriod"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Return period" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Conditions Field */}
                            <FormField
                                name="returnPolicy.conditions"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem className="w-full md:col-span-2 col-span-1">
                                        <FormControl>
                                            <Textarea placeholder="Conditions" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>


                    <div className="flex flex-col gap-y-4">
                        <FormLabel>Discount Amount</FormLabel>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            <FormField
                                name="discount.amount"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                placeholder="Discount amount"
                                                {...field}
                                                value={field.value !== undefined ? String(field.value) : ""}
                                                onChange={(e) => {
                                                    const value = Number(e.target.value);
                                                    // Ensure the discount amount is positive and not a negative number
                                                    if (value >= 0) {
                                                        field.onChange(value);
                                                    }
                                                }}
                                                min="0"
                                                step="1" // If only whole numbers are allowed
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField name="discount.type" control={form.control} render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value || ""}
                                        >
                                            <SelectTrigger className="w-full text-left">
                                                <SelectValue placeholder="Select discount type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="percentage">Percentage</SelectItem>
                                                <SelectItem value="fixed">Fixed Amount</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                </FormItem>
                            )} />
                            <FormField
                                name="discount.validUntil"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="date"
                                                placeholder="Valid Until"
                                                {...field}
                                                value={field.value ? field.value.toISOString().slice(0, 10) : ""}
                                                onChange={(e) => field.onChange(new Date(e.target.value))}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                        </div>
                    </div>
                    <Button
                        className="w-full"
                        type="submit"
                        disabled={disabled}
                    >

                        {id ?
                            isPending ? <Loader2 /> :
                                "Save changes"
                            :
                            isPending ? <Loader2 /> :
                                "Create product"}
                    </Button>
                    {!!id && (
                        <Button
                            type="button"
                            disabled={disabled}
                            onClick={handleDelete}
                            className="w-full"
                            variant="outline"
                        >
                            <Trash className="size-4 mr-2" />
                            Delete product
                        </Button>

                    )}
                </form>
            </div>
        </Form>

    );
};
