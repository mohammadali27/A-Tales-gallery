import React from "react";
import PhotoCard from "./PhotoCard";
import Link from "next/link";

const TopTales = async () => {
  const res = await fetch("https://a-tales-gallery.vercel.app/data.json");
  const data = await res.json();
  console.log(data, "photos");
  const topPhoto = data.slice(0, 4);
  return (
    <div>
      <div className="items-center mx-auto justify-center text-center mt-10 mb-5">
        <h1 className="font-extrabold text-3xl ">Top Tales</h1>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center mt-10 mb-5 container mx-auto gap-5">
        {topPhoto.map((item) => (
          <PhotoCard key={item.id} item={item} />
        ))}
      </div>
      <Link href="/Allphotos">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto items-center justify-center mb-5 mt-5 block ">
          View All Tales
        </button>
      </Link>
    </div>
  );
};

export default TopTales;
