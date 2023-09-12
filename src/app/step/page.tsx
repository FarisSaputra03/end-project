"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
export default function Step() {
  const [selectedBox, setSelectedBox] = useState<any>(null);
  const [jumlahOrang, setJumlahOrang] = useState<number>(1);
  const [selectedJumlah, setSelectJumlah] = useState<any>(null);
  const [selectedReservasi, setSelectedReservasi] = useState<boolean>(false);
  const [selectResume, setSelectedResume] = useState<boolean>(false);
  const [selectWaktu, setSelectedWaktu] = useState<string>("");
  const [selectHari, setSelectedHari] = useState<string>("");
  const [selectPindah, setSelectedPindah] = useState<number>(0);
  const [selectNext, setSelectedNext] = useState<any>(null);
  const listTime = [
    {
      waktu: "10:00",
    },
    {
      waktu: "10:10",
    },
    {
      waktu: "10:20",
    },
    {
      waktu: "10:30",
    },
    {
      waktu: "10:40",
    },
    {
      waktu: "10:50",
    },
    {
      waktu: "11:00",
    },
    {
      waktu: "11:01",
    },
    {
      waktu: "11:02",
    },
    {
      waktu: "11:03",
    },
    {
      waktu: "11:04",
    },
    {
      waktu: "11:05",
    },
    {
      waktu: "11:06",
    },
    {
      waktu: "11:07",
    },
    {
      waktu: "11:08",
    },
    {
      waktu: "11:09",
    },
    {
      waktu: "11:10",
    },
    {
      waktu: "11:11",
    },
    {
      waktu: "11:12",
    },
    {
      waktu: "11:13",
    },
    {
      waktu: "11:14",
    },
    {
      waktu: "11:15",
    },
    {
      waktu: "11:16",
    },
    {
      waktu: "11:17",
    },
    {
      waktu: "11:18",
    },
    {
      waktu: "11:19",
    },
    {
      waktu: "11:20",
    },
    {
      waktu: "11:21",
    },
    {
      waktu: "11:22",
    },
    {
      waktu: "11:23",
    },
  ];
  const listDays = [
    {
      no: "3",
      hari: "Rabu",
    },
    {
      no: "4",
      hari: "Kamis",
    },
    {
      no: "5",
      hari: "Jum'at",
    },
    {
      no: "6",
      hari: "Sabtu",
    },
    {
      no: "7",
      hari: "Minggu",
    },
    {
      no: "8",
      hari: "Senin",
    },
    {
      no: "9",
      hari: "Selasa",
    },
  ];
  const listBox = [
    {
      img: "/img/2.png",
      title: "BOX 4 White",
      info: "4R - Bobokkie",
    },
    {
      img: "/img/selfi.png",
      title: "BOX 1 Fire Wood",
      info: "Square - Ultra Wide",
    },
    {
      img: "/img/familylg.png",
      title: "BOX 1 Fire Wood",
      info: "Square - Ultra Wide",
    },
    {
      img: "/img/couplelg.png",
      title: "BOX 2 Sage",
      info: "4R - Ultra Wide",
    },
    {
      img: "/img/wakwaw.png",
      title: "BOX 3 Cadangan",
      info: "Classic",
    },
    {
      img: "/img/4boxlg.png",
      title: "BOX 4 White",
      info: "Classic",
    },
    {
      img: "/img/siswa.png",
      title: "BOX 5 White Circle",
      info: "Square",
    },
    {
      img: "/img/wle.png",
      title: "BOX 6 RnD",
      info: "4R - Ultra Wide",
    },
  ];
  const kembali =()=>{
    if (selectPindah == 1) 
    {setSelectedBox (null); setSelectedPindah(0)}

    
    if (selectPindah == 2) 
    {setSelectedReservasi (false) ; setSelectJumlah (null) ; setSelectedPindah(1)}

    if (selectPindah == 3)
    {setSelectedResume (false) ; setSelectedReservasi (false) ; setSelectedPindah(2)} 

  }
  return (
    <div>
      <div className="w-full py-5">
        <div className="flex justify-end lg:justify-center">
          <div className="ml-10">
            {/* <div className="hidden space-x-8 sm:flex">
              <Link href={"/potrait"}>
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
            </div> */}
            <div className="hidden space-x-8 sm:flex">
              <button
              onClick={() => {
                kembali()
              }}>
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
            </div>
            <div className="flex mt-3 ml-20 sm:hidden">
              <Link href={"/potrait"}>
                <button>
                  <svg
                    width="20"
                    height="20"
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
          </div>
          <div className="w-1/6">
            <div className="relative mb-2">
              <div className="w-10 h-10 mx-auto bg-ungu rounded-full text-lg text-white flex items-center">
                <span className="text-center text-white w-full">1</span>
              </div>
            </div>

            <div className="text-xs text-center md:text-base">Pilih</div>
          </div>

          <div className="w-1/6">
            <div className="relative mb-2">
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width:
                    "calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)",
                }}
              >
                <div className={`w-full  rounded items-center align-middle align-center flex-1`}>
                  <div
                    className="w-0 bg-ungu py-1 rounded"
                    style={{ width: "100%;" }}
                  ></div>
                </div>
              </div>

              <div className={`w-10 h-10 mx-auto  border-2 border-gray-200 rounded-full text-lg text-white flex items-center
              ${selectPindah >= 1 ?"bg-ungu" : "bg-white" }`}>
                <span className={`text-center  w-full
                ${selectPindah >= 1 ?"text-white" : "" }`}>2</span>
              </div>
            </div>

            <div className="text-xs text-center md:text-base">Jumlah Orang</div>
          </div>

          <div className="w-1/6">
            <div className="relative mb-2">
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width:
                    "calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)",
                }}
              >
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div
                    className="w-0 bg-ungu py-1 rounded"
                    style={{ width: "100%;" }}
                  ></div>
                </div>
              </div>

              <div className={`w-10 h-10 mx-auto border-2 border-gray-200 rounded-full text-lg text-white flex items-center
              ${selectPindah >= 2 ?"bg-ungu" : "bg-white" }`}>
                <span className={`text-center w-full
                ${selectPindah >= 2 ?"text-white" : "" }`}>3</span>
              </div>
            </div>

            <div className="text-xs text-center md:text-base">
              Waktu Reservasi
            </div>
          </div>

          <div className="w-1/6">
            <div className="relative mb-2">
              <div
                className="absolute flex align-center items-center align-middle content-center"
                style={{
                  width:
                    "calc(100% - 2.5rem - 1rem); top: 50%; transform: translate(-50%, -50%)",
                }}
              >
                <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                  <div
                    className="w-0 bg-ungu py-1 rounded"
                    style={{ width: "100%;" }}
                  ></div>
                </div>
              </div>

              <div className={`w-10 h-10 mx-auto border-2 border-gray-200 rounded-full text-lg text-white flex items-center
              ${selectPindah >= 3 ?"bg-ungu" : "bg-white" }`}>
                <span className={`text-center w-full
                ${selectPindah >= 3 ?"text-white" : "" }`}>4</span>
              </div>
            </div>

            <div className="text-xs text-center md:text-base">Resume</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-auto flex">
          <div className="relative">
            <div className="ml-10 hidden sm:flex">
              <div className="w-auto items-center">
                <h1 className="text-white bg-ungu py-1 px-5 rounded-full text-xs">
                  PilihKota
                </h1>
              </div>
              <div>
                <div className="relative -z-10 -left-10 ">
                  <select
                    id="city"
                    className="bg-bu border border-gray-500 py-0.5 px-5 text-gr text-right text-xs rounded-full focus:gray-500 block w-full"
                  >
                    <option selected>Garut</option>
                    <option value="Bg">Bandung</option>
                    <option value="Tk">Tasik</option>
                    <option value="Cr">Cianjur</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="ml-10 flex justify-center flex-col space-y-4 sm:hidden">
              <div className="w-auto items-center">
                <h1 className="text-white bg-ungu py-1 px-5 rounded-full text-xs">
                  PilihKota
                </h1>
              </div>
              <div>
                <div className="relative">
                  <select
                    id="city"
                    className="bg-bu border border-gray-500 py-0.5 text-gr text-xs rounded-full focus:gray-500 block w-full"
                  >
                    <option selected>Garut</option>
                    <option value="Bg">Bandung</option>
                    <option value="Tk">Tasik</option>
                    <option value="Cr">Cianjur</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden space-x-8 sm:flex">
            <div className="mr-5">
              <h1 className="text-gr bg-bu py-1 px-5 font-bold rounded-full text-xs">
                Pilih Box
              </h1>
            </div>
            <div className="mr-5">
              <h1 className="text-gr flex bg-bu py-1 font-bold px-5 rounded-full text-xs">
                Pilih Cabang
              </h1>
            </div>
            <div className="mr-5 hidden space-x-8 sm:flex">
              <h1 className="text-ungu bg-white border-2 border-ungu py-1 px-5 rounded-full text-xs">
                Lanjutkan
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:hidden">
            <div className="mr-5">
              <h1 className="text-gr bg-bu py-1 px-5 font-bold rounded-full text-xs">
                Pilih Box
              </h1>
            </div>
            <div className="mr-5">
              <h1 className="text-gr flex bg-bu py-1 font-bold px-5 rounded-full text-xs">
                Pilih Cabang
              </h1>
            </div>
          </div>
        </div>
      </div>

      {selectedBox == null ? (
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {listBox.map((data: any, index) => (
              <div key={index + 1} className="p-5">
                <div className="h-auto w-full border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg">
                  <div className="h-40 rounded w-full object-cover relative object-center">
                    <Image fill src={data.img} alt="" />
                  </div>
                  <div className="p-5">
                    <h2 className="text-xs text-gray-900 font-bold text-left">
                      {data.title}
                    </h2>
                    <div className="flex text-gray-500 text-xs">
                      <p>{data.info}</p>
                    </div>
                    <div className="w-auto flex flex-col gap-2 mt-1 justify-center">
                      <button className="flex justify-center text-gray-400 bg-white border-2 border-gray-400 py-1 px-5 rounded-full text-xs">
                        Lihat Cetakan
                      </button>
                      <div className="w-auto flex flex-col gap-2 justify-center">
                        <button
                          onClick={() => {
                            setSelectedPindah(selectPindah + 1);
                            setSelectedBox(data);
                          }}
                          className="flex justify-center text-white bg-ungu border-0 py-1 px-8 rounded-full text-xs"
                        >
                          Pilih
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {selectedBox !== null && selectedJumlah == null ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 w-full py-24 mx-auto">
            <div className="mx-auto flex flex-wrap justify-center">
              <div className="hidden space-x-8 sm:flex">
                <div className="relative z-50 -right-36 mt-4 ">
                  <h1 className="rounded-t-lg bg-ungu text-white p-1 rounded-lg">
                  BOX 5 White Circle
                  </h1>
                </div>
              </div>
              <div className="flex mt-3 ml-20 sm:hidden">
                <div className="relative z-50 right-36">
                  <h1 className="rounded-t-lg bg-ungu text-white p-1 rounded-lg">
                  BOX 5 White Circle
                  </h1>
                </div>
              </div>
              <Image width={400} height={400} src="/img/siswalg.png" alt="" />
              <div className="lg:w-1/2 w-full lg:pl-40 lg:py-6">
                <h1 className="text-black flex justify-center w-full text-xl title-font mb-1">
                  Jumlah hookiers yang akan di foto :
                </h1>
                <div className="flex w-full p-5 gap-3 justify-center">
                  <div
                    onClick={() => {
                      if (jumlahOrang > 1) {
                        setJumlahOrang(jumlahOrang - 1);
                      }
                    }}
                  >
                    <div style={{ color: "purple" }}>
                      <AiFillMinusCircle size={40} />
                    </div>
                  </div>
                  <div className="rounded-full bg-ungu p-3">
                    <div className="flex gap-10">
                      <p className="text-white text-sm">{jumlahOrang} Orang</p>
                      <p className="text-white text-sm">
                        IDR {jumlahOrang * 20000}{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setJumlahOrang(jumlahOrang + 1);
                    }}
                  >
                    <div style={{ color: "purple" }}>
                      <AiFillPlusCircle size={40} />
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-merah text-sm">
                    * UMUR 4 tahun kebawah tidak perlu di hitung (tidak dapat
                    cetakan)
                  </p>
                  <p className="text-merah text-sm">
                    ** Jika tetap ingin dapat cetakan, maka anak juga harus
                    bayar
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setSelectedPindah(selectPindah + 1);
                      setSelectJumlah(true);
                    }}
                    className="flex mx-auto mt-5 text-white bg-ungu border-0 py-2 px-8 focus:outline-none hover:bg-ungu rounded-full text-lg"
                  >
                    Lanjutkan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {selectedJumlah !== null && selectedReservasi == false ? (
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <div className="flex p-5 justify-center mt-5">
              <div className="flex flex-col space-y-4 w-full ">
                <div className="justify-center hidden space-x-8 sm:flex">
                  <p className="text-ungu text-xl font-bold">Recent Book =</p>
                  <p className="text-xl font-bold">
                  BOX 5 White Circle - 1 Orang
                  </p>
                </div>
                <div className="flex justify-center mt-3 ml-5 sm:hidden">
                  <p className="text-ungu text-xs font-bold">Recent Book =</p>
                  <p className="text-xs font-bold">
                  BOX 5 White Circle - 1 Orang
                  </p>
                </div>
                <div className="flex justify-between  rounded-lg bg-ungu">
                  <div className="py-3 p-3"></div>
                  <h1 className="text-white flex py-2 text-3xl">September</h1>
                  <div className="py-3 p-3">
                    <svg
                      width="21"
                      height="29"
                      viewBox="0 0 21 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 27L18.5 14.5L2 2"
                        stroke="#F8F7F3"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-2 justify-center">
              <div className=" py-4 p-5 w-auto rounded-lg bg-ungu">
                <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                  {listDays.map((data: any, index) => (
                    <div
                      onClick={() => {
                        setSelectedHari(data.hari);
                      }}
                      key={index + 1}
                      className={`rounded-lg py-2 p-2 flex flex-col first-letter
                      ${
                        selectHari == data.hari
                          ? "bg-kuning text-ungu"
                          : "bg-white text-black"
                      }`}
                    >
                      <div className="flex justify-center">
                        <h1 className="font-bold">{data.no}</h1>
                      </div>
                      <div className="flex justify-center">
                        <p className="">{data.hari}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex p-1 justify-center">
              <div className="flex  justify-between p-5 w-auto  gap-5 rounded-lg bg-ungu">
                <div className="grid grid-cols-4 md:grid-cols-6 gap-5">
                  {listTime.map((data: any, index) => (
                    <div className="" key={index + 1}>
                      <div
                        onClick={() => {
                          setSelectedWaktu(data.waktu);
                        }}
                        className={`rounded-full space-x-8 sm:flex w-20 h-8 text-center 
                      ${
                        selectWaktu == data.waktu
                          ? "bg-kuning text-ungu"
                          : "bg-white text-black "
                      }`}
                      >
                        <h1 className=" flex items-center justify-center w-full  text-base">
                          {data.waktu}
                        </h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex p-2 justify-center">
              <button
                onClick={() => {
                  setSelectedPindah(selectPindah + 1);
                  setSelectedReservasi(true);
                }}
                className="flex justify-center py-3 p-3 font-semibold w-full text-2xl rounded-lg bg-kuning text-ungu"
              >
                Konfirmasi
              </button>
            </div>
            <div className="flex">
              <p className="text-merah flex text-sm">
                * Waktu booking tidak dapat melebihi 7 hari
              </p>
            </div>
            <div className="flex p-2 ltr">
              <div className="py-4 pe-20 w-auto gap-1 rounded-lg text-white bg-ungu">
                <div className="justify-start">
                  <div className="flex p-1 ">
                    <Image width={25} height={25} src="/img/white.jpg" alt="" />
                    <p>: Tersedia</p>
                  </div>
                  <div className="flex p-1 ">
                    <Image
                      width={25}
                      height={25}
                      src="/img/yellow.png"
                      alt=""
                    />
                    <p>: Dipilih</p>
                  </div>
                  <div className="flex p-1 ">
                    <Image width={25} height={25} src="/img/black.png" alt="" />
                    <p>: Tidak dapat dipilih</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {selectedReservasi == true && selectResume == false ? (
        <div>
          <div className="container mx-auto w-full flex px-5 py-10 md:flex-row flex-col items-start">
            <div className="lg:w-auto w-full mb-10">
              <Image width={650} height={900} src="/img/siswa.png" alt="" />
            </div>
            <div className="bg-ungu flex flex-col rounded-lg lg:w-1/2 w-full p-5 mb-10">
              <div className="flex justify-center">
                <h1 className="flex flex-col space-y-1 title-font p-1 text-2xl text-tertiary">
                  Detail Pesanan
                  <span className="inline-block h-1 w-40 rounded bg-tertiary mt-1 mb-4"></span>
                </h1>
              </div>
              <div className="flex gap-1">
                <p className="mb-5 text-[15px] font-bold text-tertiary">
                BOX 5 White Circle
                </p>
                <p className="mb-5 text-[15px] font-bold text-white">- Garut</p>
              </div>
              <div className="gap-1">
                <p className="font-bold text-[15px] text-tertiary">
                  Selasa, 9 September 2023
                </p>
                <p className="font-bold text-[15px] text-white">11:03 WIB</p>
              </div>
              <div className="mt-3">
                <p className="font-bold text-[15px] text-tertiary">
                Selasa, 9 September 2023
                </p>
                <p className="ml-3 text-[15px] text-white">
                  - 5 Menit foto sepuasnya
                </p>
                <p className="ml-3 text-[15px] text-white">
                  - 1 Menit persiapan
                </p>
                <p className="ml-3 text-[15px] text-white">
                  - Free All Soft File
                </p>
                <p className="ml-3 text-[15px] text-white">
                  - Free 1 Cetakan/Orang
                </p>
                <p className="ml-3 text-[15px] text-white">
                  - Cetakan 4R 4R - Ultra Wide
                </p>
              </div>
              <div className="flex w-full gap-4">
                <label className="w-full"> 
                  <input
                    type="kode"
                    name="kode"
                    className="mt-1 px-3 py-2 bg-ungu border-2 text-white border-tertiary placeholder-tertiary w-full rounded-full text-lg"
                    placeholder="Masukkan Kode Promo"
                  />
                </label>
                <button className="flex bg-tertiary border-0 py-3 text-ungu font-semibold px-5 focus:outline-none hover:bg-tertiary text-primary rounded-full text-lg">
                  Claim
                </button>
              </div>
              <div className="mt-5">
                <div className="flex justify-between">
                  <div className="ml-1">
                    <p className="text-white text-[15px]">Harga Box</p>
                  </div>
                  <div></div>
                  <div className="mr-2">
                    <p className="text-white text-[15px]">IDR 20.000</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="ml-1">
                    <p className="text-white text-[15px]">Jumlah Orang</p>
                  </div>
                  <div></div>
                  <div className="mr-2">
                    <p className="text-white text-[15px]">1</p>
                  </div>
                </div>
                <span className=" inline-block h-1 w-full mr-2 rounded bg-white mt-1 mb-1"></span>
              </div>
              <div className="">
                <div className="flex justify-between">
                  <div className="ml-1">
                    <p className="text-tertiary text-[15px]">Diskon</p>
                  </div>
                  <div></div>
                  <div className="mr-2">
                    <p className="text-tertiary text-[15px]">0</p>
                  </div>
                </div>
                <span className=" inline-block h-1 w-full mr-2 rounded bg-white mt-1 mb-1"></span>
                <div className="flex justify-between">
                  <div className="ml-1">
                    <p className="text-white text-[15px]">Total Pembayaran</p>
                  </div>
                  <div></div>
                  <div className="mr-2">
                    <p className="text-white text-[15px]">IDR 20.000</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-6 justify-center">
                <button 
                onClick={() => {
                  setSelectedPindah(selectPindah + 1); 
                }}
                className="flex bg-tertiary text-ungu font-semibold border-0 py-2 px-8 text-[15px] focus:outline-none hover:bg-tertiary text-primary rounded-full text-lg">
                  Lanjutkan Pembayaran
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
