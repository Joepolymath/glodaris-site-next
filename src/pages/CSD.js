import Navbar from "@/components/Navigation/Navbar";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const cards = [
  {
    title: "We have the right skills, tools, and resources",
    text: "Think of us as a one-stop shop to cover all of your software development needs with a precise stack of technologies",
  },
  {
    title: "We provide the highest level of expertise",
    text: "80% of our staff are senior software developers",
  },
  {
    title: "We provide you with easy and painless scalability options",
    text: "You can scale your project and team capacity up and down, as needed — no rigid terms",
  },
  {
    title: "With us, you remain in full control along the ways",
    text: "You have full control over your project, reserving the right to accept or reject candidates to set up your perfect team",
  },
  {
    title: "No complexity is too complex",
    text: "We pulled off highly demanding projects across specialized niches such as IPTV, airport facility management and patient engagement, to name a few. Come challenge us with your project",
  },
  {
    title: "We are ready to start right away",
    text: "With a number of specialists available to start on short notice, we can launch your project as fast as in 10 days",
  },
];

const Card = ({ title, text }) => {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full mt-8">
      <div className="border-2 border-gray-200 p-6 rounded-lg h-full">
        <h2 className="text-xl font-bold text-yellow-600 title-font mb-2 font-mono">
          {title}
        </h2>
        <p className="leading-relaxed text-base font-mono">{text}</p>
      </div>
    </div>
  );
};

const CardApp = () => {
  return (
    <div className="flex flex-wrap ">
      {cards.map((card) => (
        <Card key={card.title} title={card.title} text={card.text} />
      ))}
    </div>
  );
};

export default function CSD() {
  return (
    <div>
      <section className="bg-yellow-600 w-full h-60 lg:h-96">
        <Navbar></Navbar>
        <div className="lg:mt-32  mt-12 font-serif text-center">
          <div className="text-3xl md:text-xl text-white lg:text-6xl  font-extrabold">
            CUSTOM SOFTWARE DEVELOPMENT
          </div>
        </div>
      </section>

      <div className="ml-12 hidden md:block">
        <div className="md:px-20 flex flex-col md:flex-row lg:justify-between mt-12">
          <div className=" w-full md:w-2/2">
            <div className="">
              <Image src={"/Assets/sd.png"} alt="" width={500} height={500} />
            </div>
          </div>
          <div className=" w-full md:w-2/2">
            <div className="text-sm font-mono md:text-sm lg:text-base font-light mt-8 leading-6 tracking-widest ">
              We run a complete line-up of custom software development services,
              which means we have no problem pitching in at any stage of your
              project. Each of these services can be rendered to fit web, mobile
              or IoT development depending on your vision and requirements.
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <div className="md:hidden ">
        <div className="md:px-20 flex flex-col md:flex-row lg:justify-between mt-8">
          <div className=" w-full md:w-2/2">
            <div className=" w-full md:w-2/2">
              <div className="ml-4">
                <Image src={"/Assets/sd.png"} alt="" width={300} height={300} />
              </div>
            </div>
          </div>

          <div className=" w-full md:w-2/2">
            <div className="text-sm font-mono px-2 font-light  mt-4 ml-4 tracking-wider">
              We run a complete line-up of custom software development services,
              which means we have no problem pitching in at any stage of your
              project. Each of these services can be rendered to fit web, mobile
              or IoT development depending on your vision and requirements.
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-2xl text-center md:text-xl font-serif lg:text-4xl text-yellow-600 font-extrabold mt-20">
          Why turn to our software Development Team
        </div>
        <CardApp />
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
