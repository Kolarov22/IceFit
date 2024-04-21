
import './App.css'
import Navbar from './components/Navbar'
import Navigator from './components/Navigator'
import LandingHero from './components/LandingHero'
import Contact from './components/Contact'

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
                                <Navbar />
                                <Contact />
                                
                                
                            
                            </div>
                  
    </>
  )
}

export default App
