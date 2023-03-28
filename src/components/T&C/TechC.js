import Link from "next/link";


export default function TechC() {
  return (
    <section className="w-full py-24 bg-blue-500">
      <div className="text-center">
        <div className="text-white text-3xl md:text-xl lg:text-6xl">
          Technology and Consultation
        </div>
        <div className="text-white text-sm md:text-xl lg:text-xl mt-8">
          WE USE TECHNOLOGY TO OPTIMIZE YOUR COMPANY
        </div>
        <div className="mt-8">
          <button class="bg-transparent hover:bg-transparent text-white font-bold py-2 px-4 border bg-transparent rounded ml-8">
           <Link href={'discover'}>
           DISCOVER MORE
           </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
