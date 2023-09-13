import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Tampilan() {
  return (
    <div>
      <div className="p-8 bg-ungu"></div>
      <div className="flex flex-col space-y-4">
        <div className=" h-auto">
          <Image width={1440} height={666} src="/img/awalan.png" alt="" />
        </div>
        <div className="fixed bottom-5 z-10 right-14 drop-shadow-2xl left-14">
          <Link href={"/login"}>
            <button className="flex mx-auto drop-shadow-2xl shadow-indigo-500/40 text-white bg-ungu border-0 italic py-1 px-5 focus:outline-none rounded-full text-lg">
              Booking Sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
