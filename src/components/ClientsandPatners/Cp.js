import Image from "next/image";



export default function Cp() {
  return (
    <section className="w-full py-12 px=8">
      <div className="container mx-auto">
        <div className="">
          <div className="text-2xl md:text-lg font-serif lg:text-4xl font-normal text-center">
            OUR CLIENTS
          </div>
          <div className="text-sm md:text-lg font-mono lg:text-base font-light mt-12 px-8">
            GLODARIS has a docket of over 3000 active clients across industries
            such as Government, Automobile, Fashion, Healthcare, Food &
            Beverage, Engineering, Professional Services and Retail and INGOs
            and NGOs. We are proud to be a multisectoral global firm! As such,
            we respect all business endeavours – big or small – priding
            ourselves on being able to deliver quality service to international
            corporations as well as fresh start-ups. Here are some businesses
            who GLODARIS supported with
          </div>

          <div className="flex flex-wrap lg:ml-20 mt-12 text-center">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 ">
              <Image src={'/Assets/mm.png'} width={200} height={200} alt="" />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-4 lg:mt2">
            <Image src={'/Assets/alcon.png'} width={200} height={200} alt="" />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-4 lg:mt2">
            <Image src={'/Assets/alo.png'} width={200} height={200} alt="" />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-4 lg:mt2">
            <Image src={'/Assets/solap.png'} width={200} height={200} alt="" />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="text-2xl md:text-lg font-serif lg:text-4xl font-normal mt-12">
            OUR PARTNERS
          </div>

          <div className="flex flex-wrap lg:ml-20 mt-12 ">
            <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <Image src={'/Assets/nis.png'} width={200} height={200} alt="" />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-4 lg:mt2">
            <Image src={'/Assets/fm.png'} width={200} height={200} alt="" />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-4 lg:mt2">
            <Image src={'/Assets/alo.png'} width={200} height={200} alt="" />
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-4 lg:mt2">
            <Image src={'/Assets/solap.png'} width={200} height={200} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
