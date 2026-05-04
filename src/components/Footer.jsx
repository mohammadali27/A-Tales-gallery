import React from "react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div className="  ">
      <div className=" mx-auto flex flex-col md:flex-row gap-8 items-center justify-between p-20 bg-gray-400">
        <div className=" items-center gap-3 ">
          <ul>
            <li>contect</li>
          </ul>
          <ul>
            <li>about</li>
          </ul>
          <ul>
            <li>Support: web@programming-hero.com</li>
          </ul>
        </div>
        <div className="">
          <ul>
            <li>Useful Links</li>
          </ul>
          <ul>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Success</li>
          </ul>
          <ul>
            <li>About us</li>
          </ul>
          <ul>
            <li>Refund policy</li>
          </ul>
        </div>
        <div className="gap-3">
          <p className="text-2xl font-bold mb-5">Follow Us</p>
          <ul className="flex items-center justify-center  gap-3">
            <li className=" ">
              <FaFacebook /> facebook
            </li>
            <li>
              {" "}
              <FaLinkedinIn />
              linkden
            </li>
            <li>
              {" "}
              <FaTwitter />
              twiter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
