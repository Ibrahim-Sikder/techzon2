"use client";

import { HiChevronRight, HiStar } from "react-icons/hi";

import "../product.css";
import Link from "next/link";
import Container from "@/components/shared/Container";
import ProductSlider from "../_component/ProductSlider";
import AddProductBtn from "@/components/ui/AddProductBtn/AddProductBtn";
import product from "../../../../assets/images/explore.png";
import { Button, Divider } from "@mui/material";
import TECForm from "@/components/Forms/Form";
import { FieldValues } from "react-hook-form";
import ProductRadioButton from "../_component/ProductRadioButton";
import ProductSize from "../_component/ProductSize";
import ProductDetails from "../_component/ProductDetails";

const SingleProduct = () => {
  const products = [
    {
      id: 1,
      img: product,
      name: "Laptop",
      price: 400,
      description: "this is products descriptions ",
    },
  ];

  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
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
      <TECForm onSubmit={handleSubmit}>
        <div className="flex-wrap xl:flex-nowrap flex items-center gap-14">
          <div className="xl:w-[50%] overflow-hidden w-full ">
            <ProductSlider />
          </div>
          <div className="border-b border-[#ddd]">
            <small>Headphones</small>
            <h3 className="text-2xl font-semibold my-3">
              Ultra Wireless S50 Headphones S50 with Bluetooth
            </h3>
            <div className="my-5">
              <span className="mb-2 block">
                Availability: <b className="text-[#2251CF]"> 26 in stock</b>{" "}
              </span>
              <Divider />
            </div>
            <div className="flex items-center text-sm ">
              <div className="flex items-center ">
                <HiStar size={20} className=" startIcon" />
                <HiStar size={20} className=" startIcon" />
                <HiStar size={20} className=" startIcon" />
                <HiStar size={20} className=" startIcon" />
                <HiStar size={20} className=" startIcon" />
              </div>
              <small> (3 customer reviews)765</small>
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              excepturi voluptatem iusto et harum porro eveniet nemo quibusdam,
              perspiciatis cupiditate?{" "}
            </p>
            <span className="my-5 block"> SKU: FW511948218 </span>
            <div className="flex items-">
              <span className="text-5xl">$765568</span>{" "}
              <del className="text-xl">$2,299.00</del>
            </div>
            <hr className="my-5" />
            <div className="flex items-center">
              <ProductRadioButton />
            </div>
            <div className="flex items-center mb-">
              <ProductSize />
            </div>
            <span className="mt-3 mb-2 block">Quantity </span>
            <AddProductBtn />
            <hr className="my-5" />
            <div>
              <div className="flex items-center mt-2 gap-2 mb-5">
                <Link href="/cart">
                  {" "}
                  <button className="addToCartBtn">Add to cart</button>
                </Link>
                <Link href="/cart">
                  {" "}
                  <button className="addToCartBtn">Buy Now </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </TECForm>
      <ProductDetails />
    </Container>
  );
};

export default SingleProduct;
