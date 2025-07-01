import React , { useState, useRef, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from '@emailjs/browser';
import { fundSchema } from '../SchemaValidate';
import success from '../assets/check_circle_50dp_4CAF50_FILL0_wght400_GRAD0_opsz48.svg';
import failed from '../assets/fail-svgrepo-com.svg';



const Funding = () => {

    const form = useRef();
  const [modal, setModal] = useState({ show: false, success: false, message: '' });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(fundSchema),
      })

      const onSubmit =  (data) => {
        console.log(data);
    
        emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_KEY,
          import.meta.env.VITE_TEMPLATE2_KEY,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          () => {
            setModal({
              show: true,
              success: true,
              message: 'Your application has been sent successfully!',
            });
            form.current.reset();
          },
          () => {
            setModal({
              show: true,
              success: false,
              message: 'Failed to send your message. Please try again later.',
            });
          }
        );
      }

      const handleOutsideClick = () => {
        setModal({ show: false, message: '', success: false });
      };
    
      useEffect(() => {
        if (modal.show) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      }, [modal.show]);


    return (
        <>
            <section className = 'flex justify-center min-h-screen items-center'>
                <div className = ' bg-white  mx-5 my-10 md:my-0 md:mx-0 max-w-lg w-full'>
                    <div className = 'borde border-[#808080]'>
                        <div className = 'flex  py-3 justify-between items-center'>
                             <h2 className="md:text-xl text-2xl  text-[#4CAF50] font-semibold ">Apply for Funding*</h2>
                        </div>
                    </div>
                    <div className = 'px- py-4'>
                         <form action="" ref={form} onSubmit = {handleSubmit(onSubmit)} className = 'flex flex-col gap-3' >
                              <div className = 'flex flex-col gap-1'>
                                  <label htmlFor="" className = 'font-normal text-black text-sm'>Full Name *</label>
                                  <input type="text" name="fullname" id="" className = 'w-full bg-white border-1 border-[#808080] rounded-lg py-2 focus:outline focus:outline-[#4CAF50] text-base font-normal text-[#808080] px-4 ' {...register("fullname")}/>
                                  <p className = 'font-medium text-xs lg:-mt-px mt-[2px]  text-[#EC5E5E]'>{errors.fullname?.message}</p>
                              </div>
                              <div className = 'flex flex-col gap-1'>
                                  <label htmlFor="" className = 'font-normal text-black text-sm'>Email *</label>
                                  <input type="email" name="email" id="" className = 'w-full bg-white border-1 border-[#808080] rounded-lg py-2 focus:outline focus:outline-[#4CAF50] text-base font-normal text-[#808080] px-4 ' {...register("email")}/>
                                  <p className = 'font-medium text-xs lg:-mt-px mt-[2px]  text-[#EC5E5E]'>{errors.email?.message}</p>
                               </div>
                               <div className = 'flex flex-col gap-1'>
                                  <label htmlFor="" className = 'font-normal text-black text-sm'>Funding Purpose *</label>
                                  <select name="fundingpurpose" id=""  className = 'w-full bg-white border-1 border-[#808080] rounded-lg  py-2  focus:outline focus:outline-[#4CAF50] text-base font-normal text-[#808080] px-4 ' {...register("fundingpurpose")}>
                                    <option value="Select " selected className = 'text-base font-normal text-black'>Select your funding purpose</option>
                                    <option value="Business Expansion" className = 'text-base font-normal text-black'>Business Expansion</option>
                                    <option value="Equipment Purchase" className = 'text-base font-normal text-black'>Equipment Purchase</option>
                                    <option value="Research & Development" className = 'text-base font-normal text-black'>Research & Development</option>
                                    <option value="Working Capital" className = 'text-base font-normal text-black'>Working Capital</option>
                                    <option value="Technology Adoption" className = 'text-base font-normal text-black'>Technology Adoption</option>
                                    <option value="Others" className = 'text-base font-normal text-black'>Others</option>
                                   </select>
                                     {errors.fundingpurpose && <p className = "font-medium text-xs lg:-mt-px mt-[2px] text-[#EC5E5E]">{errors.fundingpurpose?.message}</p>}
                                </div>
                                <div className = 'flex flex-col gap-1'>
                                   <label htmlFor="" className = 'font-normal text-black text-sm'> Funding Description *</label>
                                   <textarea name="description" id=""  cols="30" rows="5" placeholder = 'Tell us about your research or initiative...' className = 'w-full px-4 resize-none bg-white border-1 border-[#808080] rounded-lg py-2 focus:outline focus:outline-[#4CAF50] text-base font-normal text-[#808080]' {...register("description")}></textarea>
                                    <p className = 'font-medium text-xs lg:-mt-px mt-[2px]  text-[#EC5E5E]'>{errors.description?.message}</p>
                                </div>
                                <div className = 'flex justify-center'>
                                   <button type = 'submit' disabled = {isSubmitting} className = ' w-full text-sm text-white font-normal  bg-[#4CAF50] px-4 py-3 rounded-full '>{isSubmitting ? 'Sending....' : 'Submit'}</button>
                                </div>
                          </form>
                          {modal.show && (
                        <div onClick={handleOutsideClick} className="fixed inset-0 z-50 flex items-center justify-center px-5 md:px-0 bg-black/70 ">
                          <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
                            <div className = 'flex justify-center w-full'>
                                <img src= {modal.success ? success : failed } alt="" className = 'w-[45px]'/>
                            </div>
                          <p className="mt-2 font-medium text-base text-gray-700">{modal.message}</p>
                          {/* <button
                            onClick={() => setModal({ ...modal, show: false })}
                            className="mt-4 bg-[#FF0000] hover:bg-red-500/70 transition duration-300 text-white font-normal text-sm px-6 py-2 rounded-full"
                          >
                            Close
                          </button> */}
                        </div>
                      </div>
                    )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Funding
