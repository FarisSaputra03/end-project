"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import Image from "next/image";

import "../styles/navbar.css";

export default function Navbar() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (window != undefined) {
      window.addEventListener("scroll", changeColor);
    }
  });

  return (
    <header className={`w-full fixed z-10 ${color ? "bg-ungu" : ""}`}>
      <div className="container mx-auto flex  p-5 flex-col md:flex-row items-center">
        <nav className="container flex justify-between px-4 mx-auto">
          <div className="flex justify-start">
            <Image width={347.66} height={40} src="/img/logo.png" alt="" />
          </div>
          <div className="hidden space-x-8 sm:flex">
            <Link href={"/potrait"}>
              <button>
                <p className="mr-5 mt-2 text-white">Booking</p>
              </button>
            </Link>
            <a className="mr-5 mt-2 text-white">Location</a>
            <Link href={"/request"}>
              <button>
                <p className="mr-5 mt-2 text-white">Request</p>
              </button>
            </Link>
          </div>
          <div className="flex mt-3 ml-20 sm:hidden">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.666656 0.5C0.666656 0.223858 0.890514 0 1.16666 0H11.1667C11.4428 0 11.6667 0.223858 11.6667 0.5C11.6667 0.776142 11.4428 1 11.1667 1H1.16666C0.890514 1 0.666656 0.776142 0.666656 0.5ZM5.66666 6C5.66666 5.72386 5.89051 5.5 6.16666 5.5L11.1667 5.5C11.4428 5.5 11.6667 5.72386 11.6667 6C11.6667 6.27614 11.4428 6.5 11.1667 6.5L6.16666 6.5C5.89051 6.5 5.66666 6.27614 5.66666 6ZM1.16666 11C0.890514 11 0.666656 11.2239 0.666656 11.5C0.666656 11.7761 0.890514 12 1.16666 12H11.1667C11.4428 12 11.6667 11.7761 11.6667 11.5C11.6667 11.2239 11.4428 11 11.1667 11H1.16666Z"
                fill="white"
              />
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}
