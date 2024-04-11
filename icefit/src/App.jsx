
import './App.css'
import IceFit from './assets/images/IceFit.svg'

function App() {
  

  return (
    <>
      
                            <section className="ellipses">
                              <div className="ellipse ellipse1"></div>
                              <div className="ellipse ellipse2"></div>
                              <div className="ellipse ellipse3"></div>
                              <div className="ellipse ellipse4"></div>
                            </section>
                            <div className="glass overflow-hidden">
                              <nav className="lg:mx-20 flex items-center justify-between  border-primary border-b-2 pt-5 mx-2">
                                <div className="logo text-primary font-aldrich text-4xl lg:text-5xl">IceFit</div>
                                <div className="links flex items-center justify-between gap-10">
                                  <div>
                                    <ul className="flex items-center justify-between px-10 gap-16 text-primary font-poppins text-base font-medium">
                                      <li><a href="">About</a></li>
                                      <li><a href="">Features</a></li>
                                      <li><a href="">Support</a></li>
                                    </ul>
                                  </div>
                                  <div className="buttons flex items-center gap-5 text-primary">
                                    <button className='text-sm font-medium'>Sign In</button>
                                    <button className="bg-primary rounded text-white font-poppins text-sm font-medium px-1 py-2 md:px-4">Sign Up</button>
                                  </div>
                                </div>
                              </nav>
                              
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
                                  <button className="bg-primary rounded text-white px-4 py-2 lg:px-7 lg:py-4 ">Get Started</button>
                                  </div>
                                  <div>
                                  <img className='flex justify-center' src={IceFit} alt="IceFit Logo" />
                                  </div>
                                </div>
                                
                            
                            </div>
                  
    </>
  )
}

export default App
