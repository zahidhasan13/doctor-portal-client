import chair from "../../../assets/images/chair.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner lg:py-16 pt-12">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 order-2 lg:order-1">
          <h1 className="text-5xl font-bold text-[#3A4256] mb-7">
            Your New Smile Starts <br /> Here
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg dark:text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#12D0DC] hover:bg-[#0aacb8] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </a>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex order-1 lg:order-2 mb-16 lg:mb-0">
          <img src={chair} alt="mockup" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
