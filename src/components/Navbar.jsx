import Link from "next/link";
import React from "react";

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-purple-800 text-white">
      <div className="flex items-center gap-2">
        <Image src="/globe.svg" alt="Logo" width={50} height={50} />

        <p className="text-white text-2xl font-bold">A Tales gallery</p>
      </div>
      <div className="flex gap-4 items-center mx-auto justify-center font-bold">
        <ul>
          <li className=" border-2 border-gray-400 rounded-lg px-4 py-2">
            <Link href="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li className=" border-2 border-gray-400 rounded-lg px-4 py-2">
            <Link href="/Allphotos">All Photos</Link>
          </li>
        </ul>
        <ul>
          <li className=" border-2 border-gray-400 rounded-lg px-4 py-2">
            <Link href="/MyProfile">My Profile</Link>
          </li>
        </ul>
      </div>
      <div className=" border-2 border-gray-400 rounded-lg px-4 py-2">
        <Link href="/signin">Signin</Link>
      </div>
    </div>
  );
};

export default Navbar;
