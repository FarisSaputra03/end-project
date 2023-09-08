import React from "react";
import Image from "next/image";
export default function Map() {
  return (
    <section className="text-gray-60 body-font">
      <div>
        <div className=" mx-auto flex flex-wrap">
          <div className="flex w-full mb-10 flex-col items-center text-center">
            <h1 className="text-2xl font-bold title-font text-black">
              Temukan Kami di Kotamu
            </h1>
            <div className="mt-5">
              <Image width={1338} height={677} src="/img/map.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
