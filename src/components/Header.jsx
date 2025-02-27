import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerHeight = 80; // in pixels

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 h-20 w-full bg-white text-black px-5 py-3 flex items-center justify-between shadow-md z-50">
       <div className="text-3xl font-bold cursor-pointer leading-tight">
        <span className="block">Aum</span>
        <span className="block ml-2 text-cornell">Tyagi</span>
      </div>
      <nav>
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            <li>
              <Link to="about" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                About
              </Link>
            </li>
            <li>
              <Link to="articles" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Articles
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Skills
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Experience
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Education
              </Link>
            </li>
            <li>
              <Link to="volunteering" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Volunteering
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-cornell focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-cornell text-white flex flex-col items-center shadow-md z-40">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link onClick={toggleMenu} to="about" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                About
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="articles" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Articles
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="skills" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Skills
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="experience" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Experience
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="education" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Education
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="volunteering" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
              Volunteering
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="contact" smooth={true} duration={500} offset={-headerHeight} className="cursor-pointer hover:text-cornellDark">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
