import Navbar from "@/components/Navigation/Navbar";
import Link from "next/link";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Services() {
  return (
    <div>
      <section className="bg-yellow-600 w-full h-60 lg:h-96">
        <Navbar></Navbar>
        
        <div className="lg:mt-32  mt-12 font-serif text-center">
          <div className="text-4xl md:text-xl lg:text-7xl text-white  font-extrabold">
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
            <div className="flex flex-col font-mono justify-center">
              <p className="text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide">
                GLODARIS is an international consulting firm that specializes in
                working with companies to enable them to successfully design and
                implement Lean Manufacturing or the Toyota Production System
                (TPS). We are experienced in engaging with clients at all
                organizational levels. Our broad Lean expertise and ability to
                adapt Lean concepts and methodologies to the needs of each
                specific business is what differentiates us from other
                organizations.
              </p>
              <p className="text-gray-700 text-sm font-light tracking-wide lg:text-lg">
                Our consultants are experienced hands-on Senior Lean
                practitioners with extensive experience assessing and applying
                Lean in diverse business sectors: Healthcare, Finance,
                Education, Government/ Services, Food, Finance and
                Manufacturing. We have a good approach for identifying and
                eliminating waste in operations through continuous improvement
                for doing everything more efficiently, reducing the cost of
                operating the system and fulfilling the customers desire for
                maximum value at the lowest price.
              </p>
            </div>

            <div className="flex font-mono justify-center md:justify-end lg:ml-12 ">
              <p className="text-gray-700 text-sm mb-6 font-light tracking-wide lg:text-lg ">
                Lean is a systematic method for the elimination of wastes within
                a process. These include wastes created through unevenness in
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
            style={{ marginTop: "-36rem", height: "40rem" }}
          ></div>
        </div>
      </div>

      <div className="lg:py-16 py-4 ">
        <div className="text-center text-xl font-serif md:text-xl lg:text-3xl font-extrabold">
          Advantages of Lean Manufacturing
        </div>

        <div className="max-w-7xl mx-auto font-mono px-8 sm:px-6 lg:px-8 mt-4 lg:mt-12">
          <ol className="list-decimal text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide ">
            <li>Inventory Reduction 50-90%</li>
            <li>Increased Productivity 65%</li>
            <li>Floor Space required to make the product reduced by 60%</li>
            <li>Reduction in Scrap and Rework by 90%</li>
            <li>Increase profit 50%</li>
            <li>
              Lead Time Reduction from order entry to delivery of product from
              weeks to days
            </li>
            <li>Reduce Changeover from hours to minutes</li>
            <li>Throughput rate 100%</li>
            <li>Build to Order vs. Build to Forecast</li>
          </ol>
          <div className=" text-sm font-mono md:text-xl lg:text-xl font-normal">
            Contact Us or Call:+234(0)9099677750.
          </div>
        </div>
      </div>

      <div className="lg:py-16 py-4">
        <div className="text-center text-lg md:text-xl lg:text-2xl font-extrabold font-serif">
          ✔ Lean Consulting Services
        </div>

        <div className="  lg:px-8 mt-4 lg:mt-12">
          <div className="flex justify-center md:justify-end font-mono lg:text-lg  text-gray-700 px-4 text-sm mb-6 font-normal tracking-wide">
            Our model for Lean Transformation is different than most other lean
            consulting firms. Our value add is in the coaching and training we
            provide to facilitate culture change while developing our clients'
            internal competencies. We are not interested in providing armies of
            consultants to lead improvements and thus make our clients fully
            dependent on us. Instead, we build our clients' capability by
            creating daily management and daily kaizen systems that will
            self-sustain. This approach fits in with principle 1 of the Toyota
            Way: "Base your management decisions on a long-term philosophy, even
            at the expense of short-term financial goals.” While our competitors
            may end up with more revenue from an engagement than we might in the
            short term, our clients are happier and gladly recommend us again
            and again.
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 mt-4 lg:mt-12">
          <ul className="list-disc text-gray-700 font-mono text-sm lg:text-lg mb-6 font-light tracking-wide ">
            <li>Lean Transformation</li>
            <li>Lean Six Sigma Transformation</li>
            <li>Lean Assessment</li>
            <li>Lean Coaching</li>
            <li>Lean Facilitator</li>
            <li>Lean Strategy Deployment</li>
            <li>5S Workshops</li>
            <li>Lean Layout / One Piece Flow</li>
            <li>Quick Changeover</li>
            <li>Pull Systems / Kanban Implementation</li>
            <li>Lean Product Development</li>
            <li>Six Sigma and Statistical Analysis / Design of Experiments</li>
            <li>Root Cause Analysis</li>
            <li>Lean Metrics / Visual Management</li>
          </ul>
        </div>
      </div>

      <div className="lg:py-16 py-4">
        <div className="text-center text-lg md:text-xl font-serif lg:text-2xl font-extrabold">
          ✔ Lean Transformation
        </div>

        <div className=" px-12  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-lg  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            Lean Transformation: Phase 1 (3 - 6 months)
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 sm:px-6 font-mono lg:px-8 mt-2 lg:mt-4">
          <ul className="list-disc text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide ">
            <li>
              Strategy Deployment / Perform an Assessment / Train Executive Team
            </li>
            <li>
              Identify vision, goals, True North metrics, Key value streams.
              Identify resources and develop detailed plan.
            </li>
            <li>
              Identify, Train, and Coach a Core Team of internal change agents.
            </li>
            <li>
              Develop internal group of individuals who will lead the change and
              become coaches, teachers, and facilitators.
            </li>
            <li>
              Select and improve key pilot areas through kaizen activities and
              projects
            </li>
            <li>
              Impact highly visible areas within the company, and build momentum
            </li>
            <li>Perform Value Stream Mapping on key product/service lines</li>
            <li>
              Identify needed kaizen activities and daily kaizen targets through
              VSM and a 4-6 month detailed plan.
            </li>
            <li>
              Perform team kaizen activities and projects to execute VSM plans.
            </li>
            <li>
              Create lean value streams. Develop internal problem solving
              capabilities for daily kaizen and daily management
            </li>
            <li>
              Train Operations front-line employees and supervisors with a “Lean
              101” course
            </li>
            <li>Begin to drive change where the work happens.</li>
          </ul>
        </div>

        <div className=" px-12  lg:px-8 mt-4 lg:mt-12">
          <div className="flex  lg:text-lg font-mono  text-gray-700 text-sm mb-6 font-bold tracking-wide">
            Lean Transformation: Phase 2 (6 - 8 Months)
          </div>
        </div>

        <div className="max-w-7xl font-mono mx-auto px-8 sm:px-6 lg:px-8 mt-2 lg:mt-4">
          <ul className="list-disc text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide ">
            <li>Strategy Deployment / Perform an Assessment</li>
            <li>
              Identify vision, goals, metrics, and key areas of opportunity
              within support functions and other value streams
            </li>
            <li>Identify, Train, and Coach additional lean change agents.</li>
            <li>
              Build a larger internal knowledge base of individuals who will
              become coaches, teachers, and facilitators.
            </li>
            <li>Perform Cross-Functional VSM of key support functions</li>
            <li>
              Identify needed kaizen activities and daily kaizen targets through
              VSM
            </li>
            <li>
              Perform team kaizen activities and projects to execute VSM plans.
            </li>
            <li>
              Create lean support value streams. Develop internal problem
              solving capabilities for daily kaizen and daily mgmt.
            </li>
            <li>
              Perform Value Stream Mapping and kaizen activities on additional
              core value streams.
            </li>
            <li>Identify and execute kaizen activities based on VSM.</li>
            <li>
              Train Support Function employees and supervisors with a “Lean 101”
              course
            </li>
            <li>
              Begin to drive change where the work happens for support /
              administrative functions.
            </li>
          </ul>
        </div>
      </div>

      <div className="px-4  lg:px-8 lg:py-16 py-4">
        <div className="text-center text-lg md:text-xl font-serif lg:text-2xl font-extrabold">
          ✔ Lean Improvement Model
        </div>

        <div className=" px-4  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-lg  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            <ol className="list-decimal">
              <li>Strategy development</li>
              <li>Annually, looks out 1 year</li>
              <li>Value stream mapping</li>
              <li>1-2 Times/year</li>
              <li>Kaizen Events/Projects</li>
              <li>4-12 times' per value stream</li>
              <li>Daily Kizen</li>
              <li>Continue Improvement, Daily</li>
            </ol>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-6 font-mono lg:px-8 mt-2 lg:mt-4">
          <ul className="list-disc text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide ">
            <li>
              Strategy development creates the key goals/initiatives for the
              year
            </li>
            <li>
              VSM sets the direction and detailed goals for kaizen activities
            </li>
            <li>
              Kaizen Events , DMAIC projects, and Daily kaizen are the means by
              which the goals are met.
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:py-16 py-4">
        <div className="text-center text-lg md:text-xl font-serif lg:text-2xl font-extrabold">
          ✔ Lean Assessment
        </div>

        <div className=" px-4  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-lg  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            A Lean Assessment is the first step to understanding where your
            organization currently stands, how it can benefit from lean
            transformation, and what major activities need to be done to
            transform your organization into a lean enterprise. GLODARIS
            consultants will spend time on-site with your organization
            interviewing key personnel, gathering data, and observing
            operations. Then, we will conduct an analysis and present a report
            to you.
          </div>
        </div>

        <div className="max-w-7xl font-mono mx-auto px-8 sm:px-6 lg:px-8 mt-2 lg:mt-4">
          <ul className="list-disc text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide ">
            <li>
              Lean Assessment Scores in a range of key areas including visual
              management, safety, scheduling, material flow, inventory, lean
              culture and teamwork, equipment maintenance, flexibility and
              responsiveness, quality, and supply chain.
            </li>
            <li>Detailed Financial Analysis and Impact</li>
            <li>Resource Recommendations</li>
            <li>Recommendations for Appropriate Lean Metrics</li>
            <li>Customized Roadmap to Lean Transformation</li>
            <li>
              A Basis from Which to Begin Strategy Deployment and Value Stream
              Mapping
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:py-16 py-4">
        <div className="text-center text-lg md:text-xl font-serif lg:text-2xl font-extrabold">
          ✔ Lean Coaching
        </div>

        <div className=" px-4  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-lg  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            In order to sustain a lean culture, it is vital that all employees
            in the organization have a common language of problem solving. The
            Toyota Business Practices approach, known also as A3 Problem
            Solving, must become the problem solving mindset. This thought
            process must be used in any effort to improve from current condition
            to target condition, whether it is at a strategy level or tactical,
            front-line level. Our approach to coaching utilizes the Improvement
            Kata / Coaching Kata methodology
          </div>

          <div className="flex lg:text-sm  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            Lean Coaching Involves
          </div>
        </div>

        <div className="max-w-7xl font-mono mx-auto px-8 sm:px-6 lg:px-8 mt-2 lg:mt-4">
          <ul className="list-disc text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide ">
            <li>
              One on One Coaching through the Entire Problem Solving /
              Improvement Process
            </li>
            <li>
              Defining the Problem: Gap Between Current Condition and Target
              Condition
            </li>
            <li>
              Identifying the Obstacles: What is Preventing Us from Reaching the
              Target Condition?
            </li>
            <li>
              Step By Step Analysis and PDCA Experimentation to Narrow Down to
              the Critical Obstacles
            </li>
            <li>
              Identifying and Testing Countermeasures to Achieve the Target
              Condition
            </li>
            <li>Identifying the Next Steps in Following Up</li>
            <li>
              Modeling Problem Solving Thinking and Daily Management for
              Managers
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:py-16 py-4">
        <div className="text-center text-lg md:text-xl font-serif lg:text-2xl font-extrabold">
          ✔ Lean Strategy Deployment
        </div>

        <div className=" px-4  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-lg  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            Strategy Deployment, or, as it is known in Japanese, hoshinkanri, is
            the process by which an organization identifies the most important
            breakthrough goals and initiatives and then deploy them through an
            iterative process of cascading through the organization. This
            ensures that everyone is working on the right things that will
            achieve the company vision and goals.
          </div>

          <div className="flex lg:text-sm  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            Lean Strategy Deployment Involves
          </div>
        </div>

        <div className="max-w-7xl font-mono mx-auto px-8 sm:px-6 lg:px-8 mt-2 lg:mt-4">
          <ul className="list-disc text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide ">
            <li>Assessing the Current Situation</li>
            <li>
              Holding Strategy Sessions with Senior Management to Identify Areas
              of Focus and Key Goals and Initiatives
            </li>
            <li>
              Coaching Senior Management Through the A3 Process by Which They
              Identify Obstacles and an Action Plan to Achieve the Goals
            </li>
            <li>
              Facilitating Sessions with the Next Levels of Management to
              Identify Their Goals and Metrics in Accordance with the High Level
              Plans
            </li>
            <li>
              Coaching the Managers through the A3 Process and the Development
              of Metrics for Their Areas of Responsibility
            </li>
            <li>
              Developing Daily Management Systems with Metrics and Targets
            </li>
            <li>
              Instituting Front-Line Problem Solving in Accordance with the
              Daily Management System
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:py-16 py-4">
        <div className="text-center text-lg md:text-xl font-serif lg:text-2xl font-extrabold">
          ✔ Lean Facilitator (Kaizen Event)
        </div>

        <div className=" px-4  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-lg  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            Kaizen, which means "good change" in Japanese, is a philosophy of
            eliminating waste by making small changes for the better. Kaizen
            events are rapid improvement activities during which a team, led by
            a lean expert, analyzes and improves a process toward a particular
            goal using a problem solving process. Kaizen events are typically 3
            to 5 days in length.
          </div>

          <div className="flex lg:text-sm  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            Kaizen Event Involve?
          </div>
        </div>

        <div className="max-w-7xl font-mono mx-auto px-8 sm:px-6 lg:px-8 mt-2 lg:mt-4">
          <ul className="list-disc text-gray-700 text-sm lg:text-lg mb-6 font-light tracking-wide ">
            <li>
              Preparation including area and team selection, gathering
              background information, and goal setting.
            </li>
            <li>
              Training for the team in Particular Lean Basics Including Problem
              Solving, 7 Wastes, and other relevant methods and tools.
            </li>
            <li>
              Analysis of Current State Including Observation and Collection of
              Facts, Data, and Metrics.
            </li>
            <li>Brainstorming to Identify Critical Wastes and Obstacles</li>
            <li>
              Brainstorming to Identify Countermeasures and Improvement Ideas.
            </li>
            <li>Development of Future State Process and Standard Work</li>
            <li>Testing and Implementing New Process</li>
            <li>Report Out and Celebration</li>
            <li>Follow Up / Additional Actions / Daily Management</li>
          </ul>
        </div>
      </div>

      <div className="lg:py-16 py-4">
        <div className="text-center text-lg md:text-xl font-serif lg:text-2xl font-extrabold">
          ✔ Lean Facilitator (Kaizen Event)
        </div>
        <div className=" px-4  lg:px-8 mt-4 lg:mt-12">
          <div className="flex lg:text-sm  text-gray-700 font-mono text-sm mb-6 font-bold tracking-wide">
            We are also available for speaking engagements.
          </div>
        </div>

        <div className="flex flex-col font-mono md:flex-row mt-12 ml-4">
          <div className="w-full md:w-2/2 lg:ml-12">1st image</div>

          <div className="w-full md:w-2/2 lg:ml-12">2nd image</div>
        </div>
      </div>

      <div className="text-center py-12 bg-yellow-600 font-serif px-8">
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
