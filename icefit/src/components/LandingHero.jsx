import React from 'react'
import IceFit from '../assets/images/IceFit.svg'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const LandingHero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-primary font-poppins px-32 h-full justify-center items-center'>
        <div className="flex-col flex gap-5 justify-center items-center md:items-start ">
            <div>
                <span className="text-2xl md:text-4xl text-center">Empower Your</span>
                <br/>
                <span className='text-2xl md:text-4xl text-center'>Wellness Journey!</span>
            </div>                
                <p className='text-center md:text-left'>Join IceFit today and transform your life with personalized training,
                 nutrition guidance, and the support you need to achieve
                 your healthiest self.</p>
                <button className="bg-primary font-semibold rounded text-white p-2 sm:pl-4 sm:pr-8 py-2 lg:pl-6 lg:pr-12 lg:py-5 relative">
                  Get Started <ChevronRightIcon className='w-5 h-5 absolute top-2.5 lg:top-1/3 right-2 lg:right-5 hidden sm:block'/>
                </button>
            </div>
            <div>
                <img className='flex justify-center' src={IceFit} alt="IceFit Logo" />
            </div>
    </div>
  )
}

export default LandingHero