import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserDoctor } from "react-icons/fa6";

const Profile = () => {
    const {logOut, user} = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .then(() =>{})
    }
    return (
        <div className="max-w-screen-xl mx-auto space-y-4">
            <h3 className="text-4xl">Profile</h3>
            <div>
                {
                    user?.photoURL ? <img src={user?.photoURL} alt="" /> : <FaUserDoctor className="text-6xl text-gray-600 bg-gray-400 rounded-full p-1"/>
                }
            </div>
            <h2>Name: {user?.displayName}</h2>
            <p>Email: {user?.email}</p>
            <button onClick={handleLogOut} className="text-white bg-gradient-to-r from-[#16D2BE] to-[#11D0DE] hover:bg-gradient-to-r hover:from-[#11D0DE] hover:to-[#16D2BE] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-to-r dark:from-[#16D2BE] dark:to-[#11D0DE] dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log Out</button>
        </div>
    );
};

export default Profile;