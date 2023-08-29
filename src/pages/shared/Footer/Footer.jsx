import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='lg:flex lg:justify-between max-w-screen-xl mx-auto py-16 space-y-16 lg:space-y-0 pl-4 lg:pl-0'>
                <div>
                    <h4 className='text-xl text-gray-400 font-medium uppercase'>Service</h4>
                    <ul className='textt-md text-[#3A4256]'>
                        <li>Emergency Checkup</li>
                        <li>Monthly Checkup</li>
                        <li>Weekly Checkup</li>
                        <li>Deep Checkup</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl text-gray-400 font-medium uppercase'>Oral Health</h4>
                    <ul className='textt-md text-[#3A4256]'>
                        <li>Flouride Treatment</li>
                        <li>Cavity Filling</li>
                        <li>Teath Whitening</li>
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl text-gray-400 font-medium uppercase'>Our Address</h4>
                    <ul className='textt-md text-[#3A4256]'>
                        <li>New York - 101010 Hudson</li>
                    </ul>
                </div>
            </div>
            <p className='text-center'>Copyright 2022 &copy; All Rights Reserved</p>
        </footer>
    );
};

export default Footer;