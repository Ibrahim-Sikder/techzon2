import React from "react";
import Image from "next/image";

import "./PopularCategories.css";
import { TProduct } from "@/types";
import Link from "next/link";
import Container from "@/components/shared/Container";
import product from '../../../../assets/images/explore.png'
const PopularCategories = async () => {
const products = [
  {
    id:1,
    img: product,
    name: 'Laptop'
  },
  {
    id:1,
    img: product,
    name: 'Laptop'
  },
  {
    id:1,
    img: product,
    name: 'Laptop'
  },
  {
    id:1,
    img: product,
    name: 'Laptop'
  },
  {
    id:1,
    img: product,
    name: 'Laptop'
  },
  {
    id:1,
    img: product,
    name: 'Laptop'
  },
] 
  return (
    <Container className="sectionMargin">
      <h3 className="text-2xl font-semibold ">Popular Categories </h3>

      <div className="lg:grid-cols-4 grid xl:grid-cols-6 gap-5 mt-10 text-center grid-cols-1 md:grid-cols-3 place-items-center  ">
        {products?.map((data: any) => (
         <div key={data._id} className="categoryContainer">
         <Image src={data.img} width="500" height="500" alt="categories" />
         <h3 className="text-xl font-semibold mt-3"> {data.name} </h3>
        
       </div>
        ))}
      </div>
    </Container>
  );
};

export default PopularCategories;
