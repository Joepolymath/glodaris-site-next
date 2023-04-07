import Navbar from "@/components/Navigation/Navbar";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
const cards = [
  {
    title: "Native Android App Development",
    text: "With 7+ years of experience, 26+ completed projects and a team of 18+ native Android app development professionals, we can build for you any kind of app for any purpose.",
  },
  {
    title: "Hybrid Android App Development",
    text: "Being the best Android application development company out there, GLODARIS offers custom hybrid mobile app development services",
  },
  {
    title: "Custom Android App Development",
    text: "More than developing standard mobile applications, we specialize in building customized Android apps catering to the specific needs of our clients.",
  },
  {
    title: "Web-based Android App Development",
    text: "Looking to create an interface between your website (JavaScript) and Android app (API)? Our talented team will help you with the job.",
  },
  {
    title: "Android App Consulting",
    text: "Need professional advice or assistance with your app development project? Contact our expert app development team now to discuss your idea.",
  },
  {
    title: "Android App testing",
    text: "Get your Android app tested in both real and machine environments to identify and remove bugs (if any) and make your app perfect in operations.",
  },
  {
    title: "Android UI/UX Design",
    text: "Our expert design team consisting of app interface designers, graphic designers and UI/UX designers will get you a user-friendly and smooth app design.",
  },
];

const cardsEx = [
  {
    title: "Android Portfolio",
    text: "102+ Android app projects have been successfully delivered to clients covering almost all industries.ts.",
  },
  {
    title: "Bug-free Apps",
    text: "Our developers develop clean and optimized code. We develop always Bug-free app and don't leave corrupted impressions for the clients.",
  },
  {
    title: "Latest Development Tools",
    text: "The experience to work with the latest technologies in Android has enabled GLODARIS teams to use proven methodologies.",
  },
  {
    title: "Build Faster",
    text: "Without any delays, Android developers from GLODARIS believe to provide faster service and so they plan early to launch at the right time.",
  },
  {
    title: "Affordable Price",
    text: "With GLODARIS, you can be guaranteed the best prices in the market without compromising for quality in any way.",
  },
  {
    title: "Dedicated Developers",
    text: "GLODARIS provides dedicated developers and project managers individually for every type of projects.",
  },
];

const Card = ({ title, text }) => {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full mt-8">
      <div className="border-2 border-gray-200 p-6 rounded-lg h-full">
        <h2 className="text-xl font-bold text-yellow-600 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{text}</p>
      </div>
    </div>
  );
};

