import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants/index.js';
import logo from '../assets/logo.png';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
    return (
    
        <footer class="bg-white ">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" class="flex items-center">
                            <img src={logo} class="h-8 me-3" alt="FlowBite Logo" />
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-orange-700 uppercase ">Nosotros</h2>
                            <ul class="text-orange-500  font-medium">
                                {navLinks.map((nav) => (
                                    <li class="mb-2" key={nav.id}>
                                        <NavLink
                                            to={`/${nav.id}`}
                                            lass="hover:underline"
                                        >
                                            {nav.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-orange-700 uppercase ">Legal</h2>
                            <ul class="text-orange-500  font-medium">
                                <li class="mb-2">
                                    <a href="#" class="hover:underline">Politicas de Privacidad</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Terminos y Condiciones</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-orange-500 sm:mx-auto  lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-orange-600 sm:text-center ">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/profile.php?id=100081438307111&locale=az_AZ" target='_blank' class="text-orange-500 hover:text-gray-900 ">
                            <FaFacebook size={20} />
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.instagram.com/fundacion_lemuel_co/" target='_blank' class="text-orange-500 hover:text-gray-900  ms-5">
                            <FaInstagram size={20} />
                            <span class="sr-only">Discord community</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
