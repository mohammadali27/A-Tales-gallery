import Image from "next/image";
import { Card, Button } from "@heroui/react";
import Link from "next/link";

const AllPhotosCard = async () => {
  const res = await fetch("https://a-tales-gallery.vercel.app/data.json");
  const photos = await res.json();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mt-10 mb-5 container mx-auto gap-5">
      {photos.map((item) => (
        <Card key={item.image} className="border rounded-xl shadow-lg p-5">
          <div className=" relative w-full aspect-square">
            {" "}
            <Image
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg"
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className=" flex items-center justify-between mt-3 mb-5">
            <p>{item.title}</p>
            <p>prise $ {item.price}</p>
          </div>
          <Link href={`/Allphotos/${item.id}`}>
            <button  className="w-full outline outline-1 outline-gray-400 rounded py-2 px-4">
              View Details
            </button>
          </Link>
        </Card>
      ))}
      ;
    </div>
  );
};

export default AllPhotosCard;
