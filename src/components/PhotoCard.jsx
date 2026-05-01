import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PhotoCard = ({ item }) => {
  return (
    <div className="justify-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-10 mb-5 container mx-auto gap-5">
      <Card className=" ">
        <Image src={item.image} alt={item.title} width={500} height={300} />
        <p>{item.title}</p>
        <p>${item.price}</p>
      </Card>
    </div>
  );
};

export default PhotoCard;
