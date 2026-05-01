import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PageID = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://a-tales-gallery.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  console.log(photo, "photo details");
  return (
    <div>
      <Card className="border rounded-xl shadow-lg p-5 mb-5 mt-5">
        <div className=" relative w-full aspect-square">
          {" "}
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg"
            src={photo.image}
            alt={photo.title}
          />
        </div>
        <div className=" flex items-center justify-between mt-3 mb-5">
          <p>{photo.title}</p>
          <p>prise $ {photo.price}</p>
        </div>
       
         <span>{photo.category}</span>
         <span>{photo.currency}</span>
         <span>{photo.dimensions}</span>
         <span>{photo.material}</span>
        
      </Card>
    </div>
  );
};

export default PageID;
