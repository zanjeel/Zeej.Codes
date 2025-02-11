import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Heart, Instagram } from 'lucide-react';
import { Code2, Menu } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="justify-center items-center grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="sm:mb-5 md:mb-1 lg:mb-13 mt-[-1px]" >
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="w-4 h-8 text-purple-400" />
              <span className="text-sm font-extrabold">Z E E J </span>
              <span className="text-sm ml-2 font-extralight"> C O D E S</span>
              
            </Link>
            <p className="mt-2 text-gray-400">
              Follow for more component additions. Request new components by email!
            </p>
            
            </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/category/buttons" className="text-gray-400 hover:text-white">
                  Components
                </Link>
              </li>
              <li>
                <Link to="/category/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/zanjeel/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/zeej.codes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/zanjeel-tariq-sahi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex items-center justify-center space-x-2 text-gray-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500" />
          <span>by zeej team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;