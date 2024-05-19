import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'



const PaymentConfirmed = () => {
  return (
    <section className="flex flex-col gap-5 items-center justify-center h-full">
        <CheckIcon className='bg-btnGreen w-12 h-12 text-white rounded-md'/>
        <p className='font-medium text-xl'>Your purchase was succesful!</p>
        <button className="bg-primary text-white font-medium rounded-md py-2 w-2/4 lg:w-1/3 mt-16">Continue</button>
    </section>
  )
}

export default PaymentConfirmed