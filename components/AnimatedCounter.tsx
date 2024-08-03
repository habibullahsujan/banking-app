'use client'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  const []=useState(0)
  useEffect(()=>{


  })
  return (
    <div className='w-full'>
      <CountUp  decimals={2} duration={2.75} decimal='.' prefix='$' end={amount} />
    </div>
  )
}

export default AnimatedCounter