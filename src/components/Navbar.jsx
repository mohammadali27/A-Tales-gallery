"use client";
import Link from "next/link";
import React, { useState } from "react";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handelLogout = async () => {
    await authClient.signOut();
  };
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);
  return (
    <div className="flex items-center justify-between p-4 bg-purple-800 text-white">
      <div className="flex">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className=""
        >
          <Image src="/globe.svg" alt="Logo" width={50} height={50} />
        </Button>
        <p className="text-white text-2xl font-bold">A Tales gallery</p>
      </div>

      <div
        className={`${isOpen ? "flex" : "hidden"}  md:flex lg:flex gap-4 items-center mx-auto justify-center font-bold relative`}
      >
        <ul className=" sm:text-left md:flex gap-4 items-center absolute top-10 -left-80 md:static bg-purple-800 p-4 rounded-lg">
          <li className=" border-2 border-gray-400 rounded-lg px-4 py-2 hover:bg-blue-500 hover:border-red-500">
            <Link href="/">Home</Link>
          </li>
          <li className=" border-2 border-gray-400 rounded-lg px-4 py-2 hover:bg-blue-500 hover:border-red-500">
            <Link href="/Allphotos">All Tiles</Link>
          </li>
          <li className=" border-2 border-gray-400 rounded-lg px-4 py-2 hover:bg-blue-500 hover:border-red-500">
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>
      </div>

      <div className="">
        {!user && (
          <ul className=" flex gap-4 items-center">
            <li className=" border-2 border-gray-400 rounded-lg px-4 py-2 hover:bg-blue-500 hover:border-red-500">
              <Link href="/signin">Signin</Link>
            </li>
            <li className=" border-2 border-gray-400 rounded-lg px-4 py-2 hover:bg-blue-500 hover:border-red-500">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        )}
        {user && (
          <ul className=" flex gap-4 items-center">
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt(0, 2)}</Avatar.Fallback>
            </Avatar>
            <li className=" border-2 border-gray-400 rounded-lg px-4 py-2 hover:bg-blue-500 hover:border-red-500">
              <Link href="/" onClick={handelLogout}>
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
