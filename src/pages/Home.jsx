import React from 'react'
import HeroSection from '../components/HeroSection'
import CategorySection from '../components/CategorySection'
import PopularPackages from '../components/PopularPackages'
import ExtraCategories from '../components/ExtraCategories'
import OurTestimonial from '../components/OurTestimonial'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-red-50'>
      <HeroSection/>
      <CategorySection/>
      <PopularPackages/>
      <ExtraCategories/>
      <OurTestimonial/>
      <Footer/>
    </div>
  )
}

export default Home
