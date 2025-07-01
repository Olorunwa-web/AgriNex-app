import React ,{useState} from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import homebackground from '../assets/Frame 1171278702.jpg';
import Marquees from '../components/Marquee';
import Whatwedo from '../components/Whatwedo';
import Benefit from '../components/Benefit';
import Impact from '../components/Imapct';
import Growth from '../components/Growth';
import Resource from '../components/Resource';
import Testimonial from '../components/Testimonial';
import Faq from '../components/Faq';
import Prefoot from '../components/Prefooter';
import  { motion } from 'framer-motion';
import close from '../assets/close_32dp_000000_FILL0_wght400_GRAD0_opsz40.svg';
import { fundSchema } from '../SchemaValidate'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm({
        resolver: yupResolver(fundSchema),
      })

      const onSubmit = (data) => {
        console.log(data);
      }
    return (
        <>
            <section className ="bg-cover py-34 md:py-40  lg:py-35 xl:py-43 h-full max-h-full " style = {{ backgroundImage: `url(${homebackground})`}}>
                <section className = 'container w-11/12 max-w-8xl mx-auto'>
                    <div className = 'flex flex-col gap-y-6'>
                        <div className = ' w-full md:w-[600px] lg:w-[770px] xl:w-[700px]'>
                            <h1 className = 'font-bold text-[1.75rem] md:text-[40px] lg:text-[2.8rem] xl:text-[3.1rem] text-white leading-[40px] md:leading-[57px] lg:leading-[64px] xl:leading-[69px] '>Utilization of Technology to Empower Farmers Across Africa Agriculture</h1>
                        </div>
                        <div>
                            <Link to = '/applyfunding'><button  className = ' bg-[#4CAF50] rounded-[56px] px-[20px] md:px-[20px] py-3 md:py-[12px]  text-base font-semibold text-white '>Apply for Funding</button></Link>
                            {/* { isOpen && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center px-5 md:px-0 bg-black/70 ">
                                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
                                        <div className = 'border-b-1 border-[#808080]'>
                                          <div className = 'flex px-4 py-3 justify-between items-center'>
                                              <h2 className="text-xl text-[#4CAF50] font-semibold ">Apply for Funding</h2>
                                              <div onClick={closeModal} className = ''>
                                                 <img src={close} alt="" className = 'w-[29px]'/>
                                              </div>
                                           </div>
                                        </div>
                                       <div className = 'px-4 py-4'>
                                           <form action="" onSubmit = {handleSubmit(onSubmit)} className = 'flex flex-col gap-3' >
                                               <div className = 'flex flex-col gap-1'>
                                                   <label htmlFor="" className = 'font-normal text-black text-sm'>Full Name *</label>
                                                   <input type="text" name="name" id="" className = 'w-full bg-white border-1 border-[#808080] rounded-lg py-2 focus:outline focus:outline-[#4CAF50] text-base font-normal text-[#808080] px-4 ' {...register("fullname")}/>
                                                   <p className = 'font-medium text-xs lg:-mt-px mt-[2px]  text-[#EC5E5E]'>{errors.fullname?.message}</p>
                                               </div>
                                               <div className = 'flex flex-col gap-1'>
                                                   <label htmlFor="" className = 'font-normal text-black text-sm'>Email *</label>
                                                   <input type="email" name="email" id="" className = 'w-full bg-white border-1 border-[#808080] rounded-lg py-2 focus:outline focus:outline-[#4CAF50] text-base font-normal text-[#808080] px-4 ' {...register("email")}/>
                                                   <p className = 'font-medium text-xs lg:-mt-px mt-[2px]  text-[#EC5E5E]'>{errors.email?.message}</p>
                                               </div>
                                               <div className = 'flex flex-col gap-1'>
                                                   <label htmlFor="" className = 'font-normal text-black text-sm'>Funding Purpose *</label>
                                                   <select name="" id="" className = 'w-full bg-white border-1 border-[#808080] rounded-lg py-2 focus:outline focus:outline-[#4CAF50] text-base font-normal text-[#808080] px-4 ' {...register("fundingpurpose")}>
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
                                                   <label htmlFor="" className = 'font-normal text-black text-sm'>Description *</label>
                                                   <textarea name="message" id=""  cols="30" rows="5" className = 'w-full px-4 resize-none bg-white border-1 border-[#808080] rounded-lg py-2 focus:outline focus:outline-[#4CAF50] text-base font-normal text-[#808080]' {...register("description")}></textarea>
                                                   <p className = 'font-medium text-xs lg:-mt-px mt-[2px]  text-[#EC5E5E]'>{errors.email?.message}</p>
                                               </div>
                                               <div className = 'flex justify-end'>
                                                   <button type = 'submit' disabled = {isSubmitting} className = 'text-sm text-white font-normal  bg-[#4CAF50] px-4 py-2 rounded-md  '>Submit</button>
                                               </div>
                                           </form>
                                       </div>
                                    </div>
                                </div> 
                            )} */}
                        </div>
                    </div>
                </section>
            </section>

            {/*  */}

            <section className = 'container w-11/12 max-w-8xl mx-auto py-5'>
                <Marquees/>
                <Whatwedo/>
            </section>
            <section>
                <Benefit/>
                <Impact/>
                <Growth className = ''/>
            </section>
            <section className = ' py-5'>
                <Resource/>
                <Testimonial/>
                <Faq/>
                <Prefoot/>
            </section>
        
        </>
    )
}

export default Home
