"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import React from 'react';
import Image from 'next/image';
import image1 from '../image/image 4.png';
import image2 from '../image/image 5.png';
import image3 from '../image/image 6.png';
import image4 from '../image/image 7.png';
import image5 from '../image/image 8.png';

const Page3 = () => {
    const images = [
        { src: image1, alt: 'Image 1' },
        { src: image2, alt: 'Image 2' },
        { src: image3, alt: 'Image 3' },
        { src: image4, alt: 'Image 4' },
        { src: image5, alt: 'Image 5' }
    ];
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Trigger when 20% of the component is visible
      });

    return (
        <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.8 }}
    >
            <div className='container mx-auto sm:px-0 px-[24px] py-[50px] sm:py-[70px] lg:py-[110px] 2xl:py-[150px]'>
                <div className='flex flex-wrap items-center justify-between gap-[20px] sm:gap-[30px] lg:gap-[50px] 2xl:gap-[71px]'>
                    {images.map((image, index) => (
                        <div key={index} className='w-[150px] md:w-[200px] lg:w-[250px]'>
                            <Image 
                                className='w-fit' 
                                src={image.src} 
                                alt={image.alt} 
                                layout='responsive' 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Page3;
