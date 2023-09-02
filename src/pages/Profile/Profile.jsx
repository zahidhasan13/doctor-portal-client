import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Profile = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then(() => {});
  };
  return (
    <div className="max-w-screen-xl mx-auto space-y-4 mt-4">
      <h3 className="text-4xl font-bold text-center text-[#19D3AE]">My Profile</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 lg:space-x-8 mx-4 lg:mx-0">
        <div className="col-span-1 border-2 border-[#11D0DE] p-4 space-y-4 order-2 lg:order-1">
            <Link to="/myappointment" className="block text-white bg-gradient-to-r from-[#16D2BE] to-[#11D0DE] hover:bg-gradient-to-r hover:from-[#11D0DE] hover:to-[#16D2BE] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-to-r dark:from-[#16D2BE] dark:to-[#11D0DE] dark:hover:bg-primary-700 dark:focus:ring-primary-800">My Appointment</Link>
          <button
            onClick={handleLogOut}
            className="w-full text-white bg-gradient-to-r from-[#16D2BE] to-[#11D0DE] hover:bg-gradient-to-r hover:from-[#11D0DE] hover:to-[#16D2BE] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-to-r dark:from-[#16D2BE] dark:to-[#11D0DE] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Log Out
          </button>
        </div>
        <div className="col-span-2 border-2 border-[#11D0DE] p-4 space-y-4 order-1 lg:order-2 mb-4 lg:mb-0">
          <div>
            {user?.photoURL ? (
              <img src={user?.photoURL} alt="" className="rounded-full border-2 border-[#11D0DE]"/>
            ) : (
              <FaUserDoctor className="text-6xl text-gray-600 bg-gray-400 rounded-full p-1 w-32 h-32" />
            )}
          </div>
          <h2>Name: <span className="font-bold">{user?.displayName}</span></h2>
          <p>Email: <span className="font-bold">{user?.email}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
