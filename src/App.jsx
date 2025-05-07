import React from 'react'
import HeroSection from './views/home/HeroSection'
import HowItWorks from './views/home/HowItWorks'
import AvailableSupervisors from './views/home/AvailableSupervisors'
import StudentFeedback from './views/home/StudentFeedback'
import CallToAction from './views/home/CallToAction'
//Images
import naveedImage from './assets/images/Naveed Ahmed.jpg';
import salmanImage from './assets/images/Salman Irfan.jpg';
import namraImage from './assets/images/Namra Tahir.jpg';
//Props
import SupervisorCard from './views/home/SupervisorCard'
import TestimonialBox from './views/home/TestimonialBox'
//Children Props
import CardLayout from './views/home/CardLayout'
import SectionContainer from './views/home/SectionContainer'

const App = () => {
  return (
    <>
    <HeroSection/>
    <HowItWorks/>
    <AvailableSupervisors/>
    <StudentFeedback/>
    <CallToAction/>
    
    <SectionContainer bg="bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Supervisors</h2>
        <CardLayout>
          <SupervisorCard name="Naveed Ahmed" domain="AI & ML" image={naveedImage} />
          <SupervisorCard name="Salman Irfan" domain="Web & Mobile Dev" image={salmanImage} />
          <SupervisorCard name="Namra Tahir" domain="AI & Data" image={namraImage} />
        </CardLayout>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl font-semibold text-center mb-6">Student Testimonials</h2>
        <div className="space-y-4 max-w-xl mx-auto">
          <TestimonialBox feedback="The app made it super easy to find and connect with my FYP supervisor!" student="Sara Ali" />
          <TestimonialBox feedback="No more waiting outside offices!" student="Ahmed Raza" />
        </div>
      </SectionContainer>
    </>
  )
}
export default App
