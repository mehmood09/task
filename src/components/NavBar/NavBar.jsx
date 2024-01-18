import React from 'react'
import {useEffect, useState} from "react";
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import {NavLink, Link} from 'react-router-dom'
import {BiMenu} from "react-icons/bi";
import {FaBars, FaReact} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
const navLinks = [
    {
        path:'/home',
        label:'Home'
    },
    {
        path:'/services',
        label:'Portfolio'
    },
    {
        path:'/contact',
        label:'Contact'
    },    
]

export const NavBar = () => {
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
            </div>
            <ul>
                {
                    data.map((item, key) => (
                        <li key={key} className='navbar__container__menu_item'>
                            <Link className='navbar__container__menu_item_links' to={item.to}>
                            {item.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>
                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
        </nav>
    </div>
  )
}
export default NavBar;