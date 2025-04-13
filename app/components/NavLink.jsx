import Link from "next/link";
const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-gray-300 sm:text-xl font-medium tracking-wide rounded md:bg-transparent md:p-0 hover:text-[#FFD700] transition-colors duration-300"
        >
            {title}
        </Link>
    );
};

export default NavLink;