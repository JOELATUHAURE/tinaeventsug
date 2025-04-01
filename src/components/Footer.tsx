import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';  // ✅ Corrected import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tinah Events</h3>
            <p className="text-gray-400">
              Transform your special moments into unforgettable experiences with our premium event services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <a href="tel:+256776664958" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +256776664958
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <a href="mailto:info@tinaheventsug.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  info@tinaheventsug.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-400">Mbarara, Uganda</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Tinah-Decor-and-Events-100040569746040/" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/tinaheventsug" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/channel/UCH52pjTra4DrRROLPBdZdQg" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.tiktok.com/@tinaheventsug01?_t=ZM-8v5knI4x9lN&_r=1" className="text-gray-400 hover:text-purple-400 transition-colors">
                <FontAwesomeIcon icon={faTiktok} className="h-6 w-6" />  {/* ✅ Corrected */}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Tinah Decor Events Ug. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
