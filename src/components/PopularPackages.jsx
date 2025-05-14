import React from 'react'
import { FaCheck } from 'react-icons/fa';
import placholder from '../assets/placeholder.svg'
const PopularPackages = () => {
    const healthCheckups = [
  {
    title: "prima executive health checkup (MALE)",
    type: "Walk-in Test",
    price: 4599
  },
  {
    title: "prima executive health checkup (FEMALE)",
    type: "Walk-in Test",
    price: 4599
  },
  {
    title: "Executive Health Check-up at Home (Female)",
    type: "Home Collection Test",
    price: 2220
  },
  {
    title: "Executive Health Check-up at Home (Male)",
    type: "Home Collection Test",
    price: 2190
  },
  {
    title: "PRIMA MASTER HEALTH CHECK-UP – MALE",
    type: "Walk-in Test",
    price: 2899
  },
  {
    title: "PRIMA MASTER HEALTH CHECK-UP – FEMALE",
    type: "Walk-in Test",
    price: 2899
  },
  {
    title: "Master Health Check-up at Home",
    type: "Home Collection Test",
    price: 1690
  },
  {
    title: "PRIMA WELL WOMEN PACKAGE",
    type: "Walk-in Test",
    price: 7599
  }
];

  return (
   <div className='py-10'>
    <div className=" container px-4  max-w-7xl mx-auto max-sm:px-2">
         <h2 className='text-2xl font-bold mb-6 font-["inter"] text-center'>Explore <span className="text-red-600">Popular packages</span></h2>
 <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:gap-2">
    {
    healthCheckups.map((product)=>{
        return  <div className="max-w-sm rounded-md shadow-sm p-0.5  overflow-hidden bg-white">
    <img className="w-full h-50 object-cover" src={placholder} alt="Product Image" />
    <div className="px-5 py-5 max-sm:p-2 max-sm:py-5">
      <h2 className="text-lg font-semibold mb-1 font-['inter'] capitalize max-sm:text-sm">{product.title}</h2>
      <div className="flex gap-2 items-center text-gray-600 text-sm mb-4 ">
            <FaCheck  className='text-blue-600 text-base max-sm:text-sm'/>
       {
        product.type
       }
      </div>
      <div className="flex items-center justify-between max-sm:block">
        <h1 className="text-xl font-bold text-green-600 max-sm:text-lg">&#8377;{product.price}</h1>
        <button className="bg-red-600 text-white text-sm font-medium py-2 cursor-pointer px-5 rounded-md hover:bg-red-700 transition  max-sm:mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
    })
 }
 </div>
  </div>
</div>

  )
}

export default PopularPackages
