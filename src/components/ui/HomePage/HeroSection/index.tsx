/* eslint-disable react/no-unescaped-entities */
"use client";
import "./HeroSection.css";
import React from "react";
import slider from "../../../../assets/images/slider2.webp";
import slider2 from "../../../../assets/images/categories.png";
import slider3 from "../../../../assets/images/flash8.png";
import slider4 from "../../../../assets/images/explore.png";
import slider5 from "../../../../assets/images/explore2.png";
import slider6 from "../../../../assets/images/slider3.webp";
import slider7 from "../../../../assets/images/slider4.webp";
import slider8 from "../../../../assets/images/slider5.jpg";
import slider9 from "../../../../assets/images/slider6.webp";
import slider10 from "../../../../assets/images/headphone.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import {
  FaBicycle,
  FaHeadset,
  FaPercent,
  FaShopify,
  FaTshirt,
  FaUtensils,
} from "react-icons/fa";
import  { Autoplay }  from "swiper/modules";
import { HiDeviceTablet, HiOutlineWifi } from "react-icons/hi";
import { LuWatch, LuYoutube } from "react-icons/lu";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import Container from "@/components/shared/Container";
import { Button } from "@mui/material";
export default function HeroSection() {
  return (
    <Container className="heroSectionContainer">
      <div className="heroSectionWraps">
        <div className="categoryHead space-y-4">
          <div className="flex items-center">
            <FaPercent className="mr-2" size={25} />
            <span className="uppercase">Fee Delivery </span>
          </div>
          <div className="flex items-center ">
            <FaHeadset size={25} className="mr-2" />
            <span>Headphone & Earphone </span>
          </div>
          <div className="flex items-center">
            <HiDeviceTablet className="mr-2" size={25} />
            <span>Mobile Accessories </span>
          </div>
          <div className="flex items-center">
            <HiOutlineComputerDesktop className="mr-2" size={25} />
            <span>Computer Office </span>
          </div>
          <div className="flex items-center">
            <HiOutlineComputerDesktop className="mr-2" size={25} />
            <span>Consumer Electronic </span>
          </div>
          <div className="flex items-center">
            <FaUtensils className="mr-2" size={25} />
            <span> Home Appliances </span>
          </div>
          <div className="flex items-center">
            <FaTshirt className="mr-2" size={25} />
            <span> Health , Fashion & Grooming </span>
          </div>
          <div className="flex items-center">
            <FaHeadset className="mr-2" size={25} />
            <span>Deals of the Day </span>
          </div>
          <div className="flex items-center">
            <FaShopify className="mr-2" size={25} />
            <span> Best Sellers </span>
          </div>
          <div className="flex items-center">
            <FaBicycle className="mr-2" size={25} />
            <span> Bicycle & Accessories </span>
          </div>
          <div className="flex items-center">
            <LuYoutube className="mr-2" size={25} />
            <span> Youtube Studio Gears & Accessories </span>
          </div>
          <div className="flex items-center">
            <HiOutlineWifi className="mr-2" size={25} />
            <span> Smart Home Improvement </span>
          </div>
          <div className="flex items-center">
            <LuWatch className="mr-2" size={25} />
            <span> Watch Collection </span>
          </div>
        </div>
        <div className="sliderWrap">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            // pagination={{ clickable: true }}
            // navigation
            speed={1500}
          >
            <SwiperSlide>
              <div className="flex items-center sliderContentWrap">
                <div className="sliderContent">
                  <h3 className="text-5xl font-semibold uppercase">
                    The New standard
                  </h3>
                  <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                  <small>FROM</small>
                  <div className="flex items-center">
                    <sup className="text-2xl font-semibold">$</sup>
                    <span className="text-5xl font-bold">799</span>
                    <sup className="text-xl font-semibold">99</sup>
                  </div>
                  <Button>Start Buying</Button>
                </div>
                <Image src={slider} alt="slider" width="500" height="500" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center sliderContentWrap">
                <div className="sliderContent">
                  <h3 className="text-5xl font-semibold uppercase">
                    The New standard
                  </h3>
                  <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                  <small>FROM</small>
                  <div className="flex items-center">
                    <sup className="text-2xl font-semibold">$</sup>
                    <span className="text-5xl font-bold">799</span>
                    <sup className="text-xl font-semibold">99</sup>
                  </div>
                  <Button>Start Buying</Button>
                </div>
                <Image src={slider2} alt="slider" width="500" height="500" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center sliderContentWrap">
                <div className="sliderContent">
                  <h3 className="text-5xl font-semibold uppercase">
                    The New standard
                  </h3>
                  <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                  <small>FROM</small>
                  <div className="flex items-center">
                    <sup className="text-2xl font-semibold">$</sup>
                    <span className="text-5xl font-bold">799</span>
                    <sup className="text-xl font-semibold">99</sup>
                  </div>
                  <Button>Start Buying</Button>
                </div>
                <Image src={slider3} alt="slider" width="500" height="500" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center sliderContentWrap">
                <div className="sliderContent">
                  <h3 className="text-5xl font-semibold uppercase">
                    The New standard
                  </h3>
                  <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                  <small>FROM</small>
                  <div className="flex items-center">
                    <sup className="text-2xl font-semibold">$</sup>
                    <span className="text-5xl font-bold">799</span>
                    <sup className="text-xl font-semibold">99</sup>
                  </div>
                  <Button>Start Buying</Button>
                </div>
                <Image src={slider4} alt="slider" width="500" height="500" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center sliderContentWrap">
                <div className="sliderContent">
                  <h3 className="text-5xl font-semibold uppercase">
                    The New standard
                  </h3>
                  <p className="my-3">"NeoTech Edge: Unveiling Simplicity"</p>
                  <small>FROM</small>
                  <div className="flex items-center">
                    <sup className="text-2xl font-semibold">$</sup>
                    <span className="text-5xl font-bold">799</span>
                    <sup className="text-xl font-semibold">99</sup>
                  </div>
                  <Button>Start Buying</Button>
                </div>
                <Image src={slider5} alt="slider" width="500" height="500" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
