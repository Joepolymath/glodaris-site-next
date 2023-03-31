import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillPeopleFill, BsTrophyFill } from "react-icons/bs";
import { RiCupFill } from "react-icons/ri";

export default function Pcca() {
    return(
        <section className="w-full py-4 bg-yellow-600">
              <div className="flex flex-wrap ml-20 ">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 ">
            <div className="p-4">
              <AiOutlineFundProjectionScreen className="text-7xl hover:text-gray-500 text-white" />
              <div className="ml-2">
                <div className="text-sm font-mono md:text-lg lg:text-lg text-black font-bold">
                  Projects
                </div>
                <div className="text-sm md:text-lg lg:text-lg text-black font-bold font-mono">
                  41
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className=" p-4">
              <BsFillPeopleFill className="text-7xl hover:text-gray-500 text-white" />
              <div className="ml-2">
                <div className="text-sm md:text-lg lg:text-lg text-black font-bold font-mono">
                  Customers
                </div>
                <div className="text-sm md:text-lg lg:text-lg text-black font-bold font-mono">
                  256
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className=" p-4">
              <RiCupFill className="text-7xl hover:text-gray-500 text-white" />
              <div className="ml-2">
                <div className="text-sm md:text-lg lg:text-lg text-black font-bold font-mono">
                  Contracts
                </div>
                <div className="text-sm md:text-lg lg:text-lg text-black font-bold font-mono">
                  121
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className=" p-4">
              <BsTrophyFill className="text-7xl hover:text-gray-500 text-white" />
              <div className="ml-2">
                <div className="text-sm md:text-lg lg:text-lg text-black font-bold font-mono">
                  Awards
                </div>
                <div className="text-sm md:text-lg lg:text-lg text-black font-bold font-mono">
                  7
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}