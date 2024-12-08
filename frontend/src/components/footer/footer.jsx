import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full md:px-8 mx-auto py-12 lg:px-12 px-4 grid lg:grid-cols-3 gap-8 text-[#4bdeff] bg-[#021526]">
      {/* info and socials */}
      <div>
        <div className="flex items-center">
          <img className="md:w-16 w-12" src={logo} alt="Logo" />
          <h1
            className="ml-4 md:text-4xl text-2xl text-[#22e000] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "silk" }}
          >
            gamerch
          </h1>
        </div>
        <p className="py-4 md:text-lg text-sm">
          This initiative is an interactive online platform that spotlights two
          prominent games each month, providing users with a wealth of resources
          including blogs, tutorials, videos, and exclusive merchandise created
          in partnership with game developers. Support out initiative by
          applying and sending in mails in the section above. We check
          everything you sent! 😉
        </p>
        <div className="flex justify-between md:w-[75%] w-[70%] my-6">
          <FaFacebookSquare size={30} />
          <FaFacebookMessenger size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      {/* links */}
      <div className="lg:col-span-2 flex md:justify-evenly justify-between md:mt-6">
        <div>
          <h6
            className="md:text-lg text-md text-[#22e000] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "silk" }}
          >
            Our Pages
          </h6>
          <ul>
            <li className="py-2 md:text-sm text-xs">Home</li>
            <li className="py-2 md:text-sm text-xs">Valorant</li>
            <li className="py-2 md:text-sm text-xs">Phasmophobia</li>
            <li className="py-2 md:text-sm text-xs">Store</li>
          </ul>
        </div>
        <div>
          <h6
            className="md:text-lg text-md text-[#22e000] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "silk" }}
          >
            Support
          </h6>
          <ul>
            <li className="py-2 md:text-sm text-xs">Email</li>
            <li className="py-2 md:text-sm text-xs">Phone</li>
            <li className="py-2 md:text-sm text-xs">Telegram</li>
            <li className="py-2 md:text-sm text-xs">WhatsApp</li>
          </ul>
        </div>
        <div>
          <h6
            className="md:text-lg text-md text-[#22e000] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "silk" }}
          >
            About us
          </h6>
          <ul>
            <li className="py-2 md:text-sm text-xs">Creators</li>
            <li className="py-2 md:text-sm text-xs">Developers</li>
            <li className="py-2 md:text-sm text-xs">Designers</li>
            <li className="py-2 md:text-sm text-xs">Managers</li>
            <li className="py-2 md:text-sm text-xs">Staff</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
