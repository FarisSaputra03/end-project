"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDoubleDown } from "react-icons/bs";
export default function Potrait() {
  const [selectedFoto, setSelectedFoto] = useState<boolean>(false);
  const listGaleri = [
    {
      img: "/img/couplelg.png",
    },
    {
      img: "/img/familylg.png",
    },
    {
      img: "/img/siswa.png",
    },
  ];
  const listGaleri2 = [
    {
      img2: "/img/wakwaw.png",
    },
    {
      img2: "/img/2.png",
    },
    {
      img2: "/img/biglg.png",
    },
  ];
  const listGaleri3 = [
    {
      img3: "/img/selfi.png",
    },
    {
      img3: "/img/wle.png",
    },
    {
      img3: "/img/4boxlg.png",
    },
  ];
  return (
    <section className="text-gray-600 bg-white">
      <div className="flex pt-5 justify-between w-full">
        <div className="pt-3 p-3">
          <Link href={"/"}>
            <button>
              <svg
                width="48"
                height="48"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C16.3854 0 17.7135 0.177083 18.9844 0.53125C20.2552 0.885417 21.4531 1.38542 22.5781 2.03125C23.7031 2.67708 24.7135 3.45833 25.6094 4.375C26.5052 5.29167 27.2865 6.30729 27.9531 7.42188C28.6198 8.53646 29.125 9.72917 29.4688 11C29.8125 12.2708 29.9896 13.6042 30 15C30 16.3854 29.8229 17.7135 29.4688 18.9844C29.1146 20.2552 28.6146 21.4531 27.9688 22.5781C27.3229 23.7031 26.5417 24.7135 25.625 25.6094C24.7083 26.5052 23.6927 27.2865 22.5781 27.9531C21.4635 28.6198 20.2708 29.125 19 29.4688C17.7292 29.8125 16.3958 29.9896 15 30C13.6146 30 12.2865 29.8229 11.0156 29.4688C9.74479 29.1146 8.54688 28.6146 7.42188 27.9688C6.29688 27.3229 5.28646 26.5417 4.39062 25.625C3.49479 24.7083 2.71354 23.6927 2.04688 22.5781C1.38021 21.4635 0.875 20.2708 0.53125 19C0.1875 17.7292 0.0104167 16.3958 0 15C0 13.6146 0.177083 12.2865 0.53125 11.0156C0.885417 9.74479 1.38542 8.54688 2.03125 7.42188C2.67708 6.29688 3.45833 5.28646 4.375 4.39062C5.29167 3.49479 6.30729 2.71354 7.42188 2.04688C8.53646 1.38021 9.72917 0.875 11 0.53125C12.2708 0.1875 13.6042 0.0104167 15 0ZM15 28C16.1979 28 17.349 27.8438 18.4531 27.5312C19.5573 27.2188 20.5885 26.7812 21.5469 26.2188C22.5052 25.6562 23.3854 24.9792 24.1875 24.1875C24.9896 23.3958 25.6667 22.5208 26.2188 21.5625C26.7708 20.6042 27.2083 19.5677 27.5312 18.4531C27.8542 17.3385 28.0104 16.1875 28 15C28 13.8021 27.8438 12.651 27.5312 11.5469C27.2188 10.4427 26.7812 9.41146 26.2188 8.45312C25.6562 7.49479 24.9792 6.61458 24.1875 5.8125C23.3958 5.01042 22.5208 4.33333 21.5625 3.78125C20.6042 3.22917 19.5677 2.79167 18.4531 2.46875C17.3385 2.14583 16.1875 1.98958 15 2C13.8021 2 12.651 2.15625 11.5469 2.46875C10.4427 2.78125 9.41146 3.21875 8.45312 3.78125C7.49479 4.34375 6.61458 5.02083 5.8125 5.8125C5.01042 6.60417 4.33333 7.47917 3.78125 8.4375C3.22917 9.39583 2.79167 10.4323 2.46875 11.5469C2.14583 12.6615 1.98958 13.8125 2 15C2 16.1979 2.15625 17.349 2.46875 18.4531C2.78125 19.5573 3.21875 20.5885 3.78125 21.5469C4.34375 22.5052 5.02083 23.3854 5.8125 24.1875C6.60417 24.9896 7.47917 25.6667 8.4375 26.2188C9.39583 26.7708 10.4323 27.2083 11.5469 27.5312C12.6615 27.8542 13.8125 28.0104 15 28ZM11.3594 14H22V16H11.3594L15.7031 20.2812L14.2969 21.7188L7.51562 15L14.2969 8.28125L15.7031 9.71875L11.3594 14Z"
                  fill="#732C80"
                />
              </svg>
            </button>
          </Link>
        </div>
        <h1 className="font-bold text-black md:text-5xl">Portrait 4</h1>
        <h1 className="font-bold text-black text-6xl"></h1>
      </div>
      <div className="flex flex-col space-y-10 bg-white px-5 py-5">
        <div className="border-2 group-hover:scale-110 rounded-lg flex items-center border-opacity-60 lg:w-3/5 md:mx-auto">
          <div className="h-64 relative w-64">
            <Image
              fill
              src="/img/family.png"
              sizes="(max-width: 125px) 100vw, (max-width: 125px) 50vw, 33vw"
              alt=""
            />
          </div>
          <div className="ml-5 sm:text-left text-center mt-6">
            <h2 className="text-black text-sm font-bold mb-2">Portrait 4</h2>
            <p className="leading-relaxed text-sm">
              adalah Photobox adalah foto yang diambil oleh diri sendiri, bukan
              oleh orang lain. Ini adalah studio mandiri asli untuk aku yang
              sebenarnya.
            </p>
          </div>
        </div>
        <div className="border-2 group-hover:scale-110 rounded-lg flex items-center border-opacity-60 lg:w-3/5 md:mx-auto">
          <div className="ml-5 sm:text-left text-center mt-6">
            <h2 className="text-black text-sm font-bold mb-2">Portrait 4</h2>
            <p className="leading-relaxed text-sm">
              adalah layanan foto yang mengutamakan expresi muka karena mode
              fotonya medium shoot
            </p>
          </div>
          <div className="h-64 relative w-64">
            <Image
              fill
              src="/img/4box.png"
              sizes="(max-width: 125px) 100vw, (max-width: 125px) 50vw, 33vw"
              alt=""
            />
          </div>
        </div>
        <div className="border-2 group-hover:scale-110 rounded-lg flex items-center border-opacity-60 lg:w-3/5 md:mx-auto">
          <div className="h-64 relative w-64">
            <Image
              fill
              src="/img/couple.png"
              sizes="(max-width: 125px) 100vw, (max-width: 125px) 50vw, 33vw"
              alt=""
            />
          </div>
          <div className="sm:text-left text-center mt-6">
            <h2 className="ml-2 text-black text-sm title-font font-bold mb-2">
              Menawarkan :
            </h2>
            <p className="ml-2 leading-relaxed text-sm">- Maksimal 3 Orang</p>
            <p className="ml-2 leading-relaxed text-sm">- Cetakan SQUARE</p>
            <p className="ml-2 leading-relaxed text-sm">
              - Ukuran Cetakan 4 foto dalam 1 cetakan 4R
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <Link href={"/step"}>
              <button className=" text-white bg-ungu border-2 py-2 px-9 hover:bg-purple-900 rounded-full text-[16px]">
                Pesan Online
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            onClick={() => {
              setSelectedFoto(!selectedFoto);
            }}
          >
            <button className=" flex gap-1 text-ungu bg-white border-4 border-ungu py-2 px-5 rounded-full text-[16px]">
              Lihat Galeri Photo
            </button>
            <div className="flex justify-center pt-3.5">
              <BsChevronDoubleDown size={25} />
            </div>
          </div>
        </div>
      </div>

      {selectedFoto !== false ? (
        <div>
          <div className="p-8 flex justify-evenly">
            {listGaleri.map((data: any, index) => (
              <div key={index + 1}>
                <div>
                  <Image width={300} height={300} src={data.img} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 flex justify-evenly">
            {listGaleri2.map((data: any, index) => (
              <div key={index + 1}>
                <div>
                  <Image width={300} height={300} src={data.img2} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="p-8 flex justify-evenly">
            {listGaleri3.map((data: any, index) => (
              <div key={index + 1}>
                <div>
                  <Image width={300} height={300} src={data.img3} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
