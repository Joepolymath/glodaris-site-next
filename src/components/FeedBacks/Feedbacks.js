import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Autoplay } from "swiper";

export default function Feedbacks() {
  SwiperCore.use([Autoplay]);
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <section className="w-full bg-blue-500 py-24">
      <div>
        <div className="text-center">
          <div className="text-xl md:text-lg lg:text-4xl font-normal text-white">
            FEEDBACK FROM SOME OF OUR CLIENTS WHO PARTICIPATED IN THE LEAN
            MANUFACTURING WORKSHOP 2020
          </div>
        </div>

        <div className="text-center  mt-16 hidden md:flex">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            autoplay={{
              delay: 5000,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-transparent rounded-lg shadow-lg py-12 pl-4">
                <div className="text-black font-bold text-xl ">
                  NAME:{" "}
                  <span className="text-white font-normal text-xl">
                    Mr Kazeem Alolade
                  </span>
                </div>
                <div className="text-black font-bold text-xl mt-8">
                  ORGANIZATION:{" "}
                  <span className="text-white font-normal text-xl">
                    11plc (formerly Mobil oil Nig )
                  </span>
                </div>
                <div className="text-black font-bold text-xl mt-8">
                  FEEDBACK:
                  <span className="text-white font-light text-sm">
                    {" "}
                    This conference workshop is highly educative and will enable
                    elimiantion of waste in manufacturing processes. The VSM and
                    the TPM are tools that if employed will enhance high
                    efficiency and encourage high level productivity. The bottom
                    line of this workshop is aimed at satisfying customers
                    needs, reducing wastes in manufacturing processes and
                    reducing down line that is attributable to maintenance
                    issues. Thank you.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-transparent rounded-lg shadow-lg py-12 pl-4">
                <div className="text-black font-bold text-xl ">
                  NAME:{" "}
                  <span className="text-white font-normal text-xl">
                    Akambi James Ola
                  </span>
                </div>

                <div className="text-black font-bold text-xl mt-8">
                  ORGANIZATION:
                  <span className="text-white font-normal text-xl">
                    {" "}
                    Dekoolar Nig ltd
                  </span>
                </div>

                <div className="text-black font-bold text-xl mt-8">
                  FEEDBACK:
                  <span className="text-white font-light text-sm">
                    {" "}
                    Waste management through WORMPITU identification through
                    value stream mapping, i am now a better manager. Through
                    this training i have learnt that the current system in my
                    company is wrong and needs to be restructured. I have learnt
                    how to run my company more profitable.{" "}
                  </span>
                </div>
                <div className="text-black font-bold text-xl mt-8">
                  NOTE:
                  <span className="text-white font-light text-sm">
                    {" "}
                    My advice to the organizer(i personally advice that you
                    follow us up.) Thanks.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-transparent rounded-lg shadow-lg py-12 pl-4">
                <div className="text-black font-bold text-xl ">
                  NAME:{" "}
                  <span className="text-white font-normal text-xl">
                    Daniel Ozolua
                  </span>
                </div>
                <div className="text-black font-bold text-xl mt-8">
                  ORGANIZATION:{" "}
                  <span className="text-white font-normal text-xl">
                    Crown ARC
                  </span>
                </div>

                <div className="text-black font-bold text-xl mt-8">
                  FEEDBACK:{" "}
                  <span className="text-white font-light text-sm">
                    Base on continuous improvement lecture i received using
                    Nigeria as a case study, the manufacturing organization can
                    do more in time of effective production. If the government
                    agents to key to continuous improvement as a way of growing
                    the Nigeria economic like what india did in their country.
                    Thanks.
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-transparent rounded-lg shadow-lg py-12 pl-4">
                <div className="text-black font-bold text-xl ">
                  NAME:{" "}
                  <span className="text-white font-normal text-xl">
                    Onyinye Macfoy
                  </span>
                </div>

                <div className="text-black font-bold text-xl mt-8">
                  ORGANIZATION:{" "}
                  <span className="text-white font-normal text-xl">
                    11plc (formerly Mobil oil Nig)
                  </span>
                </div>
                <div className="text-black font-bold text-xl mt-8">
                  FEEDBACK:{" "}
                  <span className="text-white font-light text-sm">
                    <ul>
                      <li>Excellent Content</li>
                      <li>Very Insignificant</li>
                      <li>Great Engagement</li>
                    </ul>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Responsive */}
        <div className="text-center  mt-16 md:hidden">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
              type: "fraction",
            }}
            autoplay={{
              delay: 5000,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-red-400 rounded-lg shadow-lg py-12 pl-4">
                <div className="text-white">NAME: Mr Kazeem Alolade</div>
                <div className="text-white mt-4">
                  ORGANIZATION: 11plc (formerly Mobil oil Nig )
                </div>
                <div className="text-white mt-4">
                  FEEDBACK: This conference workshop is highly educative and
                  will enable elimiantion of waste in manufacturing processes.
                  The VSM and the TPM are tools that if employed will enhance
                  high efficiency and encourage high level productivity. The
                  bottom line of this workshop is aimed at satisfying customers
                  needs, reducing wastes in manufacturing processes and reducing
                  down line that is attributable to maintenance issues. Thank
                  you.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-400 rounded-lg shadow-lg py-12 pl-4">
                <div className="text-white mt-4">NAME: Akambi James Ola</div>

                <div className="text-white mt-4">
                  ORGANIZATION: Dekoolar Nig ltd
                </div>

                <div className="text-white mt-4">
                  FEEDBACK: Waste management through WORMPITU identification
                  through value stream mapping, i am now a better manager.
                  Through this training i have learnt that the current system in
                  my company is wrong and needs to be restructured. I have
                  learnt how to run my company more profitable.{" "}
                </div>
                <div className="text-white mt-4">
                  NOTE: My advice to the organizer(i personally advice that you
                  follow us up.) Thanks.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-400 rounded-lg shadow-lg py-12 pl-4">
                <div className="text-white mt-4">NAME: Daniel Ozolua</div>
                <div className="text-white mt-4">ORGANIZATION: Crown ARC</div>

                <div className="text-white mt-4">
                  FEEDBACK: Base on continuous improvement lecture i received
                  using Nigeria as a case study, the manufacturing organization
                  can do more in time of effective production. If the government
                  agents to key to continuous improvement as a way of growing
                  the Nigeria economic like what india did in their country.
                  Thanks.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-red-400 rounded-lg shadow-lg py-12 pl-4">
                <div className="text-white mt-4">NAME: Onyinye Macfoy</div>

                <div className="text-white mt-4">
                  ORGANIZATION: 11plc (formerly Mobil oil Nig)
                </div>
                <div className="text-white mt-4">
                  FEEDBACK:{" "}
                  <ur className="list-disc">
                    <li>Excellent Content</li>
                    <li>Very Insignificant</li>
                    <li>Great Engagement</li>
                  </ur>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
