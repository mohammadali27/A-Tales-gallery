import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Catagory = async () => {
  const res = await fetch("https://a-tales-gallery.vercel.app/data.json");
  const catagorys = await res.json();

  return (
    <div className="hidden md:flex space-x-3 space-y-3 mt-5 gap-3">
      {catagorys.map((cat) => (
        <Link key={cat.id} href={`?catagory=${cat.title.toLowerCase()}`}>
          <Button variant="outline" size="sm">
            <p>{cat.title}</p>
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Catagory;
