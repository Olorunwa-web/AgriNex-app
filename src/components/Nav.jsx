import React, {useState, useEffect, useRef} from 'react'
import {Link, NavLink, Outlet} from 'react-router-dom'
import agrilogo from '../assets/AgriNex.svg';
import close from '../assets/close_32dp_000000_FILL0_wght400_GRAD0_opsz40.svg';
import { nav } from '../data';
import menu  from '../assets/Menu Button.svg';
import Footer from '../components/Footer';



const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target)
          ) {
            setIsOpen(false);
          }
        };
    
        if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isOpen]);

      
   
      const handleLinkClick = () => {
        setIsOpen(false);
      };

    return (
        <>
           <nav className = 'fixed left-1/2 top-0 container w-11/12 max-w-8xl md:mt-7 flex flex-col mt-5 -translate-x-1/2 bg-white bg-background/20 rounded-3xl md:rounded-full z-50 backdrop-blur-lg '>
              <section className = 'w-full flex justify-between items-center mx-auto px-4 md:px-5 md:py-3 py-2'>
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
                   <div className = 'hidden md:block gap-2  '>
                       <Link to = '/contactus'><button className = 'font-medium text-sm text-white bg-[#4CAF50] rounded-full  py-[8px] px-[14px] '>Contact Us</button></Link>
                       {/* <Link to = '/auth/signin'><button className = 'font-medium text-sm bg-[#FFFFFF]  py-[8px] px-[15px] '>Sign In</button></Link>
                       <Link to = '/auth/signup'><button className = 'font-medium text-sm text-[#FFFFFF] bg-[#4CAF50] rounded-[56px] py-[8px] px-[14px] '>Sign Up</button></Link> */}
                   </div>
                   <div className = 'md:hidden '>
                      <div  className =' w-full transition-all duration-300' >
                          {isOpen ? (
                              < div onClick={() => setIsOpen(false)}>
                                  <img src= {close} alt=""  className = 'w-[37px] transition-all duration-300 '/>
                              </div>
                              ) : (
                          <img src= {menu} onClick={() => setIsOpen(true)} alt=""  className = ' w-[40px] transform  scale-y-[-1] transition-all duration-300 ' />
                          )}
                      </div>
                   </div>
               </section>
                   {isOpen && (
                       <div className = 'py-4 px-6'>
                          <div className = 'md:hidden flex flex-col  gap-[16px]' >
                              {nav.map((offcanvas) => {
                                 return (
                                     <NavLink 
                                     onClick={handleLinkClick}
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
                             <div className = ' mt-5 mb-2  px-3 '>
                                 <Link to = '/contactus'><button className = 'font-medium text-base text-[#FFFFFF] bg-[#4CAF50] rounded-full py-2  w-full'>Contact Us</button></Link>
                             </div>
                       </div>
                      )}
           </nav>
           <Outlet/>
           <Footer/>
           
        </>
    )
}

export default Nav
