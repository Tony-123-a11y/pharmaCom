import Slider from "react-slick";

const testimonials = [
  {
    name: "Anjali Mehta",
    email: "anjali.mehta@example.com",
    content:
      "The home collection service was super convenient. The staff was punctual and professional. Highly recommended!"
  },
  {
    name: "Rajeev Sharma",
    email: "rajeev.sharma@example.com",
    content:
      "Got my full body check-up done. The reports were detailed and the consultation was very helpful."
  },
  {
    name: "Sneha Kulkarni",
    email: "sneha.kulkarni@example.com",
    content:
      "Booking tests online was seamless. I received my reports digitally the same day. Great experience!"
  },
  {
    name: "Dr. Amit Joshi",
    email: "amit.joshi@example.com",
    content:
      "As a doctor, I recommend their diagnostics for their accuracy and prompt service. Trustworthy and efficient."
  }
];

const OurTestimonial = () => {
  const settings = {
   
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive:[
        {
            breakpoint:575,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
             
            }
        }
    ]
  };

  return (
    <section className="py-10 bg-red-50">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className='text-2xl font-bold mb-6 font-["inter"] text-center'>What Our <span className="text-red-600">Customers Say</span></h2>
       <div className="rounded-md overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => (
           <div className="px-2 bg-red-50 ">
             <div key={idx} className="p-6 bg-white rounded-md shadow text-center max-sm:min-h-55 min-h-50">
              <p className="text-gray-700 text-base mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="text-sm font-semibold text-blue-600">{testimonial.name}</div>
              <div className="text-xs text-gray-500">{testimonial.email}</div>
            </div>
           </div>
          ))}
        </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurTestimonial;
