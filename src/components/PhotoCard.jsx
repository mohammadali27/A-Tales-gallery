import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PhotoCard = ({ item }) => {
  return (
    <Card className="border rounded-xl shadow-lg p-5">
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
      <Button variant="outline" className="w-full">view more</Button>
    </Card>
  );
};

export default PhotoCard;
