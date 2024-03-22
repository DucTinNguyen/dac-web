import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image';
import React from 'react'


interface PropsCard {
    number: StaticImport;
    des: string;
}

const Card = ({number, des}:PropsCard) => {
  return (
      <div className="w-full h-[275px] flex items-center justify-center flex-col">
          <Image src={number} alt="1" />
          <p className="w-[100px] h-1 bg-gradient-retangle mt-4 mb-6"></p>
          <p className="text-[#fff] text-sm font-normal text-center">
              {des}
          </p>
      </div>
  )
}

export default Card