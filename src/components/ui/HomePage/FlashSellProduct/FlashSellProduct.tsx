import "./FlashSellProduct.css";
import Image from "next/image";

import {
  HiMinus,
  HiOutlineArrowNarrowRight,
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
import Link from "next/link";
import { TFlashSale } from "@/types";
import Container from "@/components/shared/Container";
import FlashSaleTime from "./FlashSaleTime";
import TopRatedIcons from "./TopRatedIcon";
import flash from "../../../../assets/images/trending5.png";
const FlashSellProduct = async () => {
  const flashData = [
    {
      id: 1,
      name: "Falsh",
      img: flash,
      discount: '30%'
    },
    {
      id: 1,
      name: "Falsh",
      img: flash,
       discount: '30%'
    },
    {
      id: 1,
      name: "Falsh",
      img: flash,
       discount: '30%'
    },
    {
      id: 1,
      name: "Falsh",
      img: flash,
       discount: '30%'
    },
  ];
  return (
    <Container className="sectionMargin">
      <div className="flex items-center mb-10 flex-wrap ">
        <FlashSaleTime />
        <Link href="/flash-sale">
          <div className="flex items-center ml-0  lg:ml-8 bg-[#E8E8E8]  px-3 py-2 rounded-sm mt-3 ">
            <button>See All</button> <HiOutlineArrowNarrowRight size={20} />
          </div>
        </Link>
      </div>
      <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid xl:grid-cols-4 gap-10 place-content-center place-items-center">
        {flashData?.map((data: any) => (
          <div key={data._id} className="flashSellProductWrap">
            <div className="flashContent">
              <span className="bg-[#F14705] text-white rounded-full p-1 text-sm mt-3">
                {data.discount}
              </span>
              <Image width="500" height="500" src={data.img} alt="flash" />
              <div>
                <p className="flashCartName">{data.name}</p>
                <Link href="/flash-sale">
                  {" "}
                  <button className="flashCartBtn ">Add To Cart</button>
                </Link>
                <div className="flex items-center">
                  <HiStar size={25} className="startIcon" />
                  <HiStar size={25} className="startIcon" />
                  <HiStar size={25} className="startIcon" />
                  <HiStar size={25} className="startIcon" />
                  <HiStar size={25} className="startIcon" />
                </div>
                <div className="flex items-center my-2">
                  <del className="mr-2">৳484848</del> <HiMinus />
                  <b className="text-[#2251CF] ml-2">৳58999</b>
                </div>
              </div>
              <div className="iconWraps space-y-4">
                <TopRatedIcons />
                <HiOutlineHeart className="startIcon startIcon2" size={30} />
                <HiOutlineEye className="startIcon startIcon2" size={30} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FlashSellProduct;
