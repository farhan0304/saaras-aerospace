import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logo from '../assets/logo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;
  
  const [wth,setWth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () => setWth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    if(wth>768){
      setIsOpen(false);
    }

    return () => window.removeEventListener('resize', handleResize);
  },[wth])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show navbar
        setIsVisible(true);
      }

      // Set isScrolled state for changing navbar background
      setIsScrolled(currentScrollY > 20);

      lastScrollY = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 delay-200 ${
        isScrolled ? "bg-gray-50 shadow-md" : "bg-transparent"
      } ${!isOpen?`${isVisible? "translate-y-0" : "-translate-y-full"}`:``}`}>
      <div className="mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="SAARAS Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/about" className={({ isActive }) => isActive ? `text-blue-600 font-bold` : `${isScrolled?"hover:text-gray-600":"text-gray-50 hover:text-gray-300"} `}>About Us</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? `text-blue-600 font-bold` : `${isScrolled?"hover:text-gray-600":"text-gray-50 hover:text-gray-300"} `}>Our Services</NavLink>
          <NavLink to="/training" className={({ isActive }) => isActive ? `text-blue-600 font-bold` : `${isScrolled?"hover:text-gray-600":"text-gray-50 hover:text-gray-300"} `}>Training</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? `text-blue-600 font-bold` : `${isScrolled?"hover:text-gray-600":"text-gray-50 hover:text-gray-300"} `}>Contact Us</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`${isScrolled?"text-gray-700":"text-gray-50"} hover:text-blue-600`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-64 h-screen bg-gray-50 shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-4">
          <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
            ABOUT US
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
            OUR SERVICES
          </Link>
          <Link to="/training" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
            TRAINING
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
            CONTACT US
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

