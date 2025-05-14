import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
    
  return (
    <footer className="bg-teal-700 text-white py-12">
      <div className="container max-w-7xl mx-auto px-4 grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm text-gray-100">
            PharmaCom's chain of Diagnostic Centers challenges the limits of conventional diagnostics through innovative
            technology and groundbreaking procedures that help diagnose diseases with incredible speed and precision.
            A Unit of BHIMA LIFE SCIENCE LLP.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Why Prima</a></li>
            <li><a href="#" className="hover:underline">Certifications</a></li>
            <li><a href="#" className="hover:underline">Franchise Enquiry</a></li>
            <li><a href="#" className="hover:underline">Corporate Wellness Enquiry</a></li>
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Return & Refund Policy</a></li>
          </ul>
        </div>

        {/* Centers */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Centres</h3>
          <ul className="text-sm space-y-2">
            <li>Jayanagar</li>
            <li>Whitefield</li>
            <li>Yelahanka</li>
            <li>Kanakpura Road</li>
            <li>Rajarajeshwari Nagar</li>
            <li>Sarjapura Road</li>
            <li>Hulimavu</li>
            <li>Ramamurthy Nagar</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-4">info@primadiagnostics.com</p>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
      <a href="https://www.youtube.com/" target="_blank"  className="w-8 h-8 text-black bg-white flex items-center justify-center rounded-full hover:text-red-600" rel="noopener noreferrer" aria-label="YouTube">
        <FaYoutube />
      </a>
      <a href="https://www.facebook.com/" target="_blank"  className="w-8 h-8 text-black bg-white flex items-center justify-center rounded-full hover:text-red-600" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/" target="_blank"  className="w-8 h-8 text-black bg-white flex items-center justify-center rounded-full hover:text-red-600" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/" target="_blank"  className="w-8 h-8 text-black bg-white flex items-center justify-center rounded-full hover:text-red-600" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram />
      </a>
      <a href="https://www.pinterest.com/" target="_blank"  className="w-8 h-8 text-black bg-white flex items-center justify-center rounded-full hover:text-red-600" rel="noopener noreferrer" aria-label="Pinterest">
        <FaPinterestP />
      </a>
    </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Prima Diagnostics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
