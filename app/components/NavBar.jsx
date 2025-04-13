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
        path: "/about",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

const NavBar = () => {
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-black/30 backdrop-blur-sm'>
            {/* allows for navbar to stay at top */}
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4'>
                <Link href={"/"} className='text-3xl md:text-5xl text-white font-black tracking-tight hover:text-[#FFD700] transition-colors duration-300'>{`<Bala>`}
                </Link>
                <div className='menu md:block md:w-auto' id='navbar'>
                    <ul className="flex flex-row p-4 md:p-0 md:space-x-8 mt-10">
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