const Cardexp = ({ title, text }) => {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full mt-8">
      <div className="border-2 border-gray-200 p-6 rounded-lg h-full">
        <h2 className="text-xl font-bold text-yellow-600 title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{text}</p>
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

const CardExperience = () => {
  return (
    <div className="flex flex-wrap ">
      {cardsEx.map((cardexp) => (
        <Cardexp
          key={cardexp.title}
          title={cardexp.title}
          text={cardexp.text}
        />
      ))}
    </div>
  );
};

const cardsData = [
  {
    image: "/Assets/ecommerce.png",

    description: "Retail, Ecommerce",
  },
  {
    image: "/Assets/book.png",

    description: "Education & Ecommerce",
  },
  {
    image: "/Assets/dumbbell.png",

    description: "Healthcare & Fitness",
  },
  {
    image: "Assets/trolley.png",

    description: "Logistics & Distribution",
  },
  {
    image: "/Assets/networking.png",

    description: "Social Networking",
  },
  {
    image: "/Assets/house.png",

    description: "Real Estate",
  },
  {
    image: "/Assets/passport.png",

    description: "Travel & Hospitality",
  },
  {
    image: "Assets/fod.png",

    description: "Food and Resturant",
  },
  {
    image: "/Assets/p.png",

    description: "On-demand Solutions",
  },
  {
    image: "Assets/joystick.png",

    description: "Gaming",
  },
];

const cardsProcess = [
  {
    image: "/Assets/rg.png",
    title: "Requirement Gathering",
    description:
      "Requirement qathering is the first and very important part of our mobile app development process.",
  },
  {
    image: "/Assets/browser.png",
    title: "UI/UX Design",
    description:
      "We create eye catchy design with the help of latest tools of designing.",
  },
  {
    image: "/Assets/prototype.png",
    title: "Prototype",
    description:
      "After designing, the prototype of your app gets ready which is sent for development then.",
  },
  {
    image: "Assets/smartphone.png",
    title: "App development",
    description:
      "The development gets started on the preferable platform with complete transparency. ",
  },
  {
    image: "/Assets/badge.png",
    title: "Quality Assurance",
    description:
      "We do not compromise in quality so we make sure you get 100% bug free app.",
  },
  {
    image: "/Assets/deploy.png",
    title: "Deployment",
    description:
      "Your app is ready to appear on the App store or play store on this stage of deployment.",
  },
  {
    image: "/Assets/toolbox.png",
    title: "Support & maintenance",
    description: "We give support & answer every query after deployment.",
  },
];

export default function WAD({ title, description, imageUrl }) {
  return (
    <div>
      <section className="bg-yellow-600 w-full h-60 lg:h-96">
        <Navbar></Navbar>
        <div className="lg:mt-32  mt-12 font-serif text-center">
          <div className="text-3xl md:text-xl text-white lg:text-6xl  font-extrabold">
            WEB APP DEVELOPMENT
          </div>
        </div>
      </section>

      <div className="ml-12 hidden md:block">
        <div className="md:px-20 flex flex-col md:flex-row lg:justify-between mt-12">
          <div className=" w-full md:w-2/2">
            <div className="">
              <Image src={"/Assets/wad.jpg"} alt="" width={500} height={500} />
            </div>
          </div>
          <div className=" w-full md:w-2/2">
            <div className="text-sm font-mono md:text-sm lg:text-base font-light mt-8 leading-6 tracking-widest ">
              GLODARIS, is a top mobile app development company renowned name in
              this field. The company is focused on delivering top mobile
              applications, and other IT solutions, as per the requirement and
              demand of the clients. We have a dedicated team of experienced
              designers and developers for both Android and iPhone app
              development, who are dedicated to executing the project on time,
              and apart from these we also specialize in app design and
              marketing arena. We believe in delivering cost-effective and most
              advance IT solutions to our clients, and right now we are
              providing assistance in more than 450+ clients. In lieu to boost
              your business in this age of digitalization, contact and hire
              GLODARIS developers and get the best online business solutions at
              a much affordable price
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
                <Image
                  src={"/Assets/wad.jpg"}
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className=" w-full md:w-2/2">
            <div className="text-sm font-mono px-2 font-light  mt-4 ml-4 tracking-wider">
              GLODARIS, is a top mobile app development company renowned name in
              this field. The company is focused on delivering top mobile
              applications, and other IT solutions, as per the requirement and
              demand of the clients. We have a dedicated team of experienced
              designers and developers for both Android and iPhone app
              development, who are dedicated to executing the project on time,
              and apart from these we also specialize in app design and
              marketing arena. We believe in delivering cost-effective and most
              advance IT solutions to our clients, and right now we are
              providing assistance in more than 450+ clients. In lieu to boost
              your business in this age of digitalization, contact and hire
              GLODARIS developers and get the best online business solutions at
              a much affordable price
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 font-mono">
        <div className="text-center text-xl md:text-xl  lg:text-4xl  font-bold">
          APP DEVELOPMENT
        </div>
        <CardApp />
      </div>

      <div className="flex flex-col items-center py-4 px-4">
        <div className="max-w-3xl w-full">
          <div className="relative h-96">
            <Image
              src="/Assets/android.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mt-6">
            <p className="mt-4 text-xs md:text-lg lg:text-base font-mono font-light leading-relaxed">
              Android – which is a fast-growing operating system for smartphone
              devices has been famous for its every update. Its many-sided, user
              affable applications & flexibility has made it more favorable.
              Android applications are the best thing in the current market and
              are growing over the usual public like wildfire. As a leading
              Android app development company in Nigeria and with an experienced
              team of Android app developers; we solve business problems and
              help startups, Government agencies, large and small organizations
              across a wide range of business problems with Android
              technologies. Our team comprises of experienced Android developers
              with great proficiency in the platform as well as all its
              versions. GLODARIS has a team of technically sound and expert team
              of Android apps experts that have the required skills and
              knowledge of Android app platform. Our Android app developers are
              dedicatedly engaged in developing strong and scalable Android
              apps. To make use of the latest tools and Android SDK, they can
              capable to develop best Android app development solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-10 font-mono">
        <div className="text-center text-xl md:text-xl  lg:text-4xl  font-bold">
          Experience we have
        </div>
        <CardExperience />
      </div>
      <div className="flex flex-col items-center py-4 px-4">
        <div className="max-w-3xl w-full">
          <div className="relative h-96">
            <Image
              src="/Assets/ios.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="mt-6">
            <p className=" text-xs md:text-lg lg:text-base font-mono font-light leading-relaxed">
              As one of the top iPhone app development companies, we offer the
              best iPhone app development services to the clients and businesses
              in Nigeria, South Africa, UK, UAE, and around the world.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4  lg:px-8 lg:py-16 py-4">
        <div className="text-lg text-center md:text-xl font-serif lg:text-2xl font-extrabold">
          Our Core iPhone App Development Service Includes:
        </div>

        <div className=" px-4  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-lg  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            <ul className="list-disc">
              <li>Multimedia Apps</li>
              <li>Enterprise Apps</li>
              <li>Social Networking Apps</li>
              <li>Mobile Games</li>
              <li>Location Based Apps</li>
              <li>E-commerce Apps</li>
              <li>Wearable/IoT Apps</li>
              <li>iBeacon Apps</li>
              <li>AR/VR Apps</li>
            </ul>
          </div>
          <div className="flex lg:text-lg  font-mono text-sm mb-6 font-bold tracking-wide">
            Utility Apps
          </div>

          <div className="flex lg:text-base  font-mono text-sm mb-6 font-light tracking-wide">
            The advantage of hiring an iPhone app development company like
            GLODARIS is that they are recognized among many industries as being
            exceptionally talented plus they cost less than programmers from
            other countries.
          </div>
        </div>
      </div>

      <div className="px-4  lg:px-8 lg:py-16 py-4">
        <div className="text-lg text-center md:text-xl font-serif lg:text-2xl font-extrabold">
          Our Core iPhone App Development Service Includes:
        </div>

        <div className=" px-4  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-lg  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            <ul className="list-disc">
              <li>End-to-End iPhone App Development Services</li>
              <li>Certified Methodologies</li>
              <li>User-friendly iPhone App Design</li>
              <li>Strategic Technology Consulting</li>
              <li>Affordable Pricing</li>
              <li>Skilled Team of Professionals</li>
              <li>Flexibility and Predictability</li>
              <li>Committed UI/UX Experts and Developers</li>
              <li>Reliable and Scalable iPhone Applications</li>
            </ul>
          </div>
          <div className="flex lg:text-lg  font-mono text-sm mb-6 font-bold tracking-wide">
            App Code as per Apple Guidelines
          </div>

          <div className="flex lg:text-base  font-mono text-sm mb-6 font-light tracking-wide">
            The advantage of hiring an iPhone app development company like
            GLODARIS is that they are recognized among many industries as being
            exceptionally talented plus they cost less than programmers from
            other countries.
          </div>
        </div>
      </div>

      <div>
        <div className="text-2xl text-center md:text-xl font-serif lg:text-4xl text-yellow-600 font-extrabold">
          Industries we serve
        </div>
        <div className="grid grid-cols-1 gap-4 px-12 container max-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-20 px-12">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                width={50}
                height={50}
                className="ml-4"
              />
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base font-mono text-yellow-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-2xl text-center md:text-xl font-serif lg:text-4xl text-yellow-600 font-extrabold mt-20">
          Process
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-12 mt-20">
          {cardsProcess.map((card, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                width={50}
                height={50}
                className="ml-4"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-mono">
                  {card.title}
                </div>
                <p className="text-gray-700 text-base font-mono text-yellow-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
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
