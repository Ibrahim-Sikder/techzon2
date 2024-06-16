"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  HiMinus,
  HiOutlineArrowNarrowRight,
  HiOutlineHeart,
  HiOutlineShoppingCart,
  HiStar,
} from "react-icons/hi";
import "./product.css";
import Container from "@/components/shared/Container";
import TopRatedIcons from "@/components/ui/HomePage/FlashSellProduct/TopRatedIcon";
import { Card, Checkbox } from "@mui/material";
import product from "../../../assets/images/explore.png";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      img: product,
      name: "Laptop",
    },
    {
      id: 1,
      img: product,
      name: "Laptop",
    },
    {
      id: 1,
      img: product,
      name: "Laptop",
    },
    {
      id: 1,
      img: product,
      name: "Laptop",
    },
    {
      id: 1,
      img: product,
      name: "Laptop",
    },
    {
      id: 1,
      img: product,
      name: "Laptop",
    },
  ];

  return (
    <Container className="pt-12">
      <div className="flex flex-wrap lg:flex-nowrap md:justify-between gap-5">
        <div className="flex flex-wrap justify-between lg:block space-y-0 lg:space-y-5 gap-3">
          <Card className="card">
            <h4 className="text-xl font-semibold">Price Range</h4>
            <div className="space-y-3 mt-3">
              <div className="flex items-center">
                <Checkbox />
                <p className="flex items-center ml-4">all price herer </p>
              </div>
            </div>
          </Card>
          <Card className="card">
            <h4 className="text-xl font-semibold">Brands</h4>
            <div className="space-y-3 mt-3">
              <div className="flex items-center">
                <Checkbox />
                <p className="flex items-center ml-4">brand here </p>
              </div>
            </div>
          </Card>
          <Card className="card">
            <h4 className="text-xl font-semibold">reviews</h4>
            <div className="space-y-3 mt-3">
              <div className="flex items-center">
                <Checkbox />
                <p className="flex items-center ml-4">Star</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="">
          <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-10 place-content-center place-items-center ">
            {products.map((data: any) => (
              <div key={data._id} className="flashSellProductWrap productsCard">
                <div className="flashContent">
                  <Image width="500" height="500" src={data.img} alt="flash" />
                  <div>
                    <p className="flashCartName">{data.name}</p>
                    <button className="flashCartBtn ">Add To Cart</button>
                    <div className="flex items-center ">
                      <HiStar size={25} className=" startIcon" />
                      <HiStar size={25} className=" startIcon" />
                      <HiStar size={25} className=" startIcon" />
                      <HiStar size={25} className=" startIcon" />
                      <HiStar size={25} className=" startIcon" />
                    </div>
                    <div className="flex items-center  my-2">
                      <del className="mr-2"> ৳484848</del> <HiMinus />
                      <b className="text-[#2251CF] ml-2">৳{data.price}</b>
                    </div>
                  </div>
                  <Link href={`products/${data._id}`}>
                    <div className="flex items-center mb-3 ">
                      <button>See Details</button>{" "}
                      <HiOutlineArrowNarrowRight size={15} />
                    </div>
                  </Link>
                </div>
                <div className="iconWraps space-y-4">
                  {/* <ProductIcons product={data as unknown as TProduct} /> */}
                  <TopRatedIcons />

                  <HiOutlineHeart
                    className=" startIcon  startIcon2"
                    size={30}
                  />
                  <HiOutlineShoppingCart
                    className=" startIcon startIcon2"
                    size={30}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
