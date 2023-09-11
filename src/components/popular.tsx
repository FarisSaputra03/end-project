"use client"
import React from "react";
import Image from "next/image";
import { Navigation, Autoplay, Pagination, Scrollbar,} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Popular() {
  const listView = [
    {
      img: "/img/wide box.png",
      title: "Ultra Wide Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/4box.png",
      title: "Portrait 4 Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/big box.png",
      title: "Big Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/wide box.png",
      title: "Ultra Wide Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/4box.png",
      title: "Portrait 4 Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/big box.png",
      title: "Big Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/wide box.png",
      title: "Ultra Wide Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/4box.png",
      title: "Portrait 4 Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/big box.png",
      title: "Big Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/wide box.png",
      title: "Ultra Wide Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/4box.png",
      title: "Portrait 4 Box",
      price: "Start From IDR 15.000",
    },
    {
      img: "/img/big box.png",
      title: "Big Box",
      price: "Start From IDR 15.000",
    },
  ];
  return (
    <div className="text-gray-600 bg-white body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap w-full mb-[35px] flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-black">
            Layanan Photo Terbaik Kami
          </h1>
        </div>
        {/* desktop */}
        <div className="hidden space-x-8 sm:flex">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Scrollbar]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            className="-z-50"
          >
            <div className="flex justify-center w-full">
              {listView.map((data: any, index) => (
                <SwiperSlide key={index + 1} className="">
                  <div className="h-auto w-56 border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="h-48 rounded w-full object-cover relative object-center">
                      <Image fill src={data.img} alt="" />
                    </div>
                    <div className="ml-2">
                      <h2 className="text-[20px] text-gray-900 font-bold title-font">
                        {data.title}
                      </h2>
                      </div>
                      <div className="flex text-gray-500 ml-2">
                        <p>{data.price}</p>
                      </div>
                      <div className="w-auto flex justify-center pt-5">
                        <button className=" flex text-white bg-ungu border-0 py-2 px-6 italic focus:outline-none rounded-lg text-[16px]">
                        Booking Sekarang !
                        </button>
                      </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        {/* mobile */}
        <div className="sm:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Scrollbar]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: true }}
            className="-z-50"
          >
            <div className="flex justify-center w-full">
              {listView.map((data: any, index) => (
                <SwiperSlide key={index + 1} className="p-1">
                  <div className="h-auto w-[100px] border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div className="h-[100px] rounded w-full object-cover relative object-center">
                      <Image fill src={data.img} alt="" />
                    </div>
                    <div className="ml-1">
                      <h2 className="text-[10px] text-gray-900 font-bold">
                        {data.title}
                      </h2>
                      </div>
                      <div className="flex text-[9px] text-gray-500 ml-1">
                        <p>{data.price}</p>
                      </div>
                      <div className="w-auto flex justify-center pt-4">
                        <button className=" flex text-white bg-ungu border-0 py-1 px-4 italic focus:outline-none rounded-lg text-[7px]">
                        Booking Sekarang !
                        </button>
                      </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
