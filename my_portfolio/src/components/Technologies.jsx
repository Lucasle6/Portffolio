import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";


const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='p-4'>
                <TbBrandNextjs className='text-7xl'/>
            </div>
            <div className='p-4'>
                <SiJavascript className='text-7xl text-yellow-500'/>
            </div>
            <div className='p-4'>
                <FaCss3 className='text-7xl text-blue-500'/>
            </div>
            <div className='p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </div>            
            <div className='p-4'>
                <RiTailwindCssFill className='text-7xl text-cyan-600'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies