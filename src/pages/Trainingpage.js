import Navbar from "@/components/Navigation/Navbar";

const courses = [
   
  {
    id: 1,
    name: "Lean Manufacturing Certification: Certified Lean Practitioner",
    price: "N1,080,000.00",
    dates:
      "March 12th - 19th , 21st -27th April 9th - 16th, 23rd - 30th May 21 - 28th June 18 - 25th July 10th - 17th",
    location:
      "Churchgate Tower C, 4th floor, Plot 473, Constitution Avenue, Central Business District Abuja FCT",
    description: "VIEW",
  },
  {
    id: 2,
    name: "Lean Six Sigma Black Belt Certification (Manufacturing)",
    price: "N1,098,500.00",
    dates:
      "March 12th - 19th , 21st -27th April 9th - 16th, 23rd - 30th May 21 - 28th June 18 - 25thJuly 10th - 17th",
    location:
      "Churchgate Tower C, 4th floor, Plot 473, Constitution Avenue, Central Business District Abuja FCT",
    description: "VIEW",
  },
  {
    id: 3,
    name: "Lean Six Sigma Black Belt Certification: (Healthcare/Admin/Service)",
    price: "N1,098,500.00",
    dates:
      "Dates March 12th - 19th , 21st -27th April 9th - 16th, 23rd - 30th May 21 - 28th June 18 - 25thJuly 10th - 17th",
    location:
      "Churchgate Tower C, 4th floor, Plot 473, Constitution Avenue, Central Business District Abuja FCT",
    description: "VIEW",
  },
  {
    id: 4,
    name: "Lean Six Sigma Green Belt Certification (Manufacturing) :Certified Green Belt",
    price: "N780,000.00",
    dates:
      "Dates March 12th - 19th , 21st -27th April 9th - 16th, 23rd - 30th May 21 - 28th June 18 - 25th July 10th - 17th",
    location:
      "Churchgate Tower C, 4th floor, Plot 473, Constitution Avenue, Central Business District Abuja FCT",
    description: "VIEW",
  },

  {
    id: 5,
    name: "Lean Six Sigma Green Belt Certification (Healthcare/Admin/Service) :Certified Green Belt",
    price: "N780,000.00",
    dates:
      "Dates March 12th - 19th , 21st -27th April 9th - 16th, 23rd - 30th May 21 - 28th June 18 - 25th July 10th - 17th",
    location:
      "Churchgate Tower C, 4th floor, Plot 473, Constitution Avenue, Central Business District Abuja FCT",
    description: "VIEW",
  },
  {
    id: 6,
    name: "Lean Healthcare Certificate Program",
    price: "N508,000.00",
    dates:
      "Dates March 12th - 19th , 21st -27th April 9th - 16th, 23rd - 30th May 21 - 28th June 18 - 25th July 10th - 17th",
    location:
      "Churchgate Tower C, 4th floor, Plot 473, Constitution Avenue, Central Business District Abuja FCT",
    description: "VIEW",
  },
  {
    id: 7,
    name: "Joshuaviawn",
    price: "N53,030.00",
    dates:
      "Dates March 12th - 19th , 21st -27th April 9th - 16th, 23rd - 30th May 21 - 28th June 18 - 25th July 10th - 17th",
    location: "America",
    description: "VIEW",
  },
];

export default function Trainingpage() {
  return (
    <div>
      <section className="bg-yellow-600 w-full h-60 lg:h-96">
        <Navbar></Navbar>

        <div className="lg:mt-32  mt-12 font-serif text-center">
          <div className="text-4xl md:text-xl lg:text-7xl text-white  font-extrabold">
            LEAN SIX SIGMA TRAINING
          </div>

          <div className=" text-sm md:text-xl lg:text-2xl font-light">
            Lean and Six Sigma Training
          </div>
        </div>

        <div className=" py-12 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col font-mono justify-center">
                <p className="text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide">
                  At GLODARIS - We understand training is the backbone of any
                  Continuous Improvement environment, which is why GLODARIS
                  offers Lean Six Sigma training. By taking one of our training
                  courses, you will learn the fundamental tools and techniques
                  of Lean and 6 Sigma, and how they can be applied to save you
                  money and time while improving your company as a whole. Our
                  Lean and six sigma training is open to all, from beginners
                  with no knowledge of Lean6 sigma, to managers with several
                  years of experience with the methodology
                </p>
                <p className="text-gray-700 text-sm font-light tracking-wide lg:text-lg">
                  Our Lean Six Sigma training team offers a full range of
                  programs that can be tailored to fit the specific needs of
                  your organization. We are constantly applying and refining the
                  latest training techniques and methods to ensure relevancy in
                  the rapidly changing face of business, so your company remains
                  at the forefront of your field, and operates at the peak of
                  efficiency.
                </p>
                <p className="text-gray-700 text-sm mb-6 font-light tracking-wide lg:text-lg mt-8">
                  It is well known that some of continuous improvement programs
                  fail. The reason? Organizations tend to focus on short-term
                  goals (for example: making a profit immediately) instead of
                  seeking what is best for them in the long term. When
                  implementing a continuous improvement program, first choose
                  which methodology to use (Lean, Six Sigma, Total Quality
                  Management, or others) and make sure to focus on meeting
                  long-term goals.
                </p>
                <p className="text-gray-700 text-sm mb-6 font-light tracking-wide lg:text-lg ">
                  We offer specialized training options including in-house and
                  class based training as well as lean certification. Each
                  training session takes lean six sigma principals and molds
                  them to fit the unique needs of your organization. Our
                  training is a comprehensive, results-driven event that will
                  produce amazing results for you and your team.
                </p>
              </div>

              <div className="flex font-mono justify-center md:justify-end lg:ml-12 ">
                <p className="text-gray-700 text-sm mb-6 font-light tracking-wide lg:text-lg">
                  GLODARIS knows you are busy running your business, and it can
                  be hard to make your schedule accommodate a set training
                  schedule, so we offer great flexibility in both dates and
                  locations for training. Whether you are starting or moving
                  ahead with your Lean Process Improvements, our blended
                  learning will be valuable in building your lean knowledge and
                  capabilities.
                </p>
              </div>
            </div>
          </div>
          <div className="h-full flex items-center justify-center hidden md:flex">
            <div
              className="border-r-2 border-gray-500 h-96  ml-8  font-extrabold"
              style={{ marginTop: "-68rem", height: "70rem" }}
            ></div>
          </div>
        </div>

        <div className="text-center text-light font-mono text-sm lg:text-xl">
          Contact Us or Call: +234(0) 96233431, +234(0)9099677750.
        </div>

        <div className="overflow-x-auto px-12 hidden md:block">
          <table className="table-auto  w-full text-left text-xs sm:text-sm md:text-base ">
            <thead>
              <tr>
                <th class="px-2 sm:px-4 py-2 sm:py-3 text-xs text-gray-700">
                  SN
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3  text-xs text-gray-700">
                  Course Name
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3 text-xs text-gray-700">
                  Course Price
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3 text-xs text-gray-700">
                  Course Date
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3 text-xs text-gray-700">
                  Course Location
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3 text-xs text-gray-700">
                  View Description
                </th>
              </tr>
            </thead>
            
              <tbody className="font-mono text-xs ">
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td className="border px-4 py-2">{course.id}</td>
                    <td className="border px-4 py-2">{course.name}</td>
                    <td className="border px-4 py-2 ">{course.price}</td>
                    <td className="border px-4 py-2  ">{course.dates}</td>
                    <td className="border px-4 py-2">{course.location}</td>
                    <td className="border px-4 py-2">{course.description}</td>
                  </tr>
                ))}
              </tbody>
            
          </table>
          
        </div>

{/* responsive */}
        <div className="overflow-x-auto grid grid-cols-1 gap-4 md:hidden">
          <table className="table-auto w-full text-left text-xs sm:text-sm md:text-base ">
            <thead>
              <tr>
                <th class="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-700">
                  SN
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-700">
                  Course Name
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-700">
                  Course Price
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-700">
                  Course Date
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-700">
                  Course Location
                </th>
                <th class="px-2 sm:px-4 py-2 sm:py-3 font-medium text-gray-700">
                  View Description
                </th>
              </tr>
            </thead>
            
              <div class="grid grid-cols-1  md:grid-cols-2 gap-4">
              <tbody >
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td className="border px-4 py-2">{course.id}</td>
                    <td className="">
                        <div class="bg-gray-100 p-4 h-screen overflow-y-scroll">
                        {course.name}
                        </div>
                        
                    
                    </td>

                    <td className="">
                        <div class="bg-gray-100 p-4 h-screen overflow-y-scroll">
                        {course.price}
                        </div>
                        
                    
                    </td>
                    <td className="">
                        <div class="bg-gray-100 p-4 h-screen overflow-y-scroll">
                        {course.dates}
                        </div>
                        
                    
                    </td>
                    <td className="">
                        <div class="bg-gray-100 p-4 h-screen overflow-y-scroll">
                        {course.location}
                        </div>
                        
                    
                    </td>
                    <td className="">
                        <div class="bg-gray-100 p-4 h-screen overflow-y-scroll">
                        {course.description}
                        </div>
                        
                    
                    </td>
                    {/* <td className="border px-4 py-2 ">{course.price}</td>
                    <td className="border px-4 py-2  ">{course.dates}</td>
                    <td className="border px-4 py-2">{course.location}</td>
                    <td className="border px-4 py-2">{course.description}</td> */}
                  </tr>
                ))}
              </tbody>
              </div>
            
          </table>
          
        </div>

          

      </section>
    </div>
  );
}
