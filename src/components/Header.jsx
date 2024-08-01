// src/components/Header.jsx
import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { navLinks } from '../constants/index.js';
import logo from '../assets/logo.png';
import { NavLink } from "react-router-dom";

/**
 * Componente Header que muestra la cabecera del sitio web.
 * Incluye la navegación y el logo.
 *
 * @returns {JSX.Element} El componente renderizado.
 */
const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="relative">
                <div className="container px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <NavLink to="/">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src={logo}
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                {open ? <IoIosClose className="h-6 w-6" color='#F97316'/> : <IoIosMenu className="h-6 w-6" color='#F97316'/>}
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            {navLinks.map((nav) => (
                                <NavLink
                                    key={nav.id}
                                    to={`/${nav.id}`}
                                    className={`text-[18px] font-medium text-[#F27B35] hover:text-orange-700 ${({ isActive }) =>
                                    isActive ? "active" : ""
                                  }`}
                                >
                                    {nav.title}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </div>
                {/* Mobile menu */}
                <div className={`transition-all duration-700 ${open ? "block md:hidden" : "hidden"}`}>
                    <div className="bg-white py-3 px-4">
                        {navLinks.map((nav) => (
                            <NavLink
                                key={nav.id}
                                to={`/${nav.id}`}
                                className="block text-base -m-3 p-3 font-medium text-[#F27B35] hover:text-orange-700 hover:bg-gray-50"
                                onClick={() => setOpen(false)}
                            >
                                <span className="ml-3 text-base font-medium">
                                    {nav.title}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
