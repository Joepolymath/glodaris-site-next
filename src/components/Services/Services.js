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
    <section className="w-full py-24 ">
      <div className="">
        <div className="text-center">
          <div className="text-2xl md:text-lg lg:text-6xl font-serif font-normal ">
            OUR SERVICES
          </div>
          <div className="text-xl md:text-lg lg:text-xl  font-bold mt-2">
            Feel free to view our services
          </div>
        </div>
       
        <div className="text-center mt-16 hidden md:block px-12">
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
            slidesPerView={1}
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
            <SwiperSlide>{Slide2()}
             
              
             </SwiperSlide>
            <SwiperSlide>{Slide3()}
            
             </SwiperSlide>
            <SwiperSlide>{Slide4()} 
             
            </SwiperSlide>
            <SwiperSlide>{Slide5()} 
            
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
       <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold text-white font-mono mt-12">
          WEB DEVELOPMENT
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-gray-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 border bg-gray-500 rounded">
            <Link href={"WAD"}>Learn more</Link>
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
        src="/Assets/sd.png"
        alt=""
        width={800}
        height={600}
        objectFit="cover"
      />
       <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold font-mono text-white mt-12">
          SOFTWARE DEVELOPMENT
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-gray-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 border bg-gray-500 rounded">
            <Link href={"WAD"}>Learn more</Link>
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
        src="/Assets/csd.jpg"
        alt=""
        width={800}
        height={600}
        objectFit="cover"
      />
       <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold font-mono text-white mt-12">
          CUSTOM SOFTWARE DEVELOPMENT
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-gray-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 border bg-gray-500 rounded">
            <Link href={"CSD"}>Learn more</Link>
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
       <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold font-mono text-white mt-12">
          DATA SCIENCE AND BIG DATA ANALYTICS
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-gray-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 border bg-gray-500 rounded">
            <Link href={"DSBDA"}>Learn more</Link>
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
       <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full items-center justify-center mt-20">
        <div className="text-3xl font-extrabold font-mono text-white mt-12">
          CYBER SECURITY
        </div>

        <div className="mt-4 text-xs">
          <button class="bg-gray-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 border bg-gray-500 rounded">
            <Link href={"CS"}>Learn more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
