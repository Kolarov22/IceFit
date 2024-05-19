import React from 'react'
import PaymentInterface from '../components/PaymentInterface'

const PaymentPage = () => {
  return (
    <>
      <section className="ellipses">
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <div className="ellipse ellipse4"></div>
      </section>
      <div className="glass overflow-hidden">
        <PaymentInterface />
      </div>
    </>
  );
}

export default PaymentPage