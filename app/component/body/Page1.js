import React from 'react';

const Page1 = () => {
    return (
        <div>
            <div className='container mx-auto py-[60px] md:py-[80px] lg:py-[120px] xl:py-[150px] 2xl:py-[200px] sm:px-0 px-[24px]'>
                <h1 className='venturedebt text-[31px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[74px] 2xl:text-[84px] mb-[80px] sm:mb-[110px] md:mb-[140px] lg:md-[170px] xl:mb-[200px] 2xl:mb-[232px]'>Venture debt financing for late and growth-stage companies</h1>
                <div className='flex justify-start items-start flex-col sm:flex-row gap-[20px] sm:gap-0'>
                    <div className='flex-1'>
                        <a className='paragaphabout text-[18px] md:text-[20px] xl:text-[24px] !text-[#0F0F11]' href='#about'>ABOUT</a>
                    </div>
                    <div className='flex-1'>
                    <p className='paragaphabout text-[18px] md:text-[20px] xl:text-[24px]'><sapn className="text-[#0F0F11]">We partner with passionate and driven management teams</sapn> who use our capital to grow &#8722; whether that&rsquo;
                    s market share, revenue, profitability, production, or capacity. Unlike equity financing, venture debt is minimally dilutive, allowing founders and early investors to retain more ownership of their business.</p>
                    <button className=" flex justify-center items-center gap-1 group mt-[25px] md:mt-[30px] xl:mt-[40px]"><p className='learnmorebutton text-[18px] md:text-[20px] xl:text-[24px] px-[30px] md:px-[40px] xl:px-[48px] h-[65px] flex justify-center items-center !bg-[#BFE953]'>Learn More 
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
                
            </div>
        </div>
    );
};

export default Page1;