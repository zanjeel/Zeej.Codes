import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu } from 'lucide-react';
import { categories } from '../data/components';
import * as Icons from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="flex overflow-hidden bg-transparent border-b border-gray-700 sticky backdrop-blur-lg top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex mr-52 md:-mr-6 lg:mr-52 xl:lg:mr-96">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-extrabold">Z E E J </span>
              <span className="text-xl ml-2 font-extralight"> C O D E S</span>
              
            </Link>
            </div>

            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                {categories.map((category) => {
                  const Icon = Icons[category.icon as keyof typeof Icons];
                  return (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                        location.pathname === `/category/${category.id}`
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{category.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {categories.map((category) => {
              const Icon = Icons[category.icon as keyof typeof Icons];
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === `/category/${category.id}`
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{category.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;