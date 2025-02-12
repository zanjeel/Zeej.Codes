import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2, Menu } from "lucide-react";
import { categories } from "../data/components";
import * as Icons from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        {/* Logo with hover and click animation */}
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Code2 className="w-8 h-8 text-purple-400" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, color: "#a855f7" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="text-xl font-extrabold"
          >
            Z E E J
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, color: "#a855f7" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="text-xl ml-2 font-extralight"
          >
            C O D E S
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-4">
            {categories.map((category) => {
              const Icon = Icons[category.icon as keyof typeof Icons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === `/category/${category.id}`
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{category.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-90 text-white z-[9999] mt-16 overflow-y-auto"
          style={{
            opacity: 1,
            visibility: "visible",
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {categories.map((category) => {
              const Icon = Icons[category.icon as keyof typeof Icons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === `/category/${category.id}`
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
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
