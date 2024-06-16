
import { HiChevronRight, HiStar } from "react-icons/hi";

import "../product.css";

import { TProductId } from "@/types";
import type { Metadata } from 'next'
import Link from "next/link";
import Container from "@/components/shared/Container";
import ProductSlider from "../_component/ProductSlider";
import AddProductBtn from "@/components/ui/AddProductBtn/AddProductBtn";
 
export const metadata: Metadata = {
  title: 'Product details',
  description: '...',
}
const SingleProduct = async ({ params }: TProductId) => {

  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.productId}`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const products = await res.json();

  const handleAddtoCart = ()=>{
    
  }

  return (
    <Container className="mt-10">
      <div className="gap-3 flex-wrap flex items-center space-x-3">
        <span>Home</span>
        <HiChevronRight />
        <button className="bg-[#E8E8E8] px-3 py-2  rounded-sm ">
          Accessories
        </button>
        <HiChevronRight />
        <button className="bg-[#E8E8E8] px-3 py-2  rounded-sm ">
          Accessories
        </button>
        <HiChevronRight />
        <small>Ultra Wireless S50 Headphones S50 with Bluetooth</small>
      </div>
      <div className="flex-wrap xl:flex-nowrap flex items-center gap-14">
        <div className="xl:w-[50%] overflow-hidden w-full ">
          <ProductSlider/>
        </div>
        <div className="border-b border-[#ddd]">
          <small>Headphones</small>
          <h3 className="text-2xl font-semibold my-3">
            {products?.data?.name}
          </h3>
          <div className="flex items-center text-sm ">
            <div className="flex items-center ">
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
              <HiStar size={20} className=" startIcon" />
            </div>
            <small> (3 customer reviews){products.data.review}</small>
          </div>
          <div className="mt-3 text-sm featureItem  text-[#7c7c7c]">
            <ul className="space-y-2">
              <li>4.5 inch HD Touch Screen (1280 x 720) </li>
              <li>Android 4.4 KitKat OS</li>
              <li>1.4 GHz Quad Core™ Processor</li>
              <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
            </ul>
          </div>
          <p className=" text-[#7c7c7c] my-5">
           {products.data.description} 
          </p>
          <span className="my-5 block"> {products.data.brand}: FW511948218</span>
          <div className="flex items-">
            <span className="text-5xl">${products.data.price}</span>{" "}
            <del className="text-xl">$2,299.00</del>
          </div>
          <hr className="my-5" />
          <div className="flex items-center">
            <span className="mr-3">Color</span>

            {/* <Select /> */}
          </div>
          <hr className="my-5" />
          <div>
            <span>Quantity </span>
            <div className="flex items-center mt-2 mb-5">
              <AddProductBtn />

            <Link href='/cart'>  <button className="addToCartBtn">Add to cart</button></Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProduct;
