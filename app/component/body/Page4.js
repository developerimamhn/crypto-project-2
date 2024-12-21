"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import Image from 'next/image';

const Page4 = () => {
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
        <div className='bg-[#BFE953]'>
           <div className='container mx-auto pt-[35px] sm:pt-[44px] lg:pt-[58px] xl:pt-[68px] 2xl:pt-[78px] pb-[60px] md:pb-[80px] lg:pb-[120px] xl:pb-[150px] 2xl:pb-[200px] sm:px-0 px-[24px]'>
                <div className='flex justify-between items-center mb-[30px] sm:mb-[20px] lg:mb-[30px]'>
                    <div className=''>
                        <h1 className='venturedebt text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] !leading-[110%] !font-[400] uppercase'>We invest more than capital</h1>
                    </div>
                    <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[100px] sm:w-[200px] md:w-[230px] lg:w-[250px] xl:w-[280px] 2xl:w-[293px]' viewBox="0 0 293 312" fill="none">
                    <path d="M207.52 64.815C211.99 67.3694 200.784 87.452 199.502 89.6946C190.158 106.047 175.512 123.222 159.497 133.585C157.913 134.61 157.448 133.203 157.596 131.601C158.881 117.643 167.004 102.471 172.639 90.1079C182.272 68.9749 192.571 44.6371 209.339 27.9503C214.421 22.8921 229.31 11.6536 237.607 16.8743C243.337 20.4796 239.542 32.1853 238.103 36.2159C228.754 62.3931 204.789 81.2004 180.905 93.4968C135.606 116.818 82.4778 129.652 31.7926 133.172C2.47671 135.208 23.7082 132.943 5.42522 132.428C0.790374 132.297 1.20692 133.012 4.59865 136.065C22.3502 152.041 46.6223 163.051 67.8308 173.26C99.4054 188.459 132.017 200.685 165.779 210.042C194.65 218.044 224.061 225.121 253.229 232.029C254.411 232.309 270.832 233.319 266.702 226.987C264.989 224.361 260.096 221.446 258.023 219.878C237.862 204.635 218.233 188.869 199.089 172.351C138.902 120.42 76.2122 68.6726 21.7085 10.6751C19.1841 7.98879 11.6056 -0.0559801 14.2694 2.49209C27.7519 15.3883 40.6409 29.1389 53.2833 42.8284C120.009 115.081 175.449 196.245 240.252 269.968C252.73 284.164 268.773 305.548 288.689 309.974C292.3 310.776 290.339 307.324 289.35 305.841" stroke="#0F0F11" stroke-opacity="0.05" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                    </div>
                </div>
                <div className='pl-[30px] sm:pl-[50px] md:pl-[70px] lg:pl-[90px] xl:pl-[110px] 2xl:pl-[131px]'>
                <p className='venturedebt text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[38px] 2xl:text-[48px] mb-[28px] sm:mb-[38px] md:mb-[48px] xl:mb-[64px] !leading-[110%] !font-[100]'>“As partners to entrepreneurs, we pride ourselves on being a valued resource to our portfolio companies. Whether it&rsquo;
s access to our network, industry knowledge, or business experience, we are committed to helping our borrowers succeed.”</p>
                <p className='venturedebt text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[28px] mb-[15px] sm:mb-[18px] md:mb-[20px] xl:mb-[24px] !leading-[110%] !font-normal'>David Spreng</p>
                <p className='venturedebt text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] !leading-[110%] !font-[250] opacity-80'>Founder and CEO</p>
                </div>
           </div>
        </div>
        </motion.div>
    );
};

export default Page4;