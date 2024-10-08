import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing the icons

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Using React's state to control the toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggling the state on button click
  };

  return (
    <nav className=" px-6 lg:px-16 py-4 ">
      <div className="w-full flex justify-between items-center mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/">
            <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
          </a>
        </div>

        {/* Menu Links (for larger screens) */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black hover:text-gray-900"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu} // onClick handler for toggling the menu
            className="text-black"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col mt-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-2 text-black hover:text-gray-900"
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
