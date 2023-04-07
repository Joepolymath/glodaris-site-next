import Navbar from "@/components/Navigation/Navbar";
import Link from "next/link";
import Image from "next/image";

import Footer from "@/components/Footer/Footer";
export default function Pub1() {
  return (
    <div>
      <section className="bg-yellow-600 w-full h-60 lg:h-96">
        <Navbar></Navbar>
        <div className="lg:mt-32  mt-12 font-serif text-center">
          <div className="text-3xl md:text-xl text-white lg:text-6xl  font-extrabold">
            HEALTH RESOURCES
          </div>
        </div>
      </section>

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
              <div>KEY FINDINGS</div>
              <ul className="list-disc mt-4 text-xs md:text-lg lg:text-base font-mono font-light leading-relaxed">
                <li>
                  Maternal death is likely to continue in the medium to long
                  term Presently, approximately 196 women of childbearing age
                  die in Nigeria daily from preventable causes related to
                  pregnancy and childbirth. There was a total of 54,756 sample
                  of living or deceased women who had given birth in this study
                  North West (22.3%), North East (19.3%), North Central (17.1%),
                  South West (15.7%), South East (13.2%), and South South
                  (12.4%).
                </li>
                <li className="mt-8">
                  North West(NW)-This regioncontributed 12,435 to the sample
                  studied. Most recorded daily maternal deaths in Nigeria were
                  from the NW (42), and this also reflected in MMR of the NW
                  (see table 1). Women in this region have a 1 in 12 lifetimes
                  of dying during pregnancy when compared with other regions.
                  The majority of the women (71.20%) in this region had no
                  education, no access to skilled birth attendant (49.5%), no
                  exposure (62.7%), no family planning (98.2%), early age of
                  childbearing (78.3%), no access to information (53.8%). The
                  region contributed total 29% to poverty index in Nigeria,
                  community wealth, socio economy and age were associated with
                  maternal death in the region. Women with no education (77.20%)
                  significantly increased the odds of maternal mortality by 50.8
                  and maternal death increased with age by 11% in the northwest
                  region. The women from the Northwest were mostly Muslim (over
                  89.9%). In NW states; MMR has increased astronomical for
                  instance, in Jigawa 1144.7, Kebbi 1519.7 decreased in Zamfara
                  to 978.3, Katsina 918.5, Sokoto 867.8, Kano 617.7 and Kaduna
                  350.8. Nevertheless, report shows that maternal mortality
                  ratio has been handled poorly either by default of misapplying
                  policies which causes increased in Kebbi to 695.5, 589.8 in
                  Jigawa, 546.8 in Katsina, 303.9 in Sokoto and decreased to 324
                  in Zamfara, 256.2 in Kano and 183.7 in Kaduna in the year 2019
                  (see figure 1.0). For the complete set of key findings, feel
                  free to download the complete publication{" "}
                </li>
              </ul>

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
