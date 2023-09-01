import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 fixed top-0 left-0 right-0 z-50">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Doctors portal
                        </span>
                    </NavLink>
                    <div className="flex items-center lg:order-2 lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            menuOpen
                                ? "block justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                                : "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        }
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-4 lg:mt-0 bg-gray-500 lg:bg-transparent rounded">
                            <li>
                                <NavLink
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        closeMenu(); // Close the menu when a menu item is clicked
                                    }}
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block py-2 pr-4 pl-3 text-white rounded lg:bg-gray-600 bg-gray-600 lg:text-white lg:px-3 dark:text-white"
                                            : "block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-black lg:px-3 dark:text-white"
                                    }
                                    aria-current="page"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        closeMenu(); // Close the menu when a menu item is clicked
                                    }}
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block py-2 pr-4 pl-3 text-white rounded lg:bg-gray-600 bg-gray-600 lg:text-white lg:px-3 dark:text-white"
                                            : "block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-black lg:px-3 dark:text-white"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        closeMenu(); // Close the menu when a menu item is clicked
                                    }}
                                    to="/appointment"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block py-2 pr-4 pl-3 text-white rounded lg:bg-gray-600 bg-gray-600 lg:text-white lg:px-3 dark:text-white"
                                            : "block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-black lg:px-3 dark:text-white"
                                    }
                                >
                                    Appointment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        closeMenu(); // Close the menu when a menu item is clicked
                                    }}
                                    to="/review"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block py-2 pr-4 pl-3 text-white rounded lg:bg-gray-600 bg-gray-600 lg:text-white lg:px-3 dark:text-white"
                                            : "block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-black lg:px-3 dark:text-white"
                                    }
                                >
                                    Review
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                        closeMenu(); // Close the menu when a menu item is clicked
                                    }}
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "block py-2 pr-4 pl-3 text-white rounded lg:bg-gray-600 bg-gray-600 lg:text-white lg:px-3 dark:text-white"
                                            : "block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-black lg:px-3 dark:text-white"
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                {user ? (
                                    <Link
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                            closeMenu(); // Close the menu when a menu item is clicked
                                        }}
                                        to="/profile"
                                        className="block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-black lg:px-3 dark:text-white"
                                    >
                                        {user.displayName}
                                    </Link>
                                ) : (
                                    <NavLink
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                            closeMenu(); // Close the menu when a menu item is clicked
                                        }}
                                        to="/login"
                                        className={({ isActive }) =>
                                            isActive
                                                ? "block py-2 pr-4 pl-3 text-white rounded lg:bg-gray-600 bg-gray-600 lg:text-white lg:px-3 dark:text-white"
                                                : "block py-2 pr-4 pl-3 text-white rounded lg:bg-transparent lg:text-black lg:px-3 dark:text-white"
                                        }
                                    >
                                        Login
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
