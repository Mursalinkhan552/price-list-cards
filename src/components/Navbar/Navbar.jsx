import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className='bg-purple-400 px-4'>
            <div onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                <span>
                    {
                        isOpen === true ?
                            <XMarkIcon className="h-6 w-6 text-purple-700"></XMarkIcon>
                            :
                            <Bars3Icon className="h-6 w-6 text-purple-700"></Bars3Icon>
                    }
                </span>
            </div>
            <ul className={`md:flex absolute md:static duration-50 pl-8 pb-4 py-2 bg-purple-400 ${isOpen ? 'top-6' : '-top-36'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;