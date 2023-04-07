import Navbar from "@/components/Navigation/Navbar";
import Image from "next/image";
import { useState } from "react";

import Link from "next/link";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
export default function CS() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const accordionData = [
    {
      title: "CONSULTANCY",
      content:
        "Each member of the GLODARIS team is an expert in data protection in their own right. That means, when you pick up the phone and give us a call, you can be confident that you are talking to someone who knows their stuff. We know the market. We understand our clients and the challenges they face and we’ll invest time in understanding your business, its challenges and nuances, before we provide unbiased advice on the best products on the market for you. We have a product portfolio of the very best leading solutions in data protection but we also work with vendors to identify and fill service gaps and meet our clients’ needs. Other consultancy services provided are; Each member of the GLODARIS team is an expert in data protection in their own right. That means, when you pick up the phone and give us a call, you can be confident that you are talking to someone who knows their stuff. We know the market. We understand our clients and the challenges they face and we’ll invest time in understanding your business, its challenges and nuances, before we provide unbiased advice on the best products on the market for you. We have a product portfolio of the very best leading solutions in data protection but we also work with vendors to identify and fill service gaps and meet our clients’ needs. Other consultancy services provided are; Pre-Sales Advice & Proof of Concept, RFI Creation/Tender Process, Project Scoping & Architectural Design, Documentation, Health Checks and Troubleshooting",
    },
    {
      title: "IMPLEMENTATION",
      content:
        "Once we’ve helped you to identify the most effective approach to securing your data we provide proof of concept and architectural design to consolidate plans and strategies. We’ll deploy the best solutions, incorporating third party software and integrating directories where necessary. We have installations at more than 261 enterprises across the world, so we’re used to working flexibly. This means we minimise downtime and upheaval to your business, avoid impacting productivity and get clients set up and using new systems quickly. Just to make sure though, we’ll run a health check for good measure. We can assist with the following; Training & Education, Project Management, Test Planning, Bespoke Scripting and Deployment",
    },
    {
      title: "TRAINING",
      content:
        "You can’t get the most out of your data protection software and systems unless everyone is confident using them. Our team of product specialists will conduct training on or off-site to ensure that all of your users are up to speed and applying your new protective measures consistently and correctly, right from the start. Our product managers understand the value of your time and also exactly how each of the carefully selected products within our range works. They are experienced in developing training that is both cost effective and time efficient for all kinds of organisations, from multinational corporations to government-owned public bodies to make the most of your time and budget. Other training services provided are; Bespoke Training Packages, Classroom Style Training, One on One Training, Documentation and Help Guides, Refresher Courses",
    },
  ];
  return (
    <div>
      <section className="bg-yellow-600 w-full h-60 lg:h-96">
        <Navbar></Navbar>
        <div className="lg:mt-32  mt-12 font-serif text-center">
          <div className="text-3xl md:text-xl text-white lg:text-6xl  font-extrabold">
            CYBER SECURITY
          </div>
        </div>
      </section>

      <div className="ml-12 hidden md:block">
        <div className="md:px-20 flex flex-col md:flex-row lg:justify-between mt-12">
          <div className=" w-full md:w-2/2 mt-12">
            <div className="">
              <Image
                src={"/Assets/cybersecurity.jpg"}
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className=" w-full md:w-2/2">
            <div className="text-sm font-mono md:text-sm lg:text-base font-light mt-8 leading-6 tracking-widest ">
              The world of technology is continuously evolving, from the rise in
              the Internet of Things (IoT) through the adoption of Software as a
              Service (SaaS) over traditional in-house applications. And as
              technologies shift, so does the threat landscape. Yet many
              organizations adapt their technology without guidance or direction
              from IT, information security, procurement, or risk specialists.
              As a Managed Security Services Provider (MSSP), we act as our
              client’s trusted go-to partner bringing advanced expertise in the
              current threat landscape. Let us become an extension of your team,
              whether seeking assistance with 24x7 network security monitoring,
              Virtual CISO Services, or Penetration Testing
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
                  src={"/Assets/cybersecurity.jpg"}
                  alt=""
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className=" w-full md:w-2/2">
            <div className="text-sm font-mono px-2 font-light  mt-4 ml-4 tracking-wider">
              The world of technology is continuously evolving, from the rise in
              the Internet of Things (IoT) through the adoption of Software as a
              Service (SaaS) over traditional in-house applications. And as
              technologies shift, so does the threat landscape. Yet many
              organizations adapt their technology without guidance or direction
              from IT, information security, procurement, or risk specialists.
              As a Managed Security Services Provider (MSSP), we act as our
              client’s trusted go-to partner bringing advanced expertise in the
              current threat landscape. Let us become an extension of your team,
              whether seeking assistance with 24x7 network security monitoring,
              Virtual CISO Services, or Penetration Testing
            </div>
          </div>
        </div>
      </div>

      <div className="px-4  lg:px-8 lg:py-16 py-4">
        <div className="text-lg text-center md:text-xl font-serif lg:text-2xl font-extrabold">
          Our core principals are simple. We aim to:
        </div>

        <div className=" px-4  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-lg  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            <ol className="list-decimal">
              <li>Be your trusted compliance and risk program advisor.</li>
              <li>
                Bring information security leadership to enterprises of all
                sizes.
              </li>
              <li>
                Deliver cost-effective technology to reduce enterprise-wide
                risk.
              </li>
              <li>Provide expert consulting services to support IT teams.</li>
              <li>Detect and respond to threats on your behalf.</li>
            </ol>
          </div>

          <div className="flex flex-col items-center justify-center my-10 px-4 lg:px-2">
            <div className="max-w-3xl">
              <div className="relative h-60 md:h-96">
                <Image
                  src="/Assets/one.jpg"
                  alt="Publication Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">
                PROTECT
              </h2>
              <p className="mt-2 text-sm lg:text-lg font-mono font-light">
                Threats are no longer simply in the form of viruses but also as
                encrypted attachments, Bring Your Own Device policies and data
                transfers. Finding the right solutions in the war against data
                loss is essential. With so many different ways data loss occurs;
                malicious attacks, rogue users, accidental data loss,
                hacktivists, malware, viruses, state sponsored attacks, or even
                industrial espionage, finding the right solution the first time
                can seem impossible
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center my-10  px-4 lg:px-2">
            <div className="max-w-3xl">
              <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">
                DETECT
              </h2>
              <p className="mt-2 text-sm lg:text-lg font-mono font-light">
                Detection has evolved beyond simple anti-virus scanning to
                scanning encrypted content, analysing big data and spotting red
                flags in the form of anomalies. Having this data is only the
                first step in effective detection though. It’s down to your
                ability to easily access and analyse this data through reports
                and dashboards to make it meaningful, alerting you to data loss
                and system abuse earlier so that response times can be faster
                and the devastation that follows such an attack can be limited
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center my-10  px-4 lg:px-2">
            <div className="max-w-3xl">
              <div className="relative h-60 md:h-96">
                <Image
                  src="/Assets/two.png"
                  alt="Publication Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="mt-5 text-2xl font-bold font-mono text-yellow-600">
                RESPOND
              </h2>
              <p className="mt-2 text-sm lg:text-lg font-mono font-light">
                Responding to an attack is not as simple as just ending the
                attack and carrying out remedial work to get systems up and
                running again. Compliance has, over the last few years, become a
                huge element in how response activities are conducted, making
                response plans chronically complex. Specific plans of action to
                guide you through the correct remedial route, neatly adhering to
                the lines of compliance can improve response time and damage
                limitation immensely. Whatever point you are at in the cyber
                security Protect, Detect, Respond cycle, GLODARIS’s data
                protection specialists live and breathe the Protect, Detect and
                Respond cycle and are at the end of a phone 24 hours a day.
                Whilst our independent status gives us the freedom and
                flexibility to help you find the right course as we guide you
                through this complex and changing landscape.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 mx-auto">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="flex justify-between items-center w-full p-4 bg-yellow-600 focus:outline-none"
              onClick={() => handleAccordionClick(index)}
            >
              <span className="lg:text-2xl text-lg text-white font-bold font-serif">
                {item.title}
              </span>
              <svg
                className={`${
                  activeIndex === index ? "transform rotate-180" : ""
                } w-5 h-5`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3.333l6.667 6.667H3.333L10 3.333zm0 13.334l6.667-6.667H3.333L10 16.667z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`${
                activeIndex === index ? "block" : "hidden"
              } p-4 text-gray-700 bg-gray-100`}
            >
              <span className="font-mono font-light"> {item.content}</span>
            </div>
          </div>
        ))}
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
