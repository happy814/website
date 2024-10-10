import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#" },
  { name: "Merch Store", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="select-none pt-10 px-7 lg:px-6 py-5 relative bg-[#151217] border-b-2 border-white">
      <div className="w-full flex justify-between items-center mx-auto">
        {/* Logo Section */}
        <div className="flex items-center relative z-30 ">
          <a href="/">
            <img className="h-8 w-auto" src="/nav-img/logo2.png" alt="Logo" />
          </a>
        </div>

        {/* Menu Links (for larger screens) */}
        <div className="hidden uppercase md:flex space-x-5 md:pl-16 lg:pl-80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300  font-semibold  hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex ">
          <div className="lg:pl">
            <img className="w-20" src="nav-img/ex.png" alt="mode" />
          </div>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden z-30 relative">
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label="Toggle navigation menu"
          >
            <div className="relative h-6 w-6">
              <FaBars
                className={`absolute h-6 w-6 transition-all duration-500 ease-in-out ${
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
              />
              <FaTimes
                className={`absolute h-6 w-6 transition-all duration-500 ease-in-out ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute  top-0 left-0 w-3/4 h-screen  transition-transform p-5 duration-300 backdrop-blur-md z-20 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex flex-col space-y-2 mt-20 z-20 ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block font-semibold text-white hover:text-orange-500 hover:opacity-80 px-4 py-2 "
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
