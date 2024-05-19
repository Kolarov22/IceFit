import React from 'react'
import Navigator from '../components/Navigator'
import InstructorDashboard from '../components/InstructorDashboard'
const InstructorDashboardPage = () => {
  return (
    <>
      <section className="ellipses">
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <div className="ellipse ellipse4"></div>
      </section>
      <div className="glass overflow-auto">
        <Navigator />
        <InstructorDashboard />
      </div>
    </>
  );
}

export default InstructorDashboardPage