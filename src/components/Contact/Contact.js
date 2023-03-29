import { useState } from "react";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // handle form submission logic here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  return (
    <section className="w-full py-4 bg-blue-500">
      <div>
        <div className=" flex flex-col md:flex-row mt-12">
          <div className="w-full md:w-2/2 lg:ml-12 px-8 lg:px-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={handleChange}
                    value={formData.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                 Your Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                  value={formData.subject}
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  rows="5"
                  onChange={handleChange}
                  value={formData.message}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-2/2 lg:ml-12">
            <div className="w-full h-96">map</div>
          </div>
        </div>
      </div>
    </section>
  );
}
