import Address from "./Address/Address";
import AppointmentSec from "./AppointmentSec/AppointmentSec";
import Banner from "./Banner/Banner";
import ServiceSec from "./ServiceSec/ServiceSec";
import Testmonial from "./Testmonial/Testmonial";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Address></Address>
            <ServiceSec></ServiceSec>
            <AppointmentSec></AppointmentSec>
            <Testmonial></Testmonial>
        </>
    );
};

export default Home;