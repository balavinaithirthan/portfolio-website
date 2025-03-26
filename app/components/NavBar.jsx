import React from 'react';
import Link from 'next/link';
import NavLink from "./NavLink";

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];


const NavBar = () => {
    return (
        <nav>
            <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href={"/"} className='text-5xl text-white font-semibold'>HOME
                </Link>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className="flex flex-col md:flex-row md:space-x-8">
                        {
                            navLinks.map((link, index) => (
                                <li key={index} className="mb-2 md:mb-0">
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default NavBar
