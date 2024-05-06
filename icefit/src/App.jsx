
import './App.css'
import Navbar from './components/Navbar'
import Navigator from './components/Navigator'
import LandingHero from './components/LandingHero'
import Contact from './components/Contact'
import Subscriptions from './components/Subscriptions'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import PaymentConfirmed from './components/PaymentConfirmed'
import PaymentInterface from './components/PaymentInterface'
import ClientSettings from './components/ClientSettings'
import TrainingPlan from './components/TrainingPlan'
import InstructorDashboard from './components/InstructorDashboard'


function App() {
  

  return (
    <>
      
                            <section className="ellipses">
                              <div className="ellipse ellipse1"></div>
                              <div className="ellipse ellipse2"></div>
                              <div className="ellipse ellipse3"></div>
                              <div className="ellipse ellipse4"></div>
                            </section>
                            <div className="glass overflow-auto">
                               <Navigator/>
                                <InstructorDashboard />                         
                            </div>
                  
    </>
  )
}

export default App
