import Image from "next/image";
import classnames from "classnames";
import Link from "next/link";

import ToggleButton from "../ToggleButton";
import Navbar from "../Navigation/Navbar";

export default function Header() {
  return (
    <div>
      <section
        className=" w-full h-screen"
        style={{ background: "url(../Assets/banner.jpg)" }}
      >
        <Navbar></Navbar>
        <div className="mt-2">
          <ToggleButton></ToggleButton>
        </div>

        <div className="text-center mt-44 lg:mt-20">
          <div className="text-sm md:text-xl lg:text-3xl font-semibold mt-4 font-serif lg:mt-12 text-white">
            WE BUILD THE FUTURE
          </div>

          <div className="text-4xl md:text-xl lg:text-9xl mt-4 font-semibold font-serif text-white  ">
            GLODARIS TECHNOLOGY
          </div>

          <div className="text-center font-mono  hidden md:block">
            <div
              className=" flex flex-col md:flex-row mt-20"
              style={{ paddingLeft: "30rem", paddingRight: "30rem" }}
            >
              <div className="ml-12 w-full md:w-2/2 px-3 py-2 text-white bg-gray-500 rounded-md text-sm font-extrabold text-gray-900 hover:text-gray-700">
                MESSAGE US
              </div>
              <div className="ml-20 w-full md:w-2/2  px-3 py-2 text-white bg-gray-500 rounded-md text-sm font-extrabold text-gray-900 hover:text-gray-700 text-white bg-blue-500 rounded-md text-sm font-extrabold text-gray-900 hover:text-gray-700">
                MORE DETAILS
              </div>
            </div>
          </div>

          {/* Responsive buttons */}
          <div className="md:px-20 flex flex-col font-mono md:flex-row lg:justify-between md:hidden mt-12 px-8">
            <div className="px-3 py-2 text-white  bg-gray-500  text-sm font-extrabold text-gray-900 hover:text-gray-700">
              MESSAGE US
            </div>
            <div className="mt-4 px-3 py-2 text-white  bg-gray-500 text-sm font-extrabold text-gray-900 hover:text-gray-700 ">
              MORE DETAILS
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
