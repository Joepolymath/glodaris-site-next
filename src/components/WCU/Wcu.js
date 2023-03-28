import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillPeopleFill, BsTrophyFill } from "react-icons/bs";
import { RiCupFill } from "react-icons/ri";
import { GiRoyalLove } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";
export default function Wcu() {
  return (
    <section className="w-full py-12 bg-blue-500">
      <div className="">
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

        <div className="text-center mt-16">
          <div className="text-2xl md:text-lg lg:text-6xl font-normal text-white">
            WHY CHOOSE US?
          </div>
          <div className="text-xl md:text-lg lg:text-xl text-red-600 mt-2">
            Experience our tremedous offers
          </div>

          <div className="flex flex-wrap lg:gap-28 text-center mt-20">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 lg:ml-20">
              <div className="bg-red-600 rounded-lg shadow-lg py-12 pl-4">
                <GiRoyalLove className="text-4xl text-red-200" />
                <div className="mt-4">
                  <div className="text-xl text-white font-bold">
                    WE CARE ABOUT YOU
                  </div>
                  <div className="text-base font-light text-white mt-4 px-8">
                    We are a group of professional specialists, all situated
                    under one roof. The multi-disciplinary services we render
                    ensure innovation, productivity, success and a happier you;
                    we manage your entire portfolio and deliver business
                    solutions at your feet. Our market ranges from yourself as
                    an individual to your emerging business to multi-nationals
                    as well as aerospace, consumer products, Service providers,
                    manufacturing, medical, biotech, healthcare and industrial
                    products industries, public sector organisations. GLODARIS
                    innovation is our Habit.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">
              <div className="bg-red-600 py-12 rounded-lg shadow-lg">
                <BsFillPeopleFill className="text-5xl text-red-200 pl-4" />
                <div className="mt-4">
                  <div className="text-xl text-white font-bold">
                    WE ARE EXPERTS IN DATA COLLECTION, MANAGEMENT AND ANALYSIS
                  </div>

                  <div className="text-base font-light text-white mt-4 px-8">
                    The consultant training at GLODARIS is widely recognised as
                    the industry's best. No matter what your organization
                    background, we want you to be extremely successful, so we
                    support your organization with formal classroom training and
                    on-the-job coaching from experienced colleagues. We offer
                    our clients Lean Manufacturing training, Lean Healthcare
                    training, Lean Six Sigma training, Lean Leadership training,
                    certification programs and GIS training that take place in
                    Abuja, Nigeria.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">
              <div className="bg-red-600 py-12 rounded-lg shadow-lg">
                <ImHeadphones className="text-5xl text-red-200 pl-4" />

                <div className="mt-4">
                  <div className="text-xl text-white font-bold">
                    WE ALWAYS SUPPORT YOU
                  </div>

                  <div className="text-base font-light text-white mt-4 px-8">
                    At times, your organization may need a helping hand. Maybe
                    you want to start down the Lean path, but you don’t know
                    how. Maybe your process improvement team is overwhelmed and
                    needs some extra support. Maybe you need someone from the
                    outside to give you a fresh, unbiased perspective. With
                    GLODARIS’s Lean Coaching & Support, you can have the help
                    you need, when you need it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
