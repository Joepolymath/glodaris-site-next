import Navbar from "@/components/Navigation/Navbar";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
export default function DSBDA() {
  return (
    <div>
      <section className="bg-yellow-600 w-full h-60 lg:h-96">
        <Navbar></Navbar>
        <div className="lg:mt-32  mt-12 font-serif text-center">
          <div className="text-3xl md:text-xl text-white lg:text-6xl  font-extrabold">
            DATA SCIENCE AND BIG DATA ANALYTICS
          </div>
        </div>
      </section>

      <div className="text-2xl text-center md:text-xl font-serif lg:text-4xl  font-extrabold mt-8 lg:mt-20">
        Learn about Big Data Service
      </div>
      <div className="flex flex-col items-center justify-center my-10 px-4 lg:px-2">
        <div className="max-w-3xl">
          <div className="relative h-60 md:h-96">
            <Image
              src="/Assets/ai.jpg"
              alt="Publication Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">
            AI & Machine Learning
          </h2>
          <p className="mt-2 text-sm lg:text-lg font-mono font-light">
            Tackle your business challenges with custom-made computer vision
            systems, chatbots, and artificial neural networks.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-10  px-4 lg:px-2">
        <div className="max-w-3xl">
          <div className="relative h-60 md:h-96">
            <Image
              src="/Assets/bi.jpg"
              alt="Publication Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">
            Business Intelligence
          </h2>
          <p className="mt-2 text-sm lg:text-lg font-mono font-light">
            Make use of collected data and interpret it with smart analytics
            that will help your organization make data-driven, intelligent
            decisions
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-10  px-4 lg:px-2">
        <div className="max-w-3xl">
          <div className="relative h-60 md:h-96">
            <Image
              src="/Assets/dm.jpg"
              alt="Publication Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">
            Database Management
          </h2>
          <p className="mt-2 text-sm lg:text-lg font-mono font-light">
            Get easy access to data as well as ensure its quality, security, and
            integrity with automated database management systems.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-10  px-4 lg:px-2">
      <div className="max-w-3xl">
        <div className="relative h-60 md:h-96">
          <Image
            src="/Assets/datac.jpg"
            alt="Publication Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">Data collection</h2>
        <p className="mt-2 text-sm lg:text-lg font-mono font-light">
        Our specialists will tune this process and ensure you collect complete, reliable data, which leads to correct conclusions and
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center my-10  px-4 lg:px-2">
      <div className="max-w-3xl">
        <div className="relative h-60 md:h-96">
          <Image
            src="/Assets/dc.jpg"
            alt="Publication Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">Data cleaning</h2>
        <p className="mt-2 text-sm lg:text-lg font-mono font-light">
        Big data comes with noise and in miscellaneous formats. We’ll make sure
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center my-10  px-4 lg:px-2">
      <div className="max-w-3xl">
        <div className="relative h-60 md:h-96">
          <Image
            src="/Assets/da.png"
            alt="Publication Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">Data analysis</h2>
        <p className="mt-2 text-sm lg:text-lg font-mono font-light">
        With our data scientists on board, you’ll enable both quantitative and qualitative data analysis to bring valuable insights to your team when and as they need it.
        </p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center my-10  px-4 lg:px-2">
      <div className="max-w-3xl">
        <div className="relative h-60 md:h-96">
          <Image
            src="/Assets/ds.png"
            alt="Publication Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">Data storage</h2>
        <p className="mt-2 text-sm lg:text-lg font-mono font-light">
        Centralized, scalable storage is what helps you move data seamlessly across classes. Integrating it into your infrastructure, we’ll optimize the costs and efficiency of running
        </p>
      </div>
    </div>

    <div className="text-center py-12 bg-yellow-600 font-serif px-8 mt-12">
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
