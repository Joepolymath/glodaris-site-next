import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
export default function TechC() {
  
  return (
   <>
     
     <section className="w-full py-24 bg-yellow-600">


    
       
       <div className="text-center font-serif">
         <div className="text-3xl md:text-xl text-white lg:text-6xl">
           Technology and Consultation
         </div>
         <div className=" text-sm md:text-xl text-white lg:text-xl mt-8">
           WE USE TECHNOLOGY TO OPTIMIZE YOUR COMPANY
         </div>
         <div className="mt-8">
           <button class="bg-transparent font-mono hover:bg-transparent text-white font-bold py-2 px-4 border bg-transparent rounded ml-8">
            <Link href={'discover'}>
            DISCOVER MORE
            </Link>
           </button>
         </div>
       </div>
     </section>
   </>
  );
}
