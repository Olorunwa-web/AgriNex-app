import React , {useState} from 'react';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import grassimage from '../assets/Farmer Using A Robotic Weed Control System Wallpaper _ Premium AI-generated image 1.jpg';
import agric from '../assets/AgriNex (2).svg';
import eyeopen from '../assets/eye.svg';
import eyeclose from '../assets/visibility_off_24dp_00000066_FILL0_wght400_GRAD0_opsz24.svg'
import orsign from '../assets/Frame 1171276897.svg';
import google from '../assets/Social icon.svg';
import { signupSchema } from '../SchemaValidate'
import { Link } from 'react-router-dom'


const SignUp = () => {

    const [seepassword, setSeepassword] = useState(false);
    const [seeconpass, setSeeconpass] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(signupSchema),
      })
      const onSubmit = (data) => console.log(data)

    function handleSeepassword(){
        seepassword ? setSeepassword(false) : setSeepassword(true)
    }

    function handleSeeconpassword(){
        seeconpass ? setSeeconpass(false) : setSeeconpass(true)
    }

    return (
        <>
            <section className = 'w-full h-screen lg:overflow-hidden lg:flex justify-center items-center border- border-yellow-500 '>
                <section className = 'lg:w-1/2 min-h-screen overflow-y-auto md:px-0 md:py-0 py-10 px-5 w-full flex justify-center items-center border- border-green-500 '>
                    <section className = 'flex  flex-col md:gap-y-9 gap-y-8 w-full  lg:w-[80%] md:w-[500px] border- '>
                        <div className = 'w-[100px] md:w-[120px] lg:w-[6vw] '>
                            <img src= {agric} alt="" className = 'w-full'/>
                        </div>
                        <div className = 'border- border-red-400'>
                          <form action="" onSubmit={handleSubmit(onSubmit)} className = 'flex flex-col gap-4 border- '>
                            <div className = ''>
                                <h1 className = 'font-semibold text-[#000000] text-[1.8rem] lg:text-[1.6vw] md:text-[2rem]'>Create an Account</h1>
                                <span className = 'font-normal text-[#3B3B3B] text-[1.03rem] '>Let's get you started on a journey with us today</span>
                            </div>
                            <div className = ''>
                                <div className = 'flex flex-col lg:gap-y-3 gap-y-4'>
                                    <div>
                                        <input type="text" name="" id="" placeholder = 'Name' className = 'w-full py-2  px-[13px] border-[#969393] border rounded-[6px] font-normal text-[#00000066] text-base  outline-none' {...register("Name")}/>
                                        <p className = 'font-medium text-xs lg:-mt-px mt-[2px]  text-[#EC5E5E]'>{errors.Name?.message}</p>
                                    </div>
                                   <div>
                                      <input type="email" name="" id="" placeholder = 'Email' className = ' w-full py-2  px-[13px] border-[#969393] border rounded-[6px] font-normal text-[#00000066] text-base outline-none' {...register("email")} />
                                      <p className = 'font-medium text-xs lg:-mt-px mt-[2px] text-[#EC5E5E]'>{errors.email?.message}</p>
                                   </div>
                                   <div className = 'relative'>
                                      <input type= { seepassword ? "text" : "password" }name="" id="" placeholder = 'Password'  className = ' w-full py-2  px-[13px] border-[#969393] border rounded-[6px] font-normal text-[#00000066]  text-base outline-none' {...register("password")}/>
                                      <div className = 'absolute top-3.5 right-3'>
                                        <img src= { seepassword ? eyeclose : eyeopen} onClick = {handleSeepassword} alt="" className = 'w-[17px] '/>
                                      </div>
                                      <p className = 'font-medium text-xs lg:-mt-px mt-[2px] text-[#EC5E5E]'>{errors.password?.message}</p>
                                   </div>
                                   <div className = 'relative'>
                                      <input type= { seeconpass ? "text" : "password" }name="" id="" placeholder = 'Confirm Password'  className = ' w-full py-2 px-[13px] border-[#969393] border rounded-[6px] font-normal   text-[#00000066] text-base outline-none' {...register("confirmPassword")}/>
                                      <div className = 'absolute top-3.5 right-3'>
                                        <img src= { seeconpass ? eyeclose : eyeopen} onClick = {handleSeeconpassword} alt="" className = 'w-[17px] '/>
                                      </div>
                                      <p className = 'font-medium text-xs lg:-mt-px mt-[2px] text-[#EC5E5E]'>{errors.confirmPassword?.message}</p>
                                   </div>
                                </div>
                                <div className = ' flex items-center gap-2 my-4'>
                                    <input type="checkbox" name="" id="" className = 'lg:w-[1vw]'/>
                                    <span className = 'font-normal text-[#0D0D0D] text-[1rem] lg:text-[1.1vw]'>I agree to the terms & conditions</span>
                                </div>
                                 <div>
                                     <button className = 'w-full py-2 bg-[#357A38] rounded-[52px] font-semibold text-[1.07rem] text-white' type = "submit" disabled = {isSubmitting}>Sign up</button>  
                                 </div>
                            </div>
                        </form>
                        <div className = ''>
                           <div className = 'w-full mt-1'>
                              <img src= {orsign} alt="" className = 'w-full'/>
                          </div>
                          <div className = 'mt-2'>
                              <button className = ' flex gap-2 items-center justify-center w-full py-2 border border-[#D5D7DA] text-[1.1rem] rounded-[52px] font-inter '><img src= {google} alt="" className = 'w-[20px] '/> <span className = 'font-inter font-semibold text-base text-[#414651] text-[1.1rem] '>Sign in with Google</span></button>
                          </div>
                          <div className = 'text-center mt-2'>
                              <span className = ' text-[1.1rem]  font-normal text-[#000000]  '>Already have an account? <span className= 'text-[#357A38] font-medium'><Link to = '/auth/signin'>Sign in</Link></span></span>
                          </div>
                         </div>
                       </div>
                    </section>
                </section>
                <section className = 'hidden lg:block lg:w-1/2 w-full h-full border- border-red-400'>
                    <img src= {grassimage} alt="" className = 'w-full object-cover h-full border- border-red-400 '/>
                </section>
            </section>
        </>
    )
}

export default SignUp
