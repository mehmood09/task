import React from 'react'
import '../footer/styles.scss';
import logo from '../../../assets/images/logo.png';

import { Link } from "react-router-dom";
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiOutlineYoutube, AiOutlineGithub, AiOutlineFacebook } from 'react-icons/ai'

const socialLinks = [
    {
        path: "https://www.youtube.com/",
        icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />
    },
    {
        path: "https://www.github.com/",
        icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />
    },
    {
        path: "https://www.instagram.com/",
        icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />
    },

];


export const footer = () => {
    return (
        <footer className="pb-16 pt-10">
            <div className="container">
                <div className="flex justify-center flex-col md:flex-row flex-wrap gap-[30px]">
                    <div>
                        <img src={logo} alt="" />
                        <p className="text-[20px] leading-50 font-[400] text-white mt-4">
                            © 2024 Freelancer - Phlox Elementor WordPress Theme. All rights reserved.</p>

                    </div>
                    <div>
                        <div className='social'>
                            <a href='#'>
                                <AiOutlineYoutube className="group-hover:text-white w-4 h-5" />
                            </a>
                            <a href='#'>
                                <AiOutlineGithub className="group-hover:text-white w-4 h-5" />
                            </a>
                            <a href='#'>
                                <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />
                            </a>
                            <a href='#'>
                                <AiOutlineFacebook className="group-hover:text-white w-4 h-5" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default footer;