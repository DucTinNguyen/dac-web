import React from 'react'

const Title = ({ text }: {
  text: string;
}) => {
  return (
    <h1 className='title lg:text-[64px] text-[32px] tracking-[-0.96px] lg:tracking-[-1.96px] text-center'>
      {text}
    </h1>
  )
}

export default Title