import Link from "next/link";
import Image from "next/image";

export default function Aboutus() {
  return (
    <section className="w-full py-24">
      <div className="ml-12 hidden md:block">
        <div className="text-center font-serif">
          <div className="text-xl md:text-lg lg:text-6xl  font-normal">
            ABOUT US
          </div>
        </div>
        <div className="md:px-20 flex flex-col md:flex-row lg:justify-between mt-12">
          <div className=" w-full md:w-2/2">
            <div className="">
              <Image
                src={"/Assets/about.jpg"}
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className=" w-full md:w-2/2">
            <div className="text-xl md:text-lg font-sans lg:text-xl font-bold mt-8">
              Welcome to Glodaris
            </div>

            <div className="text-sm font-mono md:text-sm lg:text-base font-light mt-8 leading-6 ">
              GLODARIS is a Global independent consultancy firm focusing on,
              Lean Manufacturing System, Lean Six sigma Services, Data and
              Information Management, Data collection, Bigdata, Geographical
              information System (GIS), Research and Innovation (R&I), Market
              Research, Consultancy and Training. We serve the private-sector,
              the public sector, the world’s top companies, countless new
              ventures, and governments and Non-governmental organizations
              (NGO).
            </div>

            <div className="mt-8">
              <button class="bg-gray-500 hover:bg-yellow-600 font-mono text-white font-bold py-2 px-4 border bg-gray-500 rounded">
                <Link href={"Aboutpage"}>Learn more</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive About section */}
      <div className="md:hidden ">
        <div className="text-center" style={{ marginTop: "-2rem" }}>
          <div className="text-2xl font-serif font-normal">ABOUT US</div>
        </div>

        <div className="md:px-20 flex flex-col md:flex-row lg:justify-between mt-8">
          <div className=" w-full md:w-2/2">
            <div className=" w-full md:w-2/2">
              <div className="ml-4">
                <Image
                  src={"/Assets/about.jpg"}
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className=" w-full md:w-2/2">
            <div className="text-xl font-sans md:text-lg lg:text-xl font-bold mt-8 ml-4">
              Welcome to Glodaris
            </div>

            <div className="text-sm font-mono  font-light  mt-4 ml-4 tracking-wider">
              GLODARIS is a Global independent
              <br />
              consultancy firm focusing on,
              <br />
              Lean Manufacturing System, Lean
              <br />
              Six sigma Services, Data and
              <br />
              Information Management, Data
              <br />
              collection, Bigdata, Geographical
              <br />
              information System (GIS), Research
              <br />
              and Innovation (R&I), Market
              <br />
              Research, Consultancy and Training.
              <br />
              We serve the private-sector,
              <br />
              the public sector, the world’s top
              <br />
              companies, countless new ventures,
              <br />
              and governments and Non-governmental organizations (NGO).
            </div>

            <div className="mt-8 ml-4">
              <button class="bg-gray-500 hover:bg-yellow-600 font-mono text-white font-bold py-2 px-4 border bg-gray-500 rounded text-sm">
                <Link href={"Aboutpage"}>Learn more</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
