"use client"
import { useState } from "react"
import { FaSearch, FaWhatsapp, FaUser } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
    // Implement search functionality here
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-red-700 font-bold text-xl">PharmaCare</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1 ml-8">
            {/* Search Bar */}
            <div className="w-1/3  max-w-lg relative">
                <input
                  type="text"
                  placeholder="Search for tests"
                  className="w-full pl-5 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch} type="submit" className="absolute right-5 top-1/2  -translate-y-1/2 cursor-pointer ml-3 text-red-600">
                  <FaSearch />
                </button>
            </div>

            {/* Right side items */}
            <div className="ml-6 flex items-center space-x-4">
              {/* WhatsApp Chat */}
              <a
                href="https://wa.me/1234567890" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-200"
              >
                <FaWhatsapp className="text-xl mr-1" />
                <span>Chat</span>
              </a>

              {/* Login Button */}
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center">
                <FaUser className="mr-2" />
                Login
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600 focus:outline-none">
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 space-y-4">
          {/* Mobile Search */}
        <div className="relative ">
            <input
              type="text"
              placeholder="Search for tests, medications..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="absolute right-5 top-1/2  -translate-y-1/2   ml-3 text-red-600">
              <FaSearch />
            </button>
        </div>

          {/* Mobile WhatsApp Chat */}
          <a
            href="https://wa.me/1234567890" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-600 hover:text-red-800 transition-colors duration-200 py-2"
          >
            <FaWhatsapp className="text-xl mr-2" />
            <span>Chat with us on WhatsApp</span>
          </a>

          {/* Mobile Login Button */}
          <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center justify-center">
            <FaUser className="mr-2" />
            Login
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
