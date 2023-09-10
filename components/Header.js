import React from "react";
import Image from "next/image";
import icon from "../public/icon.png";
// import { ImInstagram, ImLinkedin } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
// import {
//   HiHome,
//   HiUser,
//   HiViewColumns,
//   HiRectangleGroup,
//   HiChatBubbleBottomCenterText,
//   HiEnvelope,
// } from "react-icons/hi2";

// nav data
// export const navData = [
//   { name: "home", path: "/" },
//   { name: "about", path: "/" },
//   { name: "destinations", path: "/Map" },
//   { name: "blog", path: "/" },
// ];


function Header() {
  return (
    <header className="sticky z-50 grid grid-cols-4 bg-white shadow-md p-5 md:p-10">
      {/* Left div */}
      <div className=" relative flex items-center cursor-pointer my-auto text-gray-500 text-xl">
        <Image
          src={icon}
          alt="My icon"
          objectFit="contain"
          objectPosition="left"
          width={150}
          height={150}
        />
        KKs Travel Diary
      </div>
      <div className=" bg-gray-100 h-20 text-shadow-lg col-span-2 flex items-center shadow-sm text-gray-500 font-mono pl-20 pr-20 ">
        <Link href="/" className="flex-grow cursor-pointer">Home</Link>
        <Link href="/" className="flex-grow cursor-pointer">About</Link>
        <Link href="/Maps" className="flex-grow cursor-pointer">Destinations</Link>
        <p>Blog</p>
      </div>
      <div className="relative items-center">
        <div className="items-center right-0 top-0 flex absolute pl-10 space-x-3 ">
          <a
            href="https://www.linkedin.com/in/kanya-krishi14/"
            className="youtube social"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/kanya.krishi"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.twitter.com/kanyakrishi"
            className="twitter social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/kanyakrishi/"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

//  <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
//   <input
//     className="pl-5 bg--transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400"
//     type="text"
//     placeholder="Start your Search.."
//   />
//   <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
// </div>
