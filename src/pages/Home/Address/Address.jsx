import { HiOutlineClock, HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
const Address = () => {
    return (
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 max-w-screen-xl mx-auto my-8">
            <div className="bg-gradient-to-r from-[#16D2BE] to-[#11D0DE] flex items-center py-8 px-4 rounded-md text-white">
                <div className="text-6xl mr-4">
                    <HiOutlineClock></HiOutlineClock>
                </div>
                <div>
                    <h4 className="text-lg font-bold">Opening Hours</h4>
                    <p>Start: 9:30 am - End: 10:30 pm</p>
                </div>
            </div>
            <div className="bg-[#3A4256] flex items-center py-8 px-4 rounded-md text-white">
                <div className="text-6xl mr-4">
                    <HiOutlineLocationMarker></HiOutlineLocationMarker>
                </div>
                <div>
                    <h4 className="text-lg font-bold">Visit our location</h4>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#16D2BE] to-[#11D0DE] flex items-center py-8 px-4 rounded-md text-white">
                <div className="text-6xl mr-4">
                    <HiPhone></HiPhone>
                </div>
                <div>
                    <h4 className="text-lg font-bold">Contact us now</h4>
                    <p>+8801234-5678987</p>
                </div>
            </div>
        </div>
    );
};

export default Address;