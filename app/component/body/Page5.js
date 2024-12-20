import React from 'react';
import Image from 'next/image';
import image5 from '../image/image5.png';

const Page5 = () => {
    return (
        <div>
            <div className='container mx-auto py-[60px] md:py-[80px] lg:py-[120px] xl:py-[150px] 2xl:py-[200px] sm:px-0 px-[24px]'>
                <p className='venturedebt text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] !leading-[110%] !font-[250] mb-[20px] sm:mb-[30px] md:mb-[48px]'>Industry Partners</p>
                <h1 className='venturedebt text-[29px] sm:text-[33px] md:text-[44px] lg:text-[54px] xl:text-[74px] 2xl:text-[84px] mb-[50px] sm:mb-[70px] md:mb-[90px] xl:mb-[110px] !leading-[110%] '>Flexible capital solutions to help <br/> businesses grow.</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-between'>
                    <div className=' py-[40px] sm:py-[50px] md:py-[30px] xl:py-[93px] border-[1px] border-[#E4E4E4]
                    px-[30px] sm:px-[40px] md:px-[50px] xl:px-[84px]'>
                        <ul>
                        <li className='venturedebt text-[24px] md:text-[30px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] mb-[18px] sm:mb-[28px] md:mb-[31px] xl:mb-[41px] !leading-[110%] !font-[100] hover:!font-[200] !text-[#919191] hover:!text-[#0F0F11] duraction-300'>Venture Capital</li>
                        <li className='venturedebt text-[24px] md:text-[30px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] mb-[18px] sm:mb-[28px] md:mb-[31px] xl:mb-[41px] !leading-[110%] !font-[100] hover:!font-[200] !text-[#919191] hover:!text-[#0F0F11] duraction-300'>Private Equity</li>
                        <li className='venturedebt text-[24px] md:text-[30px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] mb-[18px] sm:mb-[28px] md:mb-[31px] xl:mb-[41px] !leading-[110%] !font-[100] hover:!font-[200] !text-[#919191] hover:!text-[#0F0F11] duraction-300'>Investment Banks</li>
                        <li className='venturedebt text-[24px] md:text-[30px] lg:text-[44px] xl:text-[54px] 2xl:text-[64px] mb-[18px] sm:mb-[28px] md:mb-[31px] xl:mb-[41px] !leading-[110%] !font-[100] hover:!font-[200] !text-[#919191] hover:!text-[#0F0F11] duraction-300'>Commercial Banks</li>
                        </ul>
                    </div>
                    <div className=''>
                        <Image className='w-full' src={image5} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page5;