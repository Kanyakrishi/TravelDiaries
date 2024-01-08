import React, { useState } from "react";
import Image from "next/image";
import icon from "../public/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  MenuIcon
} from "@heroicons/react/solid";
// import {
//   HiHome,
//   HiUser,
//   HiViewColumns,
//   HiRectangleGroup,
//   HiChatBubbleBottomCenterText,
//   HiEnvelope,
// } from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/" },
  { name: "about", path: "/About" },
  { name: "destinations", path: "/Maps" },
  { name: "blog", path: "/Blog" },
];



function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md p-5 md:flex md:justify-between md:items-center">
      {/* Left div */}
      <div className="flex items-center space-x-3 ">
        <div className="flex-shrink-0">
          <Image src={icon} alt="My icon" objectFit="contain" objectPosition="left" width={150} height={150} />
        </div>
        <div className="hidden md:block text-xl text-gray-500">KKs Travel Diary</div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <MenuIcon className="h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex ${isOpen ? "flex" : "hidden"} justify-between flex-col md:flex-row space-x-0 md:space-x-4 md:border-2 rounded-full p-8 hover:opacity-80 hover:shadow-lg`}>
        <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
        <Link href="/About" className="text-gray-500 hover:text-gray-700">About</Link>
        <Link href="/Maps" className="text-gray-500 hover:text-gray-700">Destinations</Link>
        <Link href="/Blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
      </div>


      {/* Right div - Social Icons */}
      <div className="flex space-x-3">
        <a href="https://www.linkedin.com/in/kanya-krishi14/" className="text-blue-600"><FontAwesomeIcon icon={faLinkedin} size="lg" /> </a>
        <a href="https://www.facebook.com/kanya.krishi" className="text-blue-600"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
        <a href="https://www.twitter.com/kanyakrishi" className="text-blue-600"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
        <a href="https://www.instagram.com/kanyakrishi/" className="text-pink-600"><FontAwesomeIcon icon={faInstagram} size="lg" /> </a>
      </div>
    </header>
  );
}

export default Header;

