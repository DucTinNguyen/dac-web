import React from 'react'
import skin from '@/images/banner/skin.png'
import star from '@/images/banner/star.png'
import Image from 'next/image'
import Button from '../button'
import Box from '../button'
import Heading from '../heading'
import Title from '../heading/title'
import ButtonSecondary from '../button/btn-secondary'

const Banner = () => {
    return (
        <main className='w-full h-[700px] bg-[#000] relative'>
            <div className='w-full lg:w-[1440px] h-full mx-auto banner'>
                <video
                    className="h-full w-full mx-auto object-cover mix-blend-luminosity"
                    src="images/banner/speed-light.webm"
                    typeof='video/webm'
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>
                <div className='w-full lg:w-[682px] content flex flex-col items-center gap-8'>
                    <Box className='button'>
                        <button>Introduction</button>
                    </Box>
                    <div>
                        <Heading text='Degen Capital Authentic' className='mb-4 lg:text-[64px] text-[32px]' />
                        <Title text='The First VC Evolution' />
                    </div>
                    <p className='text-[#fff] opacity-50 font-medium text-sm lg:text-base w-full lg:w-[640px] mx-auto text-center'>Powered by communities, revolutionizes traditional venture capital models by prioritizing community engagement and collaboration throughout the investment process.</p>
                    <ButtonSecondary text='Get Started' />
                </div>
            </div>

            <Image src={skin} alt='skin' priority className='absolute bottom-0 left-1/2 -translate-x-1/2 mix-blend-lighten' />
            <Image src={star} alt='start' className='absolute w-full h-full top-0 left-0' />
        </main>
    )
}

export default Banner