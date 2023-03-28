import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
// import required modules
import { FreeMode, Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="w-full py-24 bg-blue-500">
      <div className="">
        <div className="text-center">
          <div className="text-2xl md:text-lg lg:text-6xl font-normal text-white">
            OUR SERVICES
          </div>
          <div className="text-xl md:text-lg lg:text-xl text-red-600 mt-2">
            Feel free to view our services
          </div>
        </div>

        <div className="text-center mt-16 hidden md:block">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            
            autoplay={{
              delay: 2000,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>{Slide()} 
             
            </SwiperSlide>
            <SwiperSlide>{Slide2()} </SwiperSlide>
            <SwiperSlide>{Slide3()} </SwiperSlide>
            <SwiperSlide>{Slide4()} </SwiperSlide>
            <SwiperSlide>{Slide5()} </SwiperSlide>
          </Swiper>
        </div>

        {/* Responsive slider */}
        <div className="text-center mt-16 md:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            autoplay={{
              delay: 2000,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>{Slide()} 
            <div className="text-xs text-white mt-4 font-bold">WEB APP DEVELOPER</div>
            </SwiperSlide>
            <SwiperSlide>{Slide2()}
              {/* <div className="text-xs text-white mt-4 font-bold">SOFTWARE DEVELOPER</div> */}
              
             </SwiperSlide>
            <SwiperSlide>{Slide3()}
            {/* <div className="text-xs text-white mt-4 font-bold">CUSTOM DEVELOPER</div> */}
             </SwiperSlide>
            <SwiperSlide>{Slide4()} 
               {/* <div className="text-xs text-white mt-4 font-bold">DATA SCIENCE AND BIG DATA ANALYTICS</div> */}
            </SwiperSlide>
            <SwiperSlide>{Slide5()} 
            {/* <div className="text-xs text-white mt-4 font-bold">CYBER SECURITY</div> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="relative ">
      <Image
        src="/Assets/webapp.png"
        alt=""
        width={800}
        height={600}
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold text-black mt-12">
          WEB DEVELOPMENT
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-red-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border bg-red-400 rounded">
            <Link href={"lmwebdev"}>Learn more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="relative">
      <Image
        src="/Assets/webapp.png"
        alt=""
        width={800}
        height={600}
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold text-black mt-12">
          SOFTWARE DEVELOPMENT
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-red-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border bg-red-400 rounded">
            <Link href={"lmsoftwaredev"}>Learn more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="relative">
      <Image
        src="/Assets/webapp.png"
        alt=""
        width={800}
        height={600}
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold text-black mt-12">
          CUSTOM SOFTWARE DEVELOPMENT
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-red-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border bg-red-400 rounded">
            <Link href={"lmcustomdev"}>Learn more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function Slide4() {
  return (
    <div className="relative">
      <Image
        src="/Assets/dataSci.jpg"
        alt=""
        width={800}
        height={600}
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold text-black mt-12">
          DATA SCIENCE AND BIG DATA ANALYTICS
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-red-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border bg-red-400 rounded">
            <Link href={"lmds"}>Learn more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

function Slide5() {
  return (
    <div className="relative">
      <Image
        src="/Assets/cybersecurity.jpg"
        alt=""
        width={800}
        height={600}
        objectFit="cover"
      />
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold text-black mt-12">
          CYBER SECURITY
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-red-400 hover:bg-blue-500 text-white font-bold py-2 px-4 border bg-red-400 rounded">
            <Link href={"lm"}>Learn more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
