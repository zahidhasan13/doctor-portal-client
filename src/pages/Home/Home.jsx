import Address from "./Address/Address";
import AppointmentSec from "./AppointmentSec/AppointmentSec";
import Banner from "./Banner/Banner";
import ServiceSec from "./ServiceSec/ServiceSec";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Address></Address>
            <ServiceSec></ServiceSec>
            <AppointmentSec></AppointmentSec>
        </>
    );
};

export default Home;