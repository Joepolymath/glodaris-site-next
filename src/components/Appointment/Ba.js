import Link from "next/link";

export default function Ba() {
  return (
    <section className="py-8 w-full">
      <div className="text-center">
        <div className=" flex flex-col md:flex-row mt-12">
          <div className="w-full md:w-2/2 lg:ml-12">
            <div className="text-base md:text-lg lg:text-3xl font-bold tracking-wider text-black">
              BOOK AN APPOINTMENT FOR OUR CONSULTATION SERVICES !!!
            </div>
            <div className="text-sm md:text-lg lg:text-lg text-red-600 mt-8 font-normal">
              Glodaris helps you in pursuit of your dream. Consulting us is just
              a good step forward
            </div>
          </div>

          <div className="w-full md:w-2/2 mt-12 lg:ml-8">
            <button class="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 border bg-blue-500 rounded">
              <Link href={"readmore"}>Learn more</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
