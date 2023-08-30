import img1 from "../../../assets/images/doctor-small.png";
import "./AppointmentSec.css";
const AppointmentSec = () => {
  return (
    <div className="appointment pt-16 pb-[168px] my-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 relative">
        <div>
          <img src={img1} alt="" className="absolute -top-40 left-0" />
        </div>
        <div className="space-y-10">
          <h4 className="text-md font-bold uppercase text-[#12D0DC]">
            appointment
          </h4>
          <h3 className="text-3xl text-white">Make an appointment Today</h3>
          <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
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

export default AppointmentSec;
