import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Format from "@/layout/format";
import Aboutus from "@/components/AboutUs/Aboutus";
import TechC from "@/components/T&C/TechC";
import Services from "@/components/Services/Services";
import Publications from "@/components/Publications/Publications";
import Wcu from "@/components/WCU/Wcu";
import Cp from "@/components/ClientsandPatners/Cp";

import Feedbacks from "@/components/FeedBacks/Feedbacks";
import Ba from "@/components/Appointment/Ba";
import Contact from "@/components/Contact/Contact";
import Pcca from "@/components/PCCA/Pcca";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Format>
      <TechC></TechC>
      <Aboutus></Aboutus>
      <Services></Services>
      <Publications></Publications>
      <Pcca></Pcca>
      <Wcu></Wcu>
      <Cp></Cp>
      
      <Feedbacks></Feedbacks>
      <Ba></Ba>
      <Contact></Contact>

    </Format>
  );
}
