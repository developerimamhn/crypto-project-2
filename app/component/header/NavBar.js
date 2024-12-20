"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import logo from '../image/logo.png';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='bg-[#0F0F11] relative z-30'>
            <header className=' container mx-auto flex justify-between items-center py-[18px] sm:py-[24px] relative px-[24px] sm:px-[0]'>
                <div className='sm:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[26px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                <h1 className='Froggo-Logo w-[140px] 2xl:w-[166px]'><Image src={logo} alt=''/></h1>
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 flex justify-between items-start sm:items-center gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] sm:bg-transparent bg-[#0F0F11] sm:flex-row flex-col p-[20px] sm:p-[0]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar`} href="#home">Borrowers<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.6 7.45825L11.1667 12.8916C10.525 13.5333 9.47503 13.5333 8.83336 12.8916L3.40002 7.45825" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                    <Link className='Link-manu-bar' href="#About">Industry Partners<svg xmlns="http://www.w3.org/2000/svg"      width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.6 7.45825L11.1667 12.8916C10.525 13.5333 9.47503 13.5333 8.83336 12.8916L3.40002 7.45825" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                    <Link className='Link-manu-bar' href="#Tokenomics">Portfolio</Link>
                    <Link className='Link-manu-bar' href="#disclaimer">Investor Relations</Link>
                </nav>

                
                <ul className=' manu-sosul-area sm:block hidden'>
                        <LiaBarsSolid className='text-white text-[24px]' />
                </ul>
                
                
            </header>
        </div>
    );
};

export default NavBar;