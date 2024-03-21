import React from 'react'

const Heading = ({ text, className }: {
  text: string;
  className?: string;
}) => {
  return (
    <h2 className={`${className} heading lg:text-[64px] text-[32px] tracking-[-0.96px] lg:tracking-[-1.96px] text-center`}>{text}</h2>
  )
}

export default Heading