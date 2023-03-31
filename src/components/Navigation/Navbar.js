import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons//ai";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="bg-white shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href={"/"}>
              <div className="text-2xl md:text-base lg:text-4xl text-gray-700 font-extrabold">
                GLODARIS
              </div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
               
                <Link href="/Aboutpage">
                  <div className="text-white py-2 bg-yellow-600 rounded-md hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                    About us
                  </div>
                </Link>
                <Link href="/Services">
                  <div className="text-gray-900  hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                    Our Services
                  </div>
                </Link>
                <Link href="ItServices">
                  <div className="text-gray-900 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                    IT Services
                  </div>
                </Link>
                <Link href="/Manufacturingpage">
                  <div className="text-gray-900  hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                    Manufacturing
                  </div>
                </Link>
                <Link href="/DcPage">
                  <div className="text-gray-900  hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                    Data collection
                  </div>
                </Link>
                <Link href="/Publicationpage">
                  <div className="text-white py-2 bg-yellow-600 rounded-md hover:text-black px-3 py-2 rounded-md text-sm font-medium">
                    Publications
                  </div>
                </Link>
                <Link href="/Trainingpage">
                  <div className="text-gray-900  hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                    Training
                  </div>
                </Link>
                <Link href="/Forumpage">
                  <div className="text-gray-900  hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium">
                    Forum
                  </div>
                </Link>
                <Link href="/Contactpage">
                  <div className="text-black py-2 bg-gray-500 rounded-md hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Contact us
                  </div>
                </Link>
              </div>
            </div>

            {Toggle ? (
              <AiOutlineClose
                onClick={() => setToggle(!Toggle)}
                size={30}
                className="md:hidden text-black ml-48"
              />
            ) : (
              <BiMenuAltLeft
                onClick={() => setToggle(!Toggle)}
                size={30}
                className="md:hidden text-black  ml-48"
              />
            )}
          </div>

          {/* Responsive Navbar menu */}

          <div
            className={`duration-300 md:hidden bg-white flex flex-col w-[70%] h-screen fixed  text-white top-[50px] ${
              Toggle ? "left-[0]" : "left-[-100%]"
            }`}
          >
           
            <Link href="Aboutpage">
              <div className="ml-4 px-3 text-white py-2 bg-yellow-600  text-sm font-medium text-gray-900 hover:text-gray-700">
                About Us
              </div>
            </Link>
            <Link href="/Services">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Our services
              </div>
            </Link>
            <Link href="ItServices">
              <div className=" ml-4 px-3 py-2 font-light text-gray-400 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                IT Services
              </div>
            </Link>
            <Link href="/Manufacturingpage">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Manufacturing
              </div>
            </Link>
            <Link href="/data">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Data Collection
              </div>
            </Link>
            <Link href="/Publicationpage">
              <div className="ml-4 px-3 py-2 bg-yellow-600 text-white  text-sm font-medium text-gray-900 hover:text-gray-700">
                Publications
              </div>
            </Link>
            <Link href="/Trainingpage">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Training
              </div>
            </Link>

            <Link href="/Forumpage">
              <div className="ml-4 px-3 py-2 font-light text-gray-400 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700">
                Forum
              </div>
            </Link>

            <Link href="/ContactPage">
              <div className="ml-4 px-3 py-2 text-white bg-gray-500  text-sm font-extrabold text-gray-900 hover:text-gray-700">
                Contact us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
