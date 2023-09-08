import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-ungu body-font flex justify-between w-auto">
      <div className="flex flex-col space-y-4 ml-5">
        <div className="mt-2">
          <Image width={278} height={32} src="/img/logo.png" alt="" />
        </div> 
        <div className="block md:hidden">
          <div className="flex gap-10 py-1">
            <p className="text-white  text-sm ">Keluhan</p>
            <p className="text-white  text-sm ">Saran</p>
          </div>
          <div className="flex gap-6 py-1">
            <p className="text-white  text-sm ">Kerjasama</p>
            <p className="text-white text-sm ">Privacy & Policy</p>
          </div>
        </div>
        <div className="flex">
          <div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7 3H24.3C29.1 3 33 6.9 33 11.7V24.3C33 26.6074 32.0834 28.8203 30.4518 30.4518C28.8203 32.0834 26.6074 33 24.3 33H11.7C6.9 33 3 29.1 3 24.3V11.7C3 9.39262 3.9166 7.17974 5.54817 5.54817C7.17974 3.9166 9.39262 3 11.7 3ZM11.4 6C9.96783 6 8.59432 6.56893 7.58162 7.58162C6.56893 8.59432 6 9.96783 6 11.4V24.6C6 27.585 8.415 30 11.4 30H24.6C26.0322 30 27.4057 29.4311 28.4184 28.4184C29.4311 27.4057 30 26.0322 30 24.6V11.4C30 8.415 27.585 6 24.6 6H11.4ZM25.875 8.25C26.3723 8.25 26.8492 8.44754 27.2008 8.79917C27.5525 9.15081 27.75 9.62772 27.75 10.125C27.75 10.6223 27.5525 11.0992 27.2008 11.4508C26.8492 11.8025 26.3723 12 25.875 12C25.3777 12 24.9008 11.8025 24.5492 11.4508C24.1975 11.0992 24 10.6223 24 10.125C24 9.62772 24.1975 9.15081 24.5492 8.79917C24.9008 8.44754 25.3777 8.25 25.875 8.25ZM18 10.5C19.9891 10.5 21.8968 11.2902 23.3033 12.6967C24.7098 14.1032 25.5 16.0109 25.5 18C25.5 19.9891 24.7098 21.8968 23.3033 23.3033C21.8968 24.7098 19.9891 25.5 18 25.5C16.0109 25.5 14.1032 24.7098 12.6967 23.3033C11.2902 21.8968 10.5 19.9891 10.5 18C10.5 16.0109 11.2902 14.1032 12.6967 12.6967C14.1032 11.2902 16.0109 10.5 18 10.5ZM18 13.5C16.8065 13.5 15.6619 13.9741 14.818 14.818C13.9741 15.6619 13.5 16.8065 13.5 18C13.5 19.1935 13.9741 20.3381 14.818 21.182C15.6619 22.0259 16.8065 22.5 18 22.5C19.1935 22.5 20.3381 22.0259 21.182 21.182C22.0259 20.3381 22.5 19.1935 22.5 18C22.5 16.8065 22.0259 15.6619 21.182 14.818C20.3381 13.9741 19.1935 13.5 18 13.5Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9 8.73C23.8746 7.55943 23.3096 6.05615 23.31 4.5H18.675V23.1C18.6392 24.1065 18.2143 25.0599 17.4896 25.7594C16.765 26.4589 15.7972 26.8499 14.79 26.85C12.66 26.85 10.89 25.11 10.89 22.95C10.89 20.37 13.38 18.435 15.945 19.23V14.49C10.77 13.8 6.24 17.82 6.24 22.95C6.24 27.945 10.38 31.5 14.775 31.5C19.485 31.5 23.31 27.675 23.31 22.95V13.515C25.1895 14.8648 27.446 15.589 29.76 15.585V10.95C29.76 10.95 26.94 11.085 24.9 8.73Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-start">
          <p className="text-white">© 2023 Fotohokkie</p>
        </div>
      </div>
      <div className="hidden md:block mt-6 ml-11 mr-10">
        <div className="grid grid-cols-2 gap-4 place-content-end">
          <div>
            <p className="text-white text-sm px-8 ">Keluhan</p>
          </div>
          <div>
            <p className="text-white text-sm px-8 ">Saran</p>
          </div>
          <div>
            <p className="text-white text-sm px-8 ">Kerjasama</p>
          </div>
          <div>
            <p className="text-white text-sm px-8">Privacy & Policy</p>
          </div>
        </div>
        </div>
    </div>
  );
}
