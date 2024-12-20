import React from 'react';
import Image from 'next/image';

// Import images
import image1 from '../image/image 4.png';
import image2 from '../image/image 5.png';
import image3 from '../image/image 6.png';
import image4 from '../image/image 7.png';
import image5 from '../image/image 8.png';

const Page3 = () => {
    // Array of image objects
    const images = [
        { src: image1, alt: 'Image 1' },
        { src: image2, alt: 'Image 2' },
        { src: image3, alt: 'Image 3' },
        { src: image4, alt: 'Image 4' },
        { src: image5, alt: 'Image 5' }
    ];

    return (
        <div>
            <div className='container mx-auto sm:px-0 px-[24px] py-[50px] sm:py-[70px] lg:py-[110px] 2xl:py-[150px]'>
                <div className='flex flex-wrap items-center justify-between gap-[20px] sm:gap-[30px] lg:gap-[50px] 2xl:gap-[71px]'>
                    {/* Map through the images array */}
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
        </div>
    );
};

export default Page3;
