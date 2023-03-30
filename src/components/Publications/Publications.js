import Image from "next/image";
import Link from "next/link";
export default function Publications() {
  return (
    <section className="w-full lg:py-24 ">
      <div className="">
        <div className="">
          <div className="text-xl md:text-lg lg:text-6xl font-serif font-normal text-center">
            PUBLICATIONS
          </div>

          <div className="flex flex-col items-center py-12 px-4">
            <div className="max-w-3xl w-full">
              <div className="relative h-96">
                <Image
                  src="/Assets/fp.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="mt-6">
                <div className="text-sm md:text-lg font-mono lg:text-xl font-bold">
                  TRENDS IN DRIVING DOWN MATERNAL, CHILD MORTALITY AND UPTAKE OF
                  MODERN FAMILY PLANNING IN NIGERIA
                </div>
                <p className="mt-4 text-xs md:text-lg lg:text-base font-mono font-light leading-relaxed">
                  Presently, approximately 196 women of childbearing age die in
                  Nigeria daily from preventable causes related to pregnancy and
                  childbirth. There was a total of 54,756 sample of living or
                  deceased women who had given birth in this study North West
                  (22.3%), North East (19.3%), North Central (17.1%), South West
                  (15.7%), South East (13.2%), and South South (12.4%) <br />{" "}
                  <span className="text-xs">
                    {" "}
                    <button class="bg-gray-500 font-mono hover:bg-yellow-600 text-white font-bold py-2 px-4 border bg-gray-500 rounded">
                      <Link href={"readmore"}>Read more</Link>
                    </button>
                  </span>
                </p>
              </div>
            </div>

            <div className="max-w-3xl w-full mt-8">
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
                <div className="text-sm md:text-lg lg:text-xl font-mono font-bold">
                  THE NEED TO REDUCE GOVERNMENT WASTES AND ACHIEVING A MORE
                  EFFICIENT PUBLIC SECTOR WITH LEAN MANAGEMENT PRINCIPLES IN
                  NIGERIA
                </div>
                <p className="mt-4 text-xs md:text-lg lg:text-base font-light font-mono leading-relaxed">
                  Presently,Nigeria needs an urgenteconomy recovery from the
                  ills of coronavirus and declining oil price remains abysmally
                  slow, with declining real incomes that have negative
                  implications on the national growth, price and exchange rate
                  stability as well as employmentPresently, Nigeria needs an
                  urgenteconomy recovery from the ills of coronavirus and
                  declining oil priceremains abysmally slow, with declining real
                  incomes that have negative implications on the national
                  growth, price and exchange rate stability as well as
                  employment  <br />{" "}
                  <span className="text-xs">
                    {" "}
                    <button class="bg-gray-500 font-mono hover:bg-yellow-600 text-white font-bold py-2 px-4 border bg-gray-500 rounded">
                      <Link href={"readmore"}>Read more</Link>
                    </button>
                  </span>
                </p>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
