import React from "react";
import heroImg01 from "../assets/images/portfolio-img.jpg";
import heroImg02 from "../assets/images/hero-Img02.png";
import heroImg03 from "../assets/images/hero-Img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
//import videoIcon from "../assets/images/video-icon.png";
//import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
//import About from "../components/About/About";
//import ServiceList from "../components/Services/ServiceList"
//import DoctorList from "../components/Doctors/DoctorList"
//import FaqList from "../components/Faq/FaqList";
//import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      
      {/*==================== hero section =============== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]  bg-blackColor">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*==================== hero content =============== */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full rounded-[45px]" src={heroImg01} alt="" />
              </div>
              
            </div>
            <div>
              <div className="lg:w-[570px]">
                <h1
                  className="text-[26px] leading-[46px] text-greenColor font-[600]
                            md:text-[60px] md:leading-[70px] "
                >
                  Restaurant Landing page
                </h1>
                <p className="text__para text-justify">
                I will give you a complete account of the system, and expound the actual teachings of the great explorer of
                 the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, 
                 because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter 
                 consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain
                 pain of itself, because it is pain, but because those who do not know how to pursue pleasure rationally.
                </p>
              
              </div>
              {/*==================== hero counter =============== */}
              <div
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center
                         gap-5 lg:gap[30px]"
              >
                <div>
                  <h2
                    className="text-[16px] text-yellowColor leading-[56px] lg:text-[24px] lg:leading-[54px]
                                font-[700] text-headingColor"
                  >
                    Categories
                  </h2>
                  <span className="w-[100px] h-2 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">App Design</p>
                </div>

                 <div>
                  <h2
                    className="text-[16px] text-yellowColor leading-[56px] lg:text-[24px] lg:leading-[54px]
                                font-[700] text-headingColor"
                  >
                    Client
                  </h2>
                  <span className="w-[100px] h-2 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Company Name</p>
                </div>
              </div>
            </div>
            {/*==================== hero content =============== */}

            
          </div>
        </div>
      </section>
      {/*==================== hero section end =============== */}
      
       
    </>
  );
};
export default Home;
