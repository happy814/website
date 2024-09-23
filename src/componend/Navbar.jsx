import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Donation", href: "/donation" },
  { name: "Github", href: "https://github.com/Unsigned-Labs" },
  { name: "Discord", href: "https://discord.gg/YHZU4dwy" },
  { name: "Nostr", href: "/nostr" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="select-none px-7 lg:px-16 py-8 relative ">
      <div className="w-full flex justify-between items-center mx-auto">
        {/* Logo Section */}
        <div className="flex items-center relative z-30 ">
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
              className="text-black hover:opacity-80 font-semibold hover:text-gray-900"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden z-30 relative">
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
      <div
        className={`md:hidden absolute  top-0 left-0 w-3/4 h-screen  transition-transform p-5 duration-300 backdrop-blur-md z-20 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <div className="flex flex-col space-y-2 mt-20 z-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block font-semibold text-black hover:text-gray-900 hover:opacity-80 px-4  py-2"
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
