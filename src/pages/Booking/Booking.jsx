import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Booking = () => {
    const booking = useLoaderData();
    const {user, selectDate} = useContext(AuthContext);
    console.log(user, selectDate);
    return (
        <div className="max-w-screen-xl mx-auto">
            <h2 className="text-2xl font-bold text-[#11D0DE] text-center my-8">Book Appointment: {booking.title}</h2>
            <form>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              defaultValue={user?.displayName}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="name"
            >
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="text"
              name="date"
              defaultValue={selectDate?.toDateString()}
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="time"
            >
              Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="time"
              type="text"
              defaultValue={booking.time}
              readOnly
            />
          </div>
          <div>
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="name"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              defaultValue={booking.price}
              readOnly
            />
          </div>
        </div>
        <input type="submit" value="Book Service" className="w-full bg-[#11D0DE] px-5 py-2 rounded my-4 text-white font-bold cursor-pointer"/>
      </form>
        </div>
    );
};

export default Booking;