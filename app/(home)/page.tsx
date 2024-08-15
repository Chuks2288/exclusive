import { Separator } from "@/components/ui/separator";
import { FlashSales } from "./_components/flash-sales";
import { Hero } from "./_components/hero";
import { CategoryProducts } from "./_components/category-product";
import { ProductBanner } from "./_components/product-banner";
import { Products } from "./_components/products";
import { BestSellingProducts } from "./_components/best-selling-products";
import { NewArrivalProducts } from "./_components/new-arrival-products";


const HomePage = () => {
    return (
        <main className="">
            <Hero />
            <FlashSales />
            <Separator className="my-4" />
            <CategoryProducts />
            <BestSellingProducts />
            <ProductBanner />
            <Products />
            <NewArrivalProducts />
        </main>
    );
}

export default HomePage;
