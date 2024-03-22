import React from 'react'
import bgHighlight from '@/images/hightlight/Grid.png'
import icon1 from '@/images/hightlight/Items.svg'
import icon2 from '@/images/hightlight/Items (1).svg'
import icon3 from '@/images/hightlight/Items (2).svg'
import icon4 from '@/images/hightlight/Items (3).svg'
import card from '@/images/hightlight/Card.png'
import Image from 'next/image'
import light from '@/images/hightlight/Light.png'
import hover from '@/images/hightlight/hover.png'
import Box from '../button'
const HighLight = () => {
    return (

        <main className='bg-[#000] relative'>
            <div className='w-full lg:w-[1312px] hight_light mx-auto h-[860px] relative'>
                <section className='pt-[70px]'>
                    <Box className='button mx-auto'>
                        <button>Highlight</button>
                    </Box>
                    <div className='grid grid-cols-2 w-full lg:w-[1097px] mx-auto mt-[40px] relative z-20'>
                        <div className='w-full h-[267px] relative flex flex-col items-center justify-center px-[10px] lg:px-0'>
                            <Image src={card} alt='card' fill priority />
                            <div className='relative flex flex-col items-center gap-3'>
                                <Image src={icon1} alt='icon' />
                                <p className='text-base lg:text-lg text-[#fff] font-medium text-center'>Communities</p>
                                <p className='text-sm font-normal text-[#8F9399] text-center'>Endorsed by 3 communities with over 20k members each.</p>
                            </div>
                        </div>
                        <div className='w-full h-[267px] relative flex flex-col items-center justify-center px-[10px] lg:px-0'>
                            <Image src={card} alt='card' fill priority />
                            <div className='relative flex flex-col items-center gap-3'>
                                <Image src={icon2} alt='icon' />
                                <p className='text-base lg:text-lg text-[#fff] font-medium text-center'>Funding </p>
                                <p className='text-sm font-normal text-[#8F9399] text-center mt-3'>Executing strategic investments of over $50k per project.</p>
                            </div>
                        </div>
                        <div className='w-full h-[267px] relative flex flex-col items-center justify-center px-[10px] lg:px-0'>
                            <Image src={card} alt='card' fill priority />
                            <div className='relative flex flex-col items-center gap-3'>
                                <Image src={icon2} alt='icon2' />
                                <p className='text-base lg:text-lg text-[#fff] font-medium text-center'>Marketing</p>
                                <p className='text-sm font-normal text-[#8F9399] text-center mt-3'>Endorsed by 3 communities with over 20k members each.</p>
                            </div>
                        </div>
                        <div className='w-full h-[267px] relative flex flex-col items-center justify-center px-[10px] lg:px-0'>
                            <Image src={card} alt='card' fill priority />
                            <div className='relative flex flex-col items-center gap-3'>
                                <Image src={icon3} alt='icon' />
                                <p className='text-base lg:text-lg text-[#fff] font-medium text-center'>Media</p>
                                <p className='text-sm font-normal text-[#8F9399] text-center mt-3'>Media support provided by major partners
                                    (including Cointelegraph).</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Image src={light} alt='light' className='absolute top-0 right-0' />

        </main>
    )
}

export default HighLight