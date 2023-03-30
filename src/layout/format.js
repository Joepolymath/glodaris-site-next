import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { useEffect } from 'react'

import { ThemeProvider } from "next-themes";




export default function format({ children }) {
 


  return (
    <>
      <Head>
        <title>Glodaris</title>
       
      </Head>
      
     <ThemeProvider attribute="class" >
    
     <div >
      <Header></Header>
      
     
      <main>{children}</main>

      <Footer></Footer>

      
      </div>
    
     </ThemeProvider>
    </>
  );
}
