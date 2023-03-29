import Navbar from "@/components/Navigation/Navbar";

export default function Services() {
  return (
    <div>
      <section className="bg-blue-50 w-full py-12">
        <Navbar></Navbar>

        <div className="lg:mt-32  mt-12 text-center">
          <div className="text-4xl md:text-xl lg:text-8xl text-red-400 font-extrabold">
            LEAN SIX SIGMA SERVICES
          </div>

          <div className=" text-sm md:text-xl lg:text-2xl font-light">
            Learn about our Lean Six Sigma Management Services
          </div>
        </div>
      </section>

     

     <div className="py-8">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            
            <p className="text-gray-700 text-lg mb-6 font-light tracking-wide">
              GLODARIS is an international consulting firm that specializes in
              working with companies to enable them to successfully design and
              implement Lean Manufacturing or the Toyota Production System
              (TPS). We are experienced in engaging with clients at all
              organizational levels. Our broad Lean expertise and ability to
              adapt Lean concepts and methodologies to the needs of each
              specific business is what differentiates us from other
              organizations.
            </p>
            <p className="text-gray-700 text-lg font-light tracking-wide">
              Our consultants are experienced hands-on Senior Lean practitioners
              with extensive experience assessing and applying Lean in diverse
              business sectors: Healthcare, Finance, Education, Government/
              Services, Food, Finance and Manufacturing. We have a good approach
              for identifying and eliminating waste in operations through
              continuous improvement for doing everything more efficiently,
              reducing the cost of operating the system and fulfilling the
              customers desire for maximum value at the lowest price.
            </p>
          </div>

          <div className="flex justify-center md:justify-end lg:ml-12  ">
            <p className="text-gray-700 text-lg mb-6 font-light tracking-wide">
              Lean is a systematic method for the elimination of wastes within a
              process. These include wastes created through unevenness in
              workloads, overburden and any work that does not add value. From
              the point of view of the customer who consumes a service or
              product, “value” is any process or action that a client would be
              willing to pay for. In essence, lean is focus on making obvious
              what appends value by decreasing everything else.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full flex items-center justify-center hidden md:flex">
        <div
          className="border-r-2 border-gray-500 h-96  ml-8  font-extrabold"
          style={{ marginTop: "-28rem", height: "30rem" }}
        ></div>
      </div>
     </div>

     <div className="lg:py-16 py-4">
        <div className="text-center text-xl md:text-xl lg:text-3xl font-extrabold">
        Advantages of Lean Manufacturing
        </div>

        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 mt-4 lg:mt-12">
          <ol className="list-decimal text-gray-700 text-lg mb-6 font-light tracking-wide ">
            <li>Inventory Reduction 50-90%</li>
            <li>Increased Productivity 65%</li>
            <li>Floor Space required to make the product reduced by 60%</li>
            <li>Reduction in Scrap and Rework by 90%</li>
            <li>Increase profit 50%</li>
            <li>Lead Time Reduction from order entry to delivery of product from weeks to days</li>
            <li>Reduce Changeover from hours to minutes</li>
            <li>Throughput rate 100%</li>
            <li>Build to Order vs. Build to Forecast</li>
          </ol>
          <div className=" text-sm md:text-xl lg:text-xl font-normal">
          Contact Us or Call:+234(0)9099677750.
          </div>
        </div>
     </div>
    </div>
  );
}
