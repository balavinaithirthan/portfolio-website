import React from 'react'
import Link from 'next/link';

const Bullet = ({ projectName, href, description }) => {
    return (
        <div className='group'>
            <Link href={href} className='text-white text-3xl font-black tracking-tight hover:text-[#FFD700] transition-colors duration-300 my-2.5 block'>
                {projectName}
            </Link>
            <div className='text-gray-300 text-lg font-light tracking-wide leading-relaxed'>
                {description}
            </div>
        </div>
    )
}

export default Bullet
