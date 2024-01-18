import React from 'react'
import { useEffect, useState } from "react";
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from "react-icons/bi";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
const data = [
    {
        label: 'Home',
        to: '/home'
    },
    {
        label: 'Portfolio',
        to: '/services'
    },
    {
        label: 'Contact',
        to: '/contact'

    },
]

export const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };


    return (
        <div>
            <nav className='navbar'>
                <div className='navbar__container'>

                    <Link to={'/'} className='navbar__container__logo'>
                        <FaReact size={30} />
                    </Link>
                    <h1
                                    className="text-[20px] leading-[46px] text-white font-[600]
                            md:text-[40px] md:leading-[70px] "
                                >
                                    MEHMOOD QADIR
                                </h1>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className='navbar__container__menu__item text-[20px] font-[600] text-white '>
                                <Link className='navbar__container__menu__item__links' to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <button className="btn text-[18px] mt-1">Contact Me </button>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>

            </nav>


        </div>


    )
}
export default Navbar;