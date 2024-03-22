import React from 'react'
import bgJoinus from '@/images/joinus/bgJonius.png'
import Image from 'next/image';
import ButtonSecondary from '../button/btn-secondary';
import ic_email from '@/icons/email.svg'
import ic_twitter from '@/icons/twiiter.svg'
import ic_telegram from '@/icons/telegram.svg'
import elipse from '@/images/joinus/Ellipse 2.png'
import elipse1 from '@/images/joinus/Ellipse 3.png'
import line1 from '@/images/joinus/Line 144.png'
import line2 from '@/images/joinus/Line 142.png'
import bgStar from '@/images/joinus/star.png'
import bgMoon from '@/images/joinus/bgMoon.png'
import Title from '../heading/title';

const JoinUs = () => {
    return (
        <div className='w-full h-full bg-top bg-[#000] join_us relative'>
            <Image src={bgStar} alt='start' className='top-[-100px] left-0 w-full h-full absolute'/>
            <div className='content w-[1094px] h-[420px] mx-auto p-[1px] relative z-[10]'>
                <div className='bg-[rgba(0,0,0,0.75)] w-full h-full rounded-2xl flex items-center'>
                    <div className='w-[774px] mx-auto relative z-10'>
                        <Title text='Join Us!' className='text-[36px] font-bold' />

                        <p className='text-base text-[#fff] font-medium my-8'>DAC revolutionizes traditional venture capital by harnessing the collective strength and diversity of communities to drive innovation and foster inclusive growth. Join now to always get updated with exciting news!</p>
                        <form className='flex items-center justify-between gap-4'>
                            <div className='input_wrap grow h-[50px]'>
                                <input type='email' placeholder='Enter your email' className='input w-full h-full  py-[10px] px-6 placeholder:text-[#687176] text-[#fff]' />
                            </div>
                            <ButtonSecondary text='Join our newsletter' />
                        </form>
                        <div className='flex items-center justify-end gap-6 mt-8'>
                            <Image src={ic_email} alt='email' className='w-10 h-10 min-w-10' />
                            <Image src={ic_twitter} alt='email' className='w-10 h-10 min-w-10' />
                            <Image src={ic_telegram} alt='email' className='w-10 h-10 min-w-10' />
                        </div>

                    </div>
                </div>
                <Image src={elipse} alt='elipse' className='absolute top-0 left-0' />
                <Image src={elipse1} alt='elipse' className='absolute top-1/2 -translate-y-1/2 right-0' />
            </div>
            <Image src={line1} alt='line' className='absolute top-[-50px] left-0' />
            <Image src={line2} alt='line' className='absolute top-[66px] w-[500px] right-0' />
            <figure className='h-[603px] relative'>
                <Image src={bgMoon} alt='moon' fill/>
            </figure>
        </div>
    )
}

export default JoinUs;