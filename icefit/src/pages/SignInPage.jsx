import React from 'react'
import SignIn from '../components/SignIn'

const SignInPage = () => {
  return (
    <>
      <section className="ellipses">
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <div className="ellipse ellipse4"></div>
      </section>
      <div className="glass overflow-hidden">
        <SignIn/>
      </div>
    </>
  );
}

export default SignInPage