import React from 'react'
import Link from 'next/link';

const Bullet = ({ projectName, href, description }) => {
    return (
        <div>
            <Link href={href} className='text-white text-2xl font-bold my-2.5'>
                {projectName}
            </Link>,
            <div className='text-white'>
                {description}
            </div>
        </div>
    )
}

export default Bullet
