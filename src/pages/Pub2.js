import Navbar from "@/components/Navigation/Navbar";
import Link from "next/link";
import Image from "next/image";

import Footer from "@/components/Footer/Footer";
export default function Pub2() {
  return (
    <div>
      <section className="bg-yellow-600 w-full h-60 lg:h-96">
        <Navbar></Navbar>
        <div className="lg:mt-32  mt-12 font-serif text-center">
          <div className="text-3xl md:text-xl text-white lg:text-6xl  font-extrabold">
            LEAN MANAGEMENT SERVICES
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center py-12 px-4">
        <div className="max-w-3xl w-full">
          <div className="relative h-96">
            <Image
              src="/Assets/refuse.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mt-6">
            <div className="text-sm md:text-lg font-mono lg:text-xl font-bold">
              THE NEED TO REDUCE GOVERNMENT WASTES AND ACHIEVING A MORE
              EFFICIENT PUBLIC SECTOR WITH LEAN MANAGEMENT PRINCIPLES IN NIGERIA
            </div>
            <p className="mt-4 text-xs md:text-lg lg:text-base font-mono font-light leading-relaxed">
              Presently,Nigeria needs an urgenteconomy recovery from the ills of
              coronavirus and declining oil price remains abysmally slow, with
              declining real incomes that have negative implications on the
              national growth, price and exchange rate stability as well as
              employment. In other words, worsening oil prices and a falling
              exchange rate will create a further fiscal crisis, imports will
              become more expensive and inflation pressures will rise,
              productive sector wobble, unemployment and poverty will worsen and
              external reserves further depleted. Therefore, there is urgent
              need to apply lean management principle in order to re-organise
              our priorities, at both the executive and parliamentary arms of
              governance. The wastages in the executive arm in terms of
              overlapping of jurisdictions of activities in governance must be
              urgently eliminated or reduced and remunerations for unnecessary
              activities removed. On the parliamentary side, the costs of
              maintaining this arm of governance is out of tune with the current
              realities and need to be reduced drastically. For the complete set
              of key findings, feel free to download the complete report
              <span className="text-xs">
                {" "}
                <button class="bg-gray-500 font-mono hover:bg-yellow-600 text-white font-bold py-2 px-4 border bg-gray-500 rounded">
                  <Link href={"#"}>Download</Link>
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
