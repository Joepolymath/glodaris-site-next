import Image from "next/image";

import Link from "next/link";

import Navbar from "../Navigation/Navbar";

export default function Header() {
  return (
    <section
      className="py-8 w-full"
      style={{ background: "url(../Assets/banner.jpg)" }}
    >
      <Navbar></Navbar>
      <div className="text-center mt-20">
        <div className="text-sm md:text-xl lg:text-3xl font-semibold mt-4 lg:mt-12 text-white">
          WE BUILD THE FUTURE
        </div>

        <div className="text-5xl md:text-xl lg:text-9xl mt-4 font-semibold  text-white ">
          GLODARIS TECHNOLOGY
        </div>

        <div className="text-center  hidden md:block">
          <div
            className=" flex flex-col md:flex-row mt-12"
            style={{ paddingLeft: "30rem", paddingRight: "30rem" }}
          >
            <div className="ml-12 w-full md:w-2/2 px-3 py-2 text-white bg-red-400 rounded-md text-sm font-extrabold text-gray-900 hover:text-gray-700">
              MESSAGE US
            </div>
            <div className="ml-20 w-full md:w-2/2  px-3 py-2 text-white bg-blue-500 rounded-md text-sm font-extrabold text-gray-900 hover:text-gray-700 text-white bg-blue-500 rounded-md text-sm font-extrabold text-gray-900 hover:text-gray-700">
              MORE DETAILS
            </div>
          </div>
        </div>

        {/* Responsive buttons */}
        <div className="md:px-20 flex flex-col md:flex-row lg:justify-between md:hidden mt-8 px-8">
          <div className="px-3 py-2 text-white  bg-blue-500  text-sm font-extrabold text-gray-900 hover:text-gray-700">
            MESSAGE US
          </div>
          <div className="mt-4 px-3 py-2 text-white  bg-red-400 text-sm font-extrabold text-gray-900 hover:text-gray-700 ">
            MORE DETAILS
          </div>
        </div>
      </div>
    </section>
  );
}
