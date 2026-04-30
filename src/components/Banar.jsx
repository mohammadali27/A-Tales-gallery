import Image from "next/image";
import React from "react";
import BanarImage from "@/assets/banar.png";
const Banar = () => {
  return (
    <div className="text-center mt-10 mx-auto">
      <p className="font-extrabold text-4xl ">
        Welcome to the Tales gallery!
      </p>
      <div className=" justify-center items-center flex mt-10">
        <Image
          src={BanarImage}
          alt="Description of the image"
          width={1300}
          height={1}
        />
      </div>
    </div>
  );
};

export default Banar;
