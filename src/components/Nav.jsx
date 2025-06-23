import React, {useState, useEffect, useRef} from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'
import agrilogo from '../assets/AgriNex.svg';
import menu from '../assets/burger-menu-right-svgrepo-com.svg';
import close from '../assets/close_32dp_000000_FILL0_wght400_GRAD0_opsz40.svg';
import { nav } from '../data';
import agric  from '../assets/Menu Button.svg';
import Footer from '../components/Footer';



const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    // const sidebarRef = useRef();

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //       if (
    //         sidebarRef.current &&
    //         !sidebarRef.current.contains(event.target)
    //       ) {
    //         setIsOpen(false);
    //       }
    //     };
    
    //     if (isOpen) {
    //       document.addEventListener("mousedown", handleClickOutside);
    //     } else {
    //       document.removeEventListener("mousedown", handleClickOutside);
    //     }
    
    //     return () => {
    //       document.removeEventListener("mousedown", handleClickOutside);
    //     };
    //   }, [isOpen]);

   

    return (
        <>
           <nav className = 'fixed left-1/2 top-0 w-11/12 max-w-8xl md:mt-7 flex flex-col mt-6 -translate-x-1/2 bg-white bg-background/20 rounded-2xl md:rounded-full z-50 backdrop-blur-lg '>
              <section className = 'w-full flex justify-between items-center mx-auto px-4 md:px-5 md:py-3 py-3'>
                   <NavLink to = '/' className = 'w-[85px] md:w-[100px]'> 
                       <img src={agrilogo} alt="" className = 'w-full'/>
                   </NavLink>
                   <div>
                      <div className = 'hidden md:flex lg:gap-7 md:gap-5'>
                          {nav.map((heads) => {
                              return (
                                  <NavLink 
                                   key = {heads.id} to = {heads.path}
                                   className={({ isActive }) =>
                                   `font-medium text-sm ${isActive
                                     ? " text-[#4CAF50] "
                                     : " text-[#000000]"
                                   }`}
                                   >
                                    {heads.head}    
                                  </NavLink>
                              )
                          })}
                      </div>
                   </div>
                   <div className = 'hidden md:flex gap-2  '>
                       <Link to = '/auth/signin'><button className = 'font-medium text-sm bg-[#FFFFFF]  py-[8px] px-[15px] '>Sign In</button></Link>
                       <Link to = '/auth/signup'><button className = 'font-medium text-sm text-[#FFFFFF] bg-[#4CAF50] rounded-[56px] py-[8px] px-[14px] '>Sign Up</button></Link>
                   </div>
                   <div className = 'md:hidden'>
                      <div onClick={() => setIsOpen(!isOpen)} className = ' ' >
                          <img src= {agric} alt="" className = 'w-[37px] transform scale-x-[-1] scale-y-[-1] ' />
                      </div>
                      {/* {isOpen && (
                         <div className="fixed inset-0 z-40 transition-opacity duration-200"></div>
                       )}
                       <div  
                        ref = {sidebarRef}
                        className={`fixed top-0 right-0 left-0 h-full w-[100%] bg-white z-50 transform transition-transform ease-in-out transform duration-300
                        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                       >
                           <div>
                               <div className="px-4 py-5 flex flex-col justify-between min-h-[80vh]">
                                   <div className = 'flex justify-between items-center'>
                                       <div className = 'w-[100px]'>
                                          <img src={agrilogo} alt="" className = 'w-[100%]'/>
                                       </div>
                                       <div onClick={() => setIsOpen(false)}>
                                           <img src= {close} alt="" className="w-[30px]"/>
                                       </div>
                                   </div>
                                   <div className = 'flex flex-col  gap-4'>
                                       {nav.map((offcanvas) => {
                                           return (
                                            <NavLink 
                                            key = {offcanvas.id} to = {offcanvas.path}
                                            onClick = {handleLinkClick}
                                            className={({ isActive }) =>
                                            `font-normal text-[17px] text-center  ${isActive
                                              ? " text-[#4CAF50] "
                                              : " text-[#000000]"
                                            }`}
                                            >
                                             {offcanvas.head}    
                                           </NavLink>
                                           )
                                       })}
                                   </div>
                                   <div className = 'flex flex-col gap-6'>
                                      <Link to = '/auth/signin'><button className = 'font-medium text-[17px] bg-[#FFFFFF]  py-[15px] px-[15px] w-[100%]'>Sign In</button></Link>
                                      <Link to = '/auth/signup'><button className = 'font-medium text-[17px] text-[#FFFFFF] bg-[#4CAF50] rounded-[56px] py-[15px] px-[15px] w-[100%] '>Sign Up</button></Link>
                                   </div>
                              </div>
                           </div>
                       </div> */}
                   </div>
               </section>
                   {isOpen && (
                          <div className = 'md:hidden py-4 flex flex-col pl-6 gap-4'>
                              {nav.map((offcanvas) => {
                                 return (
                                     <NavLink 
                                      key = {offcanvas.id} to = {offcanvas.path}
                                      className={({ isActive }) =>
                                      `font-medium text-base   ${isActive
                                      ? " text-[#4CAF50] "
                                      : " text-[#000000]"
                                      }`}
                                      >
                                      {offcanvas.head}    
                                      </NavLink>
                                   )
                                })}
                            </div>
                      )}
           </nav>
           <Outlet/>
           <Footer/>
           
        </>
    )
}

export default Nav
