import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/service" },
  { name: "Merch Store", href: "/MerchStore" },
  { name: "About Us", href: "/aboutUs" },
  { name: "Contact Us", href: "/contactUs" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState<boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative select-none border-b-2 border-white bg-[#151217] px-3 py-5 lg:px-16">
      <div className="mx-auto flex w-full items-center justify-between">
        {/* Logo Section */}
        <div className="relative z-30 flex items-center">
          <a href="/">
            <img
              className="h-8 w-auto"
              src="/navbarImg/logo2.png"
              alt="Logo"
            />
          </a>
        </div>

        {/* Menu Links (for larger screens) */}
        <div className="hidden uppercase md:flex md:space-x-8 md:pl-16 lg:space-x-12 lg:pl-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-slate-300 hover:text-orange-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="relative z-30 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label="Toggle navigation menu"
          >
            <div className="relative h-6 w-6">
              <FaBars
                className={`absolute h-6 w-6 transition-all duration-500 ease-in-out ${
                  isMenuOpen
                    ? "rotate-90 opacity-0"
                    : "rotate-0 opacity-100"
                }`}
              />
              <FaTimes
                className={`absolute h-6 w-6 transition-all duration-500 ease-in-out ${
                  isMenuOpen
                    ? "rotate-0 opacity-100"
                    : "rotate-90 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-0 z-20 h-screen w-3/4 p-5 backdrop-blur-md transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="z-20 mt-20 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-2 font-semibold text-white hover:text-orange-500 hover:opacity-80"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
