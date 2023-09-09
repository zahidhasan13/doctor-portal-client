import { useContext } from "react";
import Calendar from "react-calendar";
import chair from "../../assets/images/chair.png";
import "react-calendar/dist/Calendar.css";
import { Link, useLoaderData } from "react-router-dom";
import './Appointment.css'
import { AuthContext } from "../../provider/AuthProvider";

const Appointment = () => {
  const {selectDate, setselectDate} = useContext(AuthContext);
  const appointment = useLoaderData();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[selectDate && selectDate.getDay()];
  const month =
    selectDate && selectDate.toLocaleString("default", { month: "long" });
  const day = selectDate && selectDate.getDate();
  const year = selectDate && selectDate.getFullYear();

  return (
    <div className="max-w-screen-xl mx-auto mt-8 lg:mt-0 pt-12">
      <div className="appointment">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 mx-4 lg:mx-0 lg:px-48 lg:py-10">
        <div className="flex justify-center lg:block">
          <Calendar onChange={setselectDate} value={selectDate} />
        </div>
        <div>
          <img src={chair} alt="" />
        </div>
      </div>
      </div>
      {
        dayOfWeek === "Friday" ? <p className="text-4xl text-[#19D3AE] font-bold mt-20 p-20 border-2 border-[#19D3AE] text-center mx-4 lg:mx-0">Weekend Day, Service not Available</p> : <div>
        {selectDate && (
          <>
          <h4 className="text-2xl font-medium text-[#19D3AE] text-center my-20 mx-4 lg:mx-0">
            Available Services on <br /> {`${dayOfWeek}, ${day} ${month} ${year}`}
          </h4>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {
              appointment.map((app, index) => <div key={index} className="p-4 shadow-md text-center space-y-3">
                  <h3 className="text-xl text-[#19D3AE] font-bold">{app.title}</h3>
                  <h3 className="text-2xl font-bold">{app.time}</h3>
                  <p>Price: ${app.price}</p>
                  <p>{app.space} spaces are Available</p>
                  <Link to={`/appointment/${app._id}`}><button className=" mt-4 px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#12D0DC] hover:bg-[#0aacb8] focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">Book Appointment</button></Link>
              </div>)
          }
        </div></>
        )}
      </div>
      }
      
    </div>
  );
};

export default Appointment;
