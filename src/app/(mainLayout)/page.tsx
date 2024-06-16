import Categories from "@/components/ui/HomePage/Categories/Categories";
import FlashSellProduct from "@/components/ui/HomePage/FlashSellProduct/FlashSellProduct";
import HeroSection from "@/components/ui/HomePage/HeroSection";
import PopularCategories from "@/components/ui/HomePage/PopularCategories/PopularCategories";
import TopRatedProduct from "@/components/ui/HomePage/TopRatedProduct/TopRatedProduct";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FlashSellProduct />
      <PopularCategories />
      <Categories/>
      <TopRatedProduct/>
    </>
  );
};

export default Home;
