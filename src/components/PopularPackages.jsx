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
    <div className=" container px-4  max-w-7xl mx-auto">
 <div className="grid grid-cols-4 gap-4">
    {
    healthCheckups.map((product)=>{
        return  <div className="max-w-sm rounded-md shadow-sm p-0.5  overflow-hidden bg-white">
    <img className="w-full h-50 object-cover" src={placholder} alt="Product Image" />
    <div className="px-5 py-5">
      <h2 className="text-lg font-semibold mb-1 font-['inter'] capitalize">{product.title}</h2>
      <div className="flex gap-2 items-center text-gray-600 text-sm mb-4">
            <FaCheck  className='text-blue-600 text-base'/>
       {
        product.type
       }
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-green-600">&#8377;{product.price}</span>
        <button className="bg-red-600 text-white text-sm font-medium py-2 cursor-pointer px-5 rounded-md hover:bg-red-700 transition">
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
