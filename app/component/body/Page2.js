"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import React from 'react';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';
import image4 from '../image/image4.png';
import Image from 'next/image';

const Page2 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger when 20% of the component is visible
      });
    return (
        <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
        <div className="bg-[#F6F6F5] ">
            <div className='container mx-auto py-[60px] md:py-[80px] lg:py-[120px] xl:py-[150px] 2xl:py-[200px] sm:px-0 px-[24px] '>
            <a className='paragaphabout text-[18px] md:text-[20px] xl:text-[24px] !text-[#0F0F11]' href='#about'>Industries We Serve</a>
            <h1 className='venturedebt text-[31px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[74px] 2xl:text-[84px] pt-[30px] md:pt-[40px] xl:pt-[48px]'>Flexible capital solutions to help <br/> businesses grow.</h1>
            <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        >
            <div className='flex justify-between items-start gap-[50px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] 2xl:gap-[69px] mt-[40px] sm:mt-[50px] lg:mt-[70px] 2xl:mt-[110px] sm:flex-row flex-col'>
                <div className='flex justify-start items-start h-fit gap-5 sm:gap-[30px] lg:gap-[40px] flex-1'>
                    <div className='paragaphabout text-[18px] md:text-[20px] xl:text-[24px]  !text-[#0F0F11]'>01</div>
                    <div className=''>
                    <h1 className='venturedebt text-[24px] md:text-[34px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] mb-[18px] sm:mb-[28px] md:mb-[38px] xl:mb-[48px] !leading-[52%]'>Technology</h1>
                    <p className='paragaphabout text-[16px] md:text-[20px] xl:text-[24px]'><sapn className="text-[#0F0F11]">Supporting innovative leaders who are modernizing industries</sapn> developing emerging technologies, and changing the way we live, work, and do business.</p>
                    <button className=" flex justify-center items-center gap-[24px] group mt-[30px] md:mt-[50px] xl:mt-[84px]"><p className='learnmorebutton text-[18px] md:text-[20px] xl:text-[24px] flex justify-center items-center !bg-transparent'>Learn More 
                    </p>
                    <div className='flex justify-center items-center !bg-transparent ml-[-45px] group-hover:ml-0 opacity-0 group-hover:opacity-100 duration-300 pointer-events-none group-hover:pointer-events-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" className='' viewBox="0 0 17 17" fill="none">
                        <path d="M10.2212 4.20044L14.5208 8.50002L10.2212 12.7996" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.47913 8.5H14.4004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    </button>
                    <div className='mt-[30px] sm:hidden block'>
                    <Image className='sm:w-[310px] md:w-[360px] lg:w-[360px] xl:w-[510px] 2xl:w-[548px]' src={image2} alt=""/>
                    </div>
                    </div>
                </div>
                <div className='sm:block hidden '>
                    <Image className='sm:w-[310px] md:w-[360px] lg:w-[360px] xl:w-[510px] 2xl:w-[548px]' src={image2} alt=""/>
                </div>
            </div>
            </motion.div>
            <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        >
            <div className='flex justify-between items-start gap-[50px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] 2xl:gap-[69px] mt-[40px] sm:mt-[50px] lg:mt-[70px] 2xl:mt-[110px] sm:flex-row flex-col'>
                <div className='flex justify-start items-start h-fit gap-5 sm:gap-[30px] lg:gap-[40px] flex-1'>
                    <div className='paragaphabout text-[18px] md:text-[20px] xl:text-[24px]  !text-[#0F0F11]'>02</div>
                    <div className=''>
                    <h1 className='venturedebt text-[24px] md:text-[34px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] mb-[18px] sm:mb-[28px] md:mb-[38px] xl:mb-[48px] !leading-[52%]'>Healthcare</h1>
                    <p className='paragaphabout text-[16px] md:text-[20px] xl:text-[24px]'><sapn className="text-[#0F0F11]">Helping companies at the forefront of clinical development and healthcare </sapn> innovation that are advancing medical treatments and improving patient outcomes.</p>
                    <button className=" flex justify-center items-center gap-[24px] group mt-[30px] md:mt-[50px] xl:mt-[84px]"><p className='learnmorebutton text-[18px] md:text-[20px] xl:text-[24px] flex justify-center items-center !bg-transparent'>Learn More 
                    </p>
                    <div className='flex justify-center items-center !bg-transparent ml-[-45px] group-hover:ml-0 opacity-0 group-hover:opacity-100 duration-300 pointer-events-none group-hover:pointer-events-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" className='' viewBox="0 0 17 17" fill="none">
                        <path d="M10.2212 4.20044L14.5208 8.50002L10.2212 12.7996" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.47913 8.5H14.4004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    </button>
                    <div className='mt-[30px] sm:hidden block'>
                    <Image className='' src={image3} alt=""/>
                    </div>
                    </div>
                </div>
                <div className='sm:block hidden '>
                    <Image className='sm:w-[310px] md:w-[360px] lg:w-[360px] xl:w-[510px] 2xl:w-[548px]' src={image3} alt=""/>
                </div>
            </div></motion.div>
            <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        >
            <div className='flex justify-between items-start gap-[50px] md:gap-[40px] lg:gap-[50px] xl:gap-[60px] 2xl:gap-[69px] mt-[40px] sm:mt-[50px] lg:mt-[70px] 2xl:mt-[110px] sm:flex-row flex-col'>
                <div className='flex justify-start items-start h-fit gap-5 sm:gap-[30px] lg:gap-[40px] flex-1'>
                    <div className='paragaphabout text-[18px] md:text-[20px] xl:text-[24px]  !text-[#0F0F11]'>03</div>
                    <div className=''>
                    <h1 className='venturedebt text-[24px] md:text-[34px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] mb-[18px] sm:mb-[28px] md:mb-[38px] xl:mb-[48px] !leading-[52%]'>Consumer</h1>
                    <p className='paragaphabout text-[16px] md:text-[20px] xl:text-[24px]'><sapn className="text-[#0F0F11]">Fueling growth among the next generation of brands</sapn> in the <br className='hidden lg:block'/> rapidly evolving consumer space.</p>
                    <button className=" flex justify-center items-center gap-[24px] group mt-[30px] md:mt-[50px] xl:mt-[84px]"><p className='learnmorebutton text-[18px] md:text-[20px] xl:text-[24px] flex justify-center items-center !bg-transparent'>Learn More 
                    </p>
                    <div className='flex justify-center items-center !bg-transparent ml-[-45px] group-hover:ml-0 opacity-0 group-hover:opacity-100 duration-300 pointer-events-none group-hover:pointer-events-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" className='' viewBox="0 0 17 17" fill="none">
                        <path d="M10.2212 4.20044L14.5208 8.50002L10.2212 12.7996" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.47913 8.5H14.4004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    </button>
                    <div className='mt-[30px] sm:hidden block'>
                    <Image className='sm:w-[310px] md:w-[360px] lg:w-[360px] xl:w-[510px] 2xl:w-[548px]' src={image4} alt=""/>
                    </div>
                    </div>
                </div>
                <div className='sm:block hidden '>
                    <Image className='sm:w-[310px] md:w-[360px] lg:w-[360px] xl:w-[510px] 2xl:w-[548px]' src={image4} alt=""/>
                </div>
            </div>
            </motion.div>
            </div>
            </div>
        </motion.div>
    );
};

export default Page2;