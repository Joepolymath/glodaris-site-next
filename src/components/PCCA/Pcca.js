import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillPeopleFill, BsTrophyFill } from "react-icons/bs";
import { RiCupFill } from "react-icons/ri";

export default function Pcca() {
    return(
        <section className="w-full py-12 bg-blue-500">
              <div className="flex flex-wrap ml-20 ">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 ">
            <div className="p-4">
              <AiOutlineFundProjectionScreen className="text-9xl text-red-400" />
              <div className="ml-8">
                <div className="text-sm md:text-lg lg:text-lg text-white font-bold">
                  Projects
                </div>
                <div className="text-sm md:text-lg lg:text-lg text-white font-bold">
                  41
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className=" p-4">
              <BsFillPeopleFill className="text-9xl text-red-400" />
              <div className="ml-8">
                <div className="text-sm md:text-lg lg:text-lg text-white font-bold">
                  Customers
                </div>
                <div className="text-sm md:text-lg lg:text-lg text-white font-bold">
                  256
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className=" p-4">
              <RiCupFill className="text-9xl text-red-400" />
              <div className="ml-8">
                <div className="text-sm md:text-lg lg:text-lg text-white font-bold">
                  Contracts
                </div>
                <div className="text-sm md:text-lg lg:text-lg text-white font-bold">
                  121
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <div className=" p-4">
              <BsTrophyFill className="text-9xl text-red-400" />
              <div className="ml-8">
                <div className="text-sm md:text-lg lg:text-lg text-white font-bold">
                  Awards
                </div>
                <div className="text-sm md:text-lg lg:text-lg text-white font-bold">
                  7
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}