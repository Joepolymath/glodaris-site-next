import Link from "next/link";
import Navbar from "@/components/Navigation/Navbar";
import Image from "next/image";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Aboutpage() {
  return (
    <div>
      <section className="bg-yellow-600 w-full h-60 lg:h-96">
        <Navbar></Navbar>

        <div className="lg:mt-32  mt-12 font-serif text-center">
          <div className="text-5xl md:text-xl text-white lg:text-9xl  font-extrabold">
            ABOUT US
          </div>

          <div className=" text-sm md:text-xl lg:text-2xl font-light">
            WELCOME TO GLODARIS
          </div>
        </div>
      </section>
      <div className="bg-white w-full py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold font-mono text-gray-800 mb-4">
                What we do?
              </h2>
              <p className="text-gray-700 text-sm font-mono lg:text-lg  mb-6 font-light tracking-wide">
                GLODARIS is a Global independent consultancy firm focusing on,
                Lean Manufacturing System, Lean Six sigma Services, Data and
                Information Management, Data collection, Bigdata, Geographical
                information System (GIS), Research and Innovation (R&I), Market
                Research, Consultancy and Training. We serve the private-sector,
                the public sector, the world’s top companies, countless new
                ventures, and governments and Non-governmental organizations
                (NGO).
              </p>
              <p className="text-gray-700 text-sm font-mono lg:text-lg font-light tracking-wide">
                Our goal is to provide a service that leads to a sustainable
                policy impact of our clients Government Relation activities and
                to a high Return on Investment on publicly funded research and
                innovation projects. We are backed with a genuine experience
                which assists us to offer optimum quality service to the clients
                as per their exact requirements.
              </p>

              <p className="text-gray-700 mt-8 text-sm font-mono lg:text-lg  mb-6 font-light tracking-wide">
                Being a quality centric organization, our quality experts carry
                out a variety of quality procedures during business process and
                give assurance that only high-quality services are delivered to
                the clients. Our quality experts suspiciously inspect the entire
                product range to maintain high quality standards. We follow
                ethical trade policies and make translucent business dealings
                with the patrons.
              </p>

              <p className="text-gray-700 text-sm font-mono lg:text-lg  mb-6 font-light tracking-wide ">
                Under the competent guidance of Jamiu Yusuf Senior Director, we
                have been able to carry out our business process in a proper
                manner. Owing to his deep international industrial knowledge and
                experience. He has worked in Europe and America with some of the
                well prestigious industrial collaborators from manufacturing,
                Education, aerospace, civil, construction and IT such as De
                Montfort University, TATA Steel, Rolls Royce, Perkins Engines
                Ltd, UNIPART and Caterpillar as a Research fellow making us to
                earned immense reputation for ourselves.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="w-80 h-80 relative lg:mt-72">
                <Image
                  src="/Assets/about.jpg"
                  alt="About Us Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center hidden md:flex">
          <div
            className="border-r-2 border-gray-500 h-96 ml-72 font-extrabold"
            style={{ marginTop: "-75rem", height: "75rem" }}
          ></div>
        </div>
      </div>

      <div className="text-center py-12 bg-yellow-600 font-serif px-8">
        <div className=" flex flex-col md:flex-row mt-12">
          <div className="w-full md:w-2/2 lg:ml-12">
            <div className="text-base md:text-lg lg:text-3xl font-bold tracking-wider text-black">
              UPCOMING LEAN TRAINING & CERTIFICATION PROGRAMS!!!
            </div>
            <div className="text-sm md:text-lg lg:text-lg mt-8 font-normal">
              Lean training & certification programs build your confidence and
              launch you to the top most hierachy of any organization
            </div>
          </div>

          <div className="w-full md:w-2/2 mt-12 font-mono lg:ml-8">
            <button class="bg-gray-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 border bg-gray-500 rounded">
              <Link href={"readmore"}>Learn more</Link>
            </button>
          </div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
