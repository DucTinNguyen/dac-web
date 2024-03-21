import React from 'react'
import Box from '../button'
import backer from '@/images/backers/Grid.png'
import Heading from '../heading'
import icon1 from '@/images/backers/Items.svg'
import icon2 from '@/images/backers/Items (1).svg'
import icon3 from '@/images/backers/Items (2).svg'
import Image from 'next/image'

const Backer = () => {
    return (
        <div className='w-full bg-[#000] pb-20 backers'>
            <div className='w-full lg:w-[1172px] mx-auto'>
                <Box className='button mx-auto'>
                    <button>Backers</button>
                </Box>
                <Heading className='mt-6 text-[48px] font-bold' text='Backers' />
                <div className='flex items-center gap-10 mt-6 w-[647px] mx-auto'>
                    <div className='w-[196px] h-[196px] relative'>
                        <div className='relative flex flex-col gap-4 items-center justify-center w-full h-full'>
                            <Image src={icon1} alt='icon1' />
                            <p className='title text-xl font-medium'>AZCOINVEST</p>
                        </div>
                        <Image src={backer} alt='backer' fill priority />
                    </div>
                    <div className='w-[196px] h-[196px] relative'>
                        <div className='relative flex flex-col gap-4  items-center justify-center w-full h-full '>
                            <Image src={icon2} alt='icon1' />
                            <p className='title text-xl font-medium'>RL</p>
                        </div>
                        <Image src={backer} alt='backer' fill priority />
                    </div>
                    <div className='w-[196px] h-[196px] relative'>
                        <div className='relative flex flex-col gap-4 items-center justify-center w-full h-full '>
                            <Image src={icon3} alt='icon1' />
                            <p className='title text-xl font-medium'>DUCK CRYPTO</p>
                        </div>
                        <Image src={backer} alt='backer' fill priority />
                    </div>
                </div>
                <p className='title text-center mt-6 text-[24px] font-medium'>Over 100 KOLs and more than 1000 communities in Vietnam.</p>
            </div>

            <div className='w-[600px] h-[326px] mx-auto video mix-blend-normal'>
                <video
                    className="h-full w-full mx-auto object-cover mix-blend-multiply"
                    src="images/portfolio/earth.webm"
                    typeof='video/webm'
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>
            </div>


        </div>
    )
}

export default Backer