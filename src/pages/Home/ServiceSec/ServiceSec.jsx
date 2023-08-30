import img1 from "../../../assets/images/fluoride.png";
import img2 from "../../../assets/images/cavity.png";
import img3 from "../../../assets/images/whitening.png";
import img4 from "../../../assets/images/treatment.png";
const ServiceSec = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-16">
      <h4 className="text-center text-md font-bold uppercase text-[#12D0DC]">our services</h4>
      <h3 className="text-center text-3xl">Services We Provide</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 my-16 mx-4">
        <div className="text-center shadow-md p-4">
          <img src={img1} alt="" className="mx-auto"/>
          <h4 className="text-md font-semibold mt-8 mb-2">Fluoride Treatment</h4>
          <p>
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
        <div className="text-center shadow-md p-4 my-16 lg:my-0">
          <img src={img2} alt="" className="mx-auto"/>
          <h4 className="text-md font-semibold mt-8 mb-2">Fluoride Treatment</h4>
          <p>
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
        <div className="text-center shadow-md p-4">
          <img src={img3} alt="" className="mx-auto"/>
          <h4 className="text-md font-semibold mt-8 mb-2">Fluoride Treatment</h4>
          <p>
            Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
            has been the
          </p>
        </div>
      </div>
      {/* Treatment Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:mx-32 mt-32 mx-4">
        <div>
            <img src={img4} alt="" className="lg:w-[490px] w-[300px] lg:mr-10 rounded-md mb-8 lg:mb-0 mx-auto"/>
        </div>
        <div className="lg:ml-10 space-y-8">
            <h2 className="text-5xl font-bold text-[#3A4256]">Exceptional Dental Care, on Your Terms</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
            <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#12D0DC] hover:bg-[#0aacb8] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceSec;
