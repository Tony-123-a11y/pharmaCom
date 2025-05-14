import React from 'react'
import {
  FaHome,
  FaUserCheck,
  FaHeartbeat,
  FaProcedures,
  FaLungs
} from "react-icons/fa";

const healthPackages = [
  { title: "Home\nCollection Package", icon: <FaHome className="w-8 h-8 text-blue-500" /> },
  { title: "General\nHealth Packages", icon: <FaUserCheck className="w-8 h-8 text-blue-500" /> },
  { title: "Senior Citizen\nHealth Packages", icon: <FaProcedures className="w-8 h-8 text-blue-500" /> },
  { title: "Heart Health\nCheckup Packages", icon: <FaHeartbeat className="w-8 h-8 text-blue-500" /> },
  { title: "Diabetics\nHealth Package", icon: <FaUserCheck className="w-8 h-8 text-blue-500" /> },
  { title: "Lungs & Respiratory\nPackages", icon: <FaLungs className="w-8 h-8 text-blue-500" /> }
];

const ExtraCategories = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container px-4 max-w-7xl mx-auto">
        <h2 className='text-2xl text-center font-bold mt-4 font-["inter"] capitalize'>Explore <span className='text-red-600'>more packages</span></h2>
        <div className="grid grid-cols-6 gap-4 mt-8 max-xl:grid-cols-3 max-sm:grid-cols-2">
          {healthPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm"
            >
              <div className="mb-2">{pkg.icon}</div>
              <h3 className="text-sm font-medium whitespace-pre-line">{pkg.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExtraCategories
