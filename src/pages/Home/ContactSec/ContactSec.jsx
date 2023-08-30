import "./ContactSec.css";
const ContactSec = () => {
  return (
    <div className="contact-section mt-32">
      <div className="py-8 lg:py-16 lg:px-40 px-20 mx-auto max-w-screen-md">
        <h4 className="text-md font-bold uppercase text-[#12D0DC] text-center">
          appointment
        </h4>
        <h3 className="text-3xl text-center text-white">
          Stay connected with us
        </h3>
        <form action="#" className="space-y-4 mt-16">
          <div>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Subject"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#19D3AE] sm:w-fit hover:bg-[#19D3AE] focus:ring-4 focus:outline-none focus:ring-[#19D3AE] dark:bg-[#19D3AE] dark:hover:bg-[#19D3AE] dark:focus:ring-[#19D3AE]"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactSec;
