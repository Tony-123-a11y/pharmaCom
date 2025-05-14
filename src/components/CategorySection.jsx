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

const CategorySection = () => {
  return (
    <section className="py-10 bg-white">
           <div className="container px-4  max-w-7xl mx-auto ">
      <h2 className='text-xl font-bold mt-4 font-["inter"]'>Categories</h2>
     
        <div className="grid grid-cols-8 gap-4 mt-4 max-xl:grid-cols-4 max-sm:grid-cols-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center text-center shadow-sm"
            >
              <div className="mb-2">{cat.icon}</div>
              <h3 className="text-sm font-medium whitespace-pre-line ">{cat.title}</h3>
            </div>
          ))}
        </div>
     
      </div>
    </section>
  );
};

export default CategorySection;
