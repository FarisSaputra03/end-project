"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Login() {
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleLogin() {
    console.log(password, phoneNumber);
  }
  return (
    <section className="bg-gradient-to-b from-ungu to-dary relative h-screen ">
      <div className="p-10 pt-10 hidden space-x-8 sm:flex">
        <Link href={"/"}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0C26.2167 0 28.3417 0.283333 30.375 0.85C32.4083 1.41667 34.325 2.21667 36.125 3.25C37.925 4.28333 39.5417 5.53333 40.975 7C42.4083 8.46667 43.6583 10.0917 44.725 11.875C45.7917 13.6583 46.6 15.5667 47.15 17.6C47.7 19.6333 47.9833 21.7667 48 24C48 26.2167 47.7167 28.3417 47.15 30.375C46.5833 32.4083 45.7833 34.325 44.75 36.125C43.7167 37.925 42.4667 39.5417 41 40.975C39.5333 42.4083 37.9083 43.6583 36.125 44.725C34.3417 45.7917 32.4333 46.6 30.4 47.15C28.3667 47.7 26.2333 47.9833 24 48C21.7833 48 19.6583 47.7167 17.625 47.15C15.5917 46.5833 13.675 45.7833 11.875 44.75C10.075 43.7167 8.45833 42.4667 7.025 41C5.59167 39.5333 4.34167 37.9083 3.275 36.125C2.20833 34.3417 1.4 32.4333 0.85 30.4C0.3 28.3667 0.0166667 26.2333 0 24C0 21.7833 0.283333 19.6583 0.85 17.625C1.41667 15.5917 2.21667 13.675 3.25 11.875C4.28333 10.075 5.53333 8.45833 7 7.025C8.46667 5.59167 10.0917 4.34167 11.875 3.275C13.6583 2.20833 15.5667 1.4 17.6 0.85C19.6333 0.3 21.7667 0.0166667 24 0ZM24 44.8C25.9167 44.8 27.7583 44.55 29.525 44.05C31.2917 43.55 32.9417 42.85 34.475 41.95C36.0083 41.05 37.4167 39.9667 38.7 38.7C39.9833 37.4333 41.0667 36.0333 41.95 34.5C42.8333 32.9667 43.5333 31.3083 44.05 29.525C44.5667 27.7417 44.8167 25.9 44.8 24C44.8 22.0833 44.55 20.2417 44.05 18.475C43.55 16.7083 42.85 15.0583 41.95 13.525C41.05 11.9917 39.9667 10.5833 38.7 9.3C37.4333 8.01667 36.0333 6.93333 34.5 6.05C32.9667 5.16667 31.3083 4.46667 29.525 3.95C27.7417 3.43333 25.9 3.18333 24 3.2C22.0833 3.2 20.2417 3.45 18.475 3.95C16.7083 4.45 15.0583 5.15 13.525 6.05C11.9917 6.95 10.5833 8.03333 9.3 9.3C8.01667 10.5667 6.93333 11.9667 6.05 13.5C5.16667 15.0333 4.46667 16.6917 3.95 18.475C3.43333 20.2583 3.18333 22.1 3.2 24C3.2 25.9167 3.45 27.7583 3.95 29.525C4.45 31.2917 5.15 32.9417 6.05 34.475C6.95 36.0083 8.03333 37.4167 9.3 38.7C10.5667 39.9833 11.9667 41.0667 13.5 41.95C15.0333 42.8333 16.6917 43.5333 18.475 44.05C20.2583 44.5667 22.1 44.8167 24 44.8ZM18.175 22.4H35.2V25.6H18.175L25.125 32.45L22.875 34.75L12.025 24L22.875 13.25L25.125 15.55L18.175 22.4Z"
              fill="#F8F7F3"
            />
          </svg>
        </Link>
      </div>
      <div className="flex justify-center sm:hidden">
        <div className="mt-[50px]">
          <div className="flex justify-center mt-5">
            <Image width={250} height={114} src="/img/logo1.png" alt="" />
          </div>
          <div className="flex justify-center mt-[50px] ">
            <h1 className="text-[32px] title-font text-white">
              Selamat Datang
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-[32px] font-bold title-font text-white">
              Hokkiers
            </h1>
          </div>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="hidden space-x-8 sm:flex">
          <div className="flex justify-center gap-5 text-center w-full mb-12">
            <div className="mt-2">
              <Image width={500} height={81} src="/img/logo.png" alt="" />
            </div>
            <div>
              <svg
                width="4"
                height="60"
                viewBox="0 0 4 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 0V100" stroke="#FF9C99" stroke-width="3" />
              </svg>
            </div>
            <h1 className="sm:text-5xl text-3xl font-normal title-font mt-2 text-white">
              Login
            </h1>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-2  mx-auto">
          <div className="flex flex-col pt-5 space-y-1">
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600"></label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600"></label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-100 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <div className="flex mt-3 ml-20 sm:hidden">
                <h1 className="text-ning">Lupa Password?</h1>
              </div>
            </div>
            <div className="flex justify-center">
              <h1 className="text-white">Belum memiliki akun?</h1>
              <Link href={"/register"}>
                <button className="text-ning">Register</button>
              </Link>
            </div>
            <div className="p-2 w-full">
              <button
              onClick={handleLogin}
              className="flex mx-auto text-white bg-ungu border-0 py-2 px-8 focus:outline-none hover:bg-purple-900 rounded-lg text-lg">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
