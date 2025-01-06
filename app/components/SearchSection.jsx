import React from 'react'
import InputItem from './inputItem'
import { Button } from '@nextui-org/react'


function SearchSection() {
  return (
    <div className='p-2 md:p-5 border-[2px] border-yellow-500 rounded-2xl'>
        <p className='text-[20px] font-bold'>Book a Cab</p>
        <div className='relative'>
        <InputItem type="source"/>
        <div className='absolute  h-[2.5rem] border-2 border-dashed w-[2px]  border-yellow-500 top-1/2 left-[1.3rem] transform -translate-y-1/2' />
        <InputItem type="destination"/>
        </div>
        <Button className='w-full bg-yellow-500 text-white font-semibold mt-5' >
            Search
         </Button>
        
    </div>
  )
}

export default SearchSection