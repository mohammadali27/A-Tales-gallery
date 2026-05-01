import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-purple-800 text-white">
      <div className="flex items-center gap-2">
        <Image src="/globe.svg" alt="Logo" width={50} height={50} />

        <p className="text-white text-2xl font-bold">A Tales gallery</p>
      </div>
      <div className="flex gap-4 justify-center font-bold">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/Allphotos">All Photos</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/MyProfile">My Profile</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <LoginButton />
      </div>
    </div>
  );
};

export default Navbar;
