import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaCaretLeft, FaCaretRight, FaHome, FaShoppingCart } from 'react-icons/fa';

import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.webp'
import banner4 from '../assets/banner4.webp'

import {
  FaMicroscope,
  FaXRay,
  FaHeartbeat,
  FaEye,
  FaStethoscope,
  FaClinicMedical,
  FaProcedures,
  FaNotesMedical
} from "react-icons/fa";

const categories = [
  { title: "Laboratory\nTests", icon: <FaMicroscope className="w-8 h-8 text-blue-500" /> },
  { title: "CT\nScan", icon: <FaXRay className="w-8 h-8 text-blue-500" /> },
  { title: "MRI\nScan", icon: <FaXRay className="w-8 h-8 text-blue-500" /> },
  { title: "Ultrasound\nScan", icon: <FaStethoscope className="w-8 h-8 text-blue-500" /> },
  { title: "X-Ray-BMD-Mammography", icon: <FaNotesMedical className="w-8 h-8 text-blue-500" /> },
  { title: "Cardiology\nTests", icon: <FaHeartbeat className="w-8 h-8 text-blue-500" /> },
  { title: "Health\nPackages", icon: <FaClinicMedical className="w-8 h-8 text-blue-500" /> },
  { title: "Eye\nCheckup", icon: <FaEye className="w-8 h-8 text-blue-500" /> }
];


export const RightArrow=({className,onClick})=>{
    return(
       <div className=' w-10 top-1/2 -translate-y-1/2 -right-10 absolute flex items-center justify-center text-xl cursor-pointer' onClick={onClick}>
         <FaCaretRight/>
       </div> 
    )
}
export const LeftArrow=({className,onClick})=>{
    return(
       <div className=' w-10 top-1/2  -translate-y-1/2 -left-10 absolute flex items-center justify-center text-xl cursor-pointer' onClick={onClick}>
         <FaCaretLeft />
       </div> 
    )
}
const HeroSection = () => {
 


  const settings = {
    nextArrow:<LeftArrow/>,
    prevArrow:<RightArrow/>,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    
      responsive:[
             {
                breakpoint:1024,
                settings:{
                slidesToShow:1,
                slidesToScroll:1
                }
             }
      ]
      
  };

  const features=[
   banner2,banner3,banner4
  ]
 

  return (
    <div className='py-10'>
        <div className="container px-4 max-w-7xl mx-auto ">
            <div className='overflow-hidden relative'>
       <Slider {...settings} >
      {
        features.map((slide)=>{
            return <div className='px-2'>
<img src={slide} alt="" className='shadow-sm rounded-2xl h-full  object-cover max-xl:object-contain  w-full' />
            </div> 
        })
      }
    </Slider>
    </div>
    <div className="grid grid-cols-2 mt-4 gap-4 font-['poppins'] max-lg:grid-cols-1">
 <div className="flex items-center p-4 bg-white rounded-2xl shadow max-sm:py-2">
      <div className="p-3 bg-blue-100 rounded-full">
        <div className="h-8 w-8 text-green-400 text-2xl flex items-center justify-center max-lg:h-6 max-lg:w-6 max-lg:text-xl">
            <FaShoppingCart />
        </div>
      </div>
      <div className="ml-4 max-lg:mt-2">
        <h3 className="text-xl text-blue-600 font-semibold  tracking-wide capitalize max-lg:text-lg max-sm:text-sm">Prebuilt and user friendly health packages</h3>
        <p className="text-sm text-gray-600 mt-1">Buy packages on all your needs.</p>
      </div>
    </div>
 <div className="flex items-center p-4 bg-white rounded-2xl shadow max-sm:py-2">
      <div className="p-3 bg-blue-100 rounded-full">
        <div className="h-8 w-8 text-green-400 text-2xl flex items-center justify-center max-lg:h-6 max-lg:w-6 max-lg:text-xl">
<FaHome /> 
        </div>
      </div>
      <div className="ml-4 max-lg:mt-2">
        <h3 className="text-xl text-blue-600 tracking-wide  font-semibold max-lg:text-lg max-sm:text-sm">Free Home Sample Collection</h3>
        <p className="text-sm text-gray-600 mt-1">Book Free Home Collection across the city.</p>
      </div>
    </div>
    </div>

    </div>
    </div>
  )
}


export default HeroSection
