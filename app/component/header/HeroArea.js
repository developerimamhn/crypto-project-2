import Image from 'next/image';
import React from 'react';
import image1 from '../image/image1.png';

const HeroArea = () => {
    return (
        <div className='heeroarea relative z-[2] '>
            <Image className="absolute bottom-0 right-0 z-[-3] h-full" src={image1} alt=""/>
            <div className='container mx-auto pb-[50px] md:pb-[70px] lg:pb-[90px] xl:pb-[120px] 2xl:pb-[150px] sm:px-0 px-[24px]'>
                <h1 className='thereother text-[45px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[125px] 2xl:text-[152px] mb-[30px] sm:mb-[35px] lg:mb-[48px] pt-[200px] sm:pt-[240px] md:pt-[280px] lg:pt-[320px] xl:pt-[360px] 2xl:pt-[412px] '>The Other <div className='!text-[#BFE953]'>Growth Capital.</div></h1>
                <p className='Dilutive text-[20px] sm:text-[23px] md:text-[28px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] my-[20px] sm:my-[35px] lg:my-[48px]'>Minimally-Dilutive Venture Debt</p>
                <button className="flex justify-center items-center gap-1 group"><p className='learnmorebutton text-[18px] md:text-[20px] xl:text-[24px] px-[30px] md:px-[40px] xl:px-[48px] h-[65px] flex justify-center items-center'>Learn More 
                </p>
                <div className='w-[65px] h-[65px] flex justify-center items-center bg-[#BFE953] ml-[-65px] group-hover:ml-0 opacity-0 group-hover:opacity-100 duration-300 pointer-events-none group-hover:pointer-events-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" className='' viewBox="0 0 17 17" fill="none">
                    <path d="M10.2212 4.20044L14.5208 8.50002L10.2212 12.7996" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.47913 8.5H14.4004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
                </button>
            </div>
        </div>
    );
};

export default HeroArea;