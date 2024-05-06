import React from 'react'

const PaymentInterface = () => {
  return (
    <section className="flex flex-col items-center gap-8 mx-auto my-20">
        <h1 className="text-black font-semibold text-center text-2xl font-poppins">Final step, complete your payment</h1>
        <p className="text-gray-600 text-lg text-center font-poppins font-light">
            To start your subscription, input your card details to make payment. <br />
            You will be redirected to your banks authorization page.
        </p>
        <form action="" className="flex flex-col gap-4 items-start mt-10 w-1/3 mx-auto">
            <input className="bg-gray-300 text-primary border-primary border rounded-lg py-1 px-2 outline-none focus:ring-1 focus:ring-primary placeholder:text-primary w-full"
            type="text" name="" id="holderName" placeholder='CARD HOLDER NAME'/>
            <input className="bg-gray-300 text-primary border-primary border rounded-lg py-1 px-2 outline-none focus:ring-1 focus:ring-primary placeholder:text-primary w-full"
            type="numeric" name="" id="cardNumber" placeholder='CARD NUMBER'/>
            <input className="bg-gray-300 text-primary border-primary border rounded-lg py-1 px-2 outline-none focus:ring-1 focus:ring-primary placeholder:text-primary w-2/4"
            type="numeric" name="" id="expDate" placeholder='M/Y'/>
            <input className="bg-gray-300 text-primary border-primary border rounded-lg py-1 px-2 outline-none focus:ring-1 focus:ring-primary placeholder:text-primary w-1/3"
             type="numeric" name="" id="cvv" placeholder='CVV'/>
            <button className="bg-primary py-1 px-12 rounded-md text-white self-center mt-5  max-w-[300px]"type="submit">Pay</button>
        </form>
    </section>
  )
}

export default PaymentInterface