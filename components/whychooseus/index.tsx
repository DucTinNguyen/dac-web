import React from 'react'
import Box from '../button'
import Heading from '../heading'
import overlay from '@/images/whychooseus/overlay.png';
import grid from '@/images/whychooseus/grid-why.png'
import road from '@/images/whychooseus/road.png'
import logo from '@/images/whychooseus/Logo.png'
import number1 from '@/images/whychooseus/1.png'
import number2 from '@/images/whychooseus/2.png'
import number3 from '@/images/whychooseus/3.png'
import number4 from '@/images/whychooseus/4.png'
import Image from 'next/image';

const WhyChooseUs = () => {
    return (
        <main className='bg-[#000] pt-[50px] relative'>

            <Image src={road} alt='road' className='absolute top-0 left-1/2 -translate-x-1/2 w-[490px] h-[360px]' />

            <div className='w-full lg:w-[820px] mx-auto relative'>
                <Box className='button mx-auto'>
                    <button>Why Choose Us</button>
                </Box>
                <Heading text='Why Choose Us?' className='text-[48px] font-bold mt-6 mb-4' />
                <p className='description text-base font-medium text-center'>Our goal is to deliver genuine investment value and facilitate the continuous growth and expansion of projects.</p>
            </div>

            <div className='w-[1440px] h-[657px] mx-auto relative mt-20'>
                <Image src={overlay} alt='overlay' fill className='z-[2]' />
                <Image src={grid} alt='grid' fill className='z-[1]' />
                <div className='w-[120px] h-[120px] z-20 flex items-center justify-center absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000]'>
                    <Image src={logo} alt='logo' className='w-20 h-20' />
                </div>
                <div className='w-[1094px] mx-auto pt-5 grid grid-cols-2 gap-4 relative z-[10]'>
                    <div className='w-full h-[275px] flex items-center justify-center flex-col'>
                        <Image src={number1} alt='1' />
                        <p className='w-[100px] h-1 bg-gradient-retangle mt-4 mb-6'></p>
                        <p className='text-[#fff] text-sm font-normal text-center'>Many investment funds focus solely on funding without adding real value.</p>
                    </div>
                    <div className='w-full h-[275px] flex items-center justify-center flex-col'>
                        <Image src={number2} alt='1' />
                        <p className='w-[100px] h-1 bg-gradient-retangle mt-4 mb-6'></p>
                        <p className='text-[#fff] text-sm font-normal text-center'>The two primary needs of any project: funding and marketing.</p>
                    </div>
                    <div className='w-full h-[275px] flex items-center justify-center flex-col'>
                        <Image src={number3} alt='1' />
                        <p className='w-[100px] h-1 bg-gradient-retangle mt-4 mb-6'></p>
                        <p className='text-[#fff] text-sm font-normal text-center'> With DCA - We provide both investment and marketing support to investors across Vietnam and worldwide.</p>
                    </div>
                    <div className='w-full h-[275px] flex items-center justify-center flex-col'>
                        <Image src={number4} alt='1' />
                        <p className='w-[100px] h-1 bg-gradient-retangle mt-4 mb-6'></p>
                        <p className='text-[#fff] text-sm font-normal text-center'>With full support from 3 major communities in Vietnam, we boast a network of over 100 KOLs and various communities of all sizes</p>
                    </div>
                </div>
            </div>


        </main>
    )
}

export default WhyChooseUs