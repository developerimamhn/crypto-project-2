import React from 'react';
import Image from 'next/image';
import logo from '../image/logo.png';

const Footer = () => {
    return (
        <div className="bg-[#BFE953]">
            <div className='container mx-auto pt-[60px] md:pt-[80px] lg:pt-[120px] xl:pt-[150px] 2xl:pt-[200px] sm:px-0 px-[24px]'>
                <h1 className='venturedebt text-[29px] sm:text-[33px] md:text-[44px] lg:text-[54px] xl:text-[74px] 2xl:text-[84px] pb-[50px] sm:pb-[70px] md:pb-[90px] xl:pb-[110px] !leading-[110%] !font-[100]'>Stay in touch by subscribing <br/> to our email list</h1>
                <div className='flex justify-center items-center gap-[30px] sm:gap-[20px] xl:gap-8 flex-col sm:flex-row pb-[50px] sm:pb-[70px] md:pb-[93px] xl:pb-[116px]'>
                    <input className='venturedebt w-full h-[63px] sm:h-[103px] bg-transparent border-0 outline-none border-b-[1px] border-[#000] placeholder:text-[#0F0F11] text-[18px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]' type='email' placeholder='Email'/>
                    <button className=" flex justify-center items-center gap-1 group "><p className='learnmorebutton text-[18px] md:text-[20px] xl:text-[24px] w-[220px] flex justify-center items-center !bg-[#ffffff] h-[63px] sm:h-[103px]'>Learn More 
                    </p>
                    <div className='w-[65px] h-[63px] sm:h-[103px] flex justify-center items-center bg-[#ffffff] ml-[0px] group-hover:ml-0 opacity-0 group-hover:opacity-100 duration-300 pointer-events-none group-hover:pointer-events-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" className='' viewBox="0 0 17 17" fill="none">
                        <path d="M10.2212 4.20044L14.5208 8.50002L10.2212 12.7996" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.47913 8.5H14.4004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    </button>
                </div>
                <div className='px-[24px] sm:px-[50px] md:px-[70px] lg:px-[90px] xl:px-[120px] 2xl:px-[150px] pt-[30px] sm:pt-[44px] md:pt-[54px] lg:pt-[64px] xl:pt-[74px] 2xl:pt-[84px] bg-[#0F0F11]'>
                    <div className='flex justify-between items-start gap-[62px]'>
                        <div className=''>
                            <h1 className='Froggo-Logo w-[150px] sm:w-[180px] lg:w-[200px] 2xl:w-[221px]'><Image className='w-full' src={logo} alt="Loading..."/></h1>
                            <div className='flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[32px] mt-[14px] sm:mt-[17px] lg:mt-[20px] xl:mt-[29px] '>
                            <div className=''>
                                <h3 className='venturedebt text-[15px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] pb-[15px] lg:pb-[20px] !leading-[110%] !font-[200] !text-[#BFE953]'>Silicon Valley</h3>
                                <h3 className='venturedebt text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !leading-[110%] !font-[200] !text-[#fff] opacity-80'>2061 Avy Avenue, 2nd Floor Menlo Park, CA 94025</h3>
                            </div>
                            <div className=''>
                                <h3 className='venturedebt text-[15px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] pb-[15px] lg:pb-[20px] !leading-[110%] !font-[200] !text-[#BFE953] w-full'>Chicago</h3>
                                <h3 className='venturedebt text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !leading-[110%] !font-[200] !text-[#fff] opacity-80 w-full'>205 N Michigan Ave #4200 Chicago, IL 60601</h3>
                            </div>
                            <div className=''>
                                <h3 className='venturedebt text-[15px] sm:text-[15px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] pb-[15px] lg:pb-[20px] !leading-[110%] !font-[200] !text-[#BFE953]'>New York City</h3>
                                <h3 className='venturedebt text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !leading-[110%] !font-[200] !text-[#fff] opacity-80'>100 Crosby Street #604 New York, NY 10012</h3>
                            </div>
                            </div>
                        </div>
                        <div className=''>
                        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[50px] sm:gap-[55px] md:gap-[65px] lg:gap-[75px] xl:gap-[86px] 2xl:gap-[53px] py-[20px] md:py-[32px] lg:py-[40px] xl:py-[50px] 2xl:py-[65px] sm:border-b-[1px] border-[#FFF] border-opacity-[0.1]'>
                            <ul className='flex flex-col gap-4 lg:gap-5'>
                                <h3 className='venturedebt !leading-[110%] !font-extralight text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] !text-[#fff] mb-[4px]'>Borrowers</h3>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Technology</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Healthcare</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Consumer</li>
                            </ul>
                            <ul className='flex flex-col gap-4 lg:gap-5'>
                                <h3 className='venturedebt !leading-[110%] !font-extralight text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] !text-[#fff] mb-[4px]'>About</h3>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Our Story</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Team</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Runway Careers</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Portfolio Jobs</li>
                            </ul>
                            <ul className='flex flex-col gap-4 lg:gap-5'>
                                <h3 className='venturedebt !leading-[110%] !font-extralight text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] !text-[#fff] mb-[4px]'>Industry Partners</h3>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Venture Capital</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Private Equity</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Investment Banks</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Commercial Banks</li>
                            </ul>
                            <ul className='flex flex-col gap-4 lg:gap-5'>
                                <h3 className='venturedebt !leading-[110%] !font-extralight text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] !text-[#fff] mb-[4px]'>Portfolio</h3>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Contact</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Investor Relations</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#BFE953] underline'>LP Login</li>
                            </ul>
                        </div>
                        <div className='hidden'>
                        <div className='flex justify-between items-center'>
                                <p className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Copyright © 2022 Runway Growth Capital. All Rights Reserved.</p>
                                <ul className='flex gap-4 pb-[30px] lg:pb-[48px] pt-[25px] lg:pt-[40px]'>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Privacy Policy</li>
                                <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Terms of Us</li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row  justify-center sm:justify-between items-center mt-[]'>
                        <p className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Copyright © 2022 Runway Growth Capital. All Rights Reserved.</p>
                        <ul className='flex gap-4 pb-[30px] lg:pb-[48px] pt-[25px] lg:pt-[40px]'>
                        <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Privacy Policy</li>
                        <li className='venturedebt !leading-[110%] !font-extralight text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] !text-[#fff] opacity-80'>Terms of Us</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;