import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import logo from '../assets/logo-footer.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src={logo}
              alt="SAARAS Logo"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-400">
              Revolutionizing the drone industry with innovative and cutting-edge solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-400 hover:text-white">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                +91 92054 43367
              </li>
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                gargdefence@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                Rohini, New Delhi
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SAARAS Aerospace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

