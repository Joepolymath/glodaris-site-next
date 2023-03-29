import Gallery from "@/components/Gallery/Gallery";
import Link from "next/link";
import { HiLocationMarker } from "react-icons/hi";
import { ImFacebook } from "react-icons/im";
import { BsFillEnvelopeFill, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <section className="w-full py-12 bg-red-400">
      <div className="px-8">
        <div className="flex flex-col md:flex-row mt-12 ml-4">
          <div className="w-full md:w-2/2 lg:ml-12">
            <div className="text-xl md:text-lg lg:text-3xl font-bold tracking-widest text-black">
              QUICK LINKS
            </div>

            <div className="lg:mt-8 text-white text-sm md:text-lg lg:text-xl">
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>

                <li>
                  <Link href={"about"}>About us</Link>
                </li>

                <li>
                  <Link href={"visual"}>Virtual Certification</Link>
                </li>

                <li>
                  <Link href={"Gallery"}>Gallery</Link>
                </li>

                <li>
                  <Link href={"contact"}>Contact us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/2 lg:ml-12">
            <div className="text-xl md:text-lg lg:text-3xl font-bold tracking-widest text-black">
              GET IN TOUCH
            </div>

            <div className="lg:mt-8">
              <HiLocationMarker className="text-blue-600 text-xl" />
              <div className="mt-2 text-white font-light text-sm md:text-lg lg:text-xl ">
                Suite 101,1st Floor Plot 559c, NCWS Building, Beside Shagalinku
                By FCDA, Area 11,Garki Abuja FCT
              </div>
            </div>

            <div className="mt-4">
              <BsFillEnvelopeFill className="text-blue-600 text-xl" />
              <div className="mt-2 text-white font-light text-sm md:text-lg lg:text-xl ">
                <Link href={"info@gloaris.com"}>info@gloaris.com</Link>
              </div>
            </div>

            <div className="text-xl md:text-lg lg:text-xl font-normal mt-4 tracking-widest text-black">
              OPEN HOURS
            </div>

            <div className="text-white font-light text-sm md:text-lg lg:text-xl">
              MONDAY - FRIDAY : 9:00am-5:00pm
            </div>

            <div className="flex lg:mt-4">
              <div className="text-xl md:text-lg lg:text-xl font-normal mt-4 tracking-widest text-black">
                SOCIALS -
              </div>
              <Link href={"fb"}>
                {" "}
                <ImFacebook className="ml-8 mt-4 text-xl text-blue-900" />
              </Link>

              <Link href={"tw"}>
                {" "}
                <BsTwitter className="ml-8 mt-4 text-xl text-blue-400" />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-2/2 lg:ml-12">
            <div className="text-xl md:text-lg lg:text-3xl font-bold tracking-widest text-white">
              GALLERY
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="text-black font-bold text-sm md:text-lg lg:text-xl">
            GLODARIS © 2023. All Right Reserved
          </div>
        </div>
      </div>
    </section>
  );
}
