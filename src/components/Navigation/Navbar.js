import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons//ai";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="bg-white shadow-lg container mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-8">
        <div className="flex gap-4 ">
          <div className="flex">
            <Link href={"/"}>
              <div className="text-2xl md:text-base lg:text-4xl text-blue-500 font-extrabold">
                GLODARIS
              </div>
            </Link>

            <div className="hidden sm:ml-6 sm:flex hidden md:flex">
              <Link href="/">
                <div className="px-3 py-2 font-light text-gray-400 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                  Home
                </div>
              </Link>
              <Link href="Aboutpage">
                <div className="ml-4 px-3 text-white py-2 bg-red-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                  About Us
                </div>
              </Link>
              <Link href="/services">
                <div className="ml-4 px-3 py-2 font-light text-gray-400 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                  Our services
                </div>
              </Link>

              <Link href="/manufacturing">
                <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                  Manufacturing
                </div>
              </Link>
              <Link href="/data">
                <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                  Data Collection
                </div>
              </Link>
              <Link href="/publications">
                <div className="ml-4 px-3 py-2 bg-red-400 text-white rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                  Publications
                </div>
              </Link>
              <Link href="/Training">
                <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                  Training
                </div>
              </Link>
              <Link href="/events">
                <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                  Events
                </div>
              </Link>
              <Link href="/forum">
                <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                  Forum
                </div>
              </Link>

              <Link href="/contact">
                <div className="ml-4 px-3 py-2 text-white bg-blue-500 rounded-md text-sm font-extrabold text-gray-900 hover:text-gray-700">
                  Contact us
                </div>
              </Link>
            </div>

            {Toggle ? (
              <AiOutlineClose
                onClick={() => setToggle(!Toggle)}
                size={30}
                className="md:hidden text-black ml-52"
              />
            ) : (
              <BiMenuAltLeft
                onClick={() => setToggle(!Toggle)}
                size={30}
                className="md:hidden text-black  ml-52"
              />
            )}
          </div>

          {/* Responsive Navbar menu */}

          <div
            className={`duration-300 md:hidden bg-white flex flex-col w-[70%] h-screen fixed  text-white top-[120px] ${
              Toggle ? "left-[0]" : "left-[-100%]"
            }`}
          >
            <Link href="/">
              <div className=" ml-4 px-3 py-2 font-light text-gray-400 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="ml-4 px-3 text-white py-2 bg-red-400  text-sm font-medium text-gray-900 hover:text-gray-700">
                About Us
              </div>
            </Link>
            <Link href="/services">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Our services
              </div>
            </Link>

            <Link href="/manufacturing">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Manufacturing
              </div>
            </Link>
            <Link href="/data">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Data Collection
              </div>
            </Link>
            <Link href="/publications">
              <div className="ml-4 px-3 py-2 bg-red-400 text-white  text-sm font-medium text-gray-900 hover:text-gray-700">
                Publications
              </div>
            </Link>
            <Link href="/Training">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Training
              </div>
            </Link>
            <Link href="/events">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Events
              </div>
            </Link>
            <Link href="/forum">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Forum
              </div>
            </Link>

            <Link href="/contact">
              <div className="ml-4 px-3 py-2 text-white bg-blue-500  text-sm font-extrabold text-gray-900 hover:text-gray-700">
                Contact us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
