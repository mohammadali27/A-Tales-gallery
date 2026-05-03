import Image from "next/image";
import React from "react";
import BanarImage from "@/assets/banar.png";
import Marquee from "react-fast-marquee";
const Banar = () => {
  return (
    <div className="text-center mt-10 mx-auto">
      <p className="font-extrabold text-4xl mx-auto">
        Welcome to the Tales gallery!
      </p>
      <Marquee pauseOnHover={true} className="text-justify mt-5">
        <span className="text-2xl">
          The Tales Gallery is a wonderful world of creativity. The metal and
          copper tiles you see here are more than just simple designs; they can
          breathe life into any project. Let’s explore what else is possible
          with them: The main features of these tiles are their unique textures
          and variety of colors. Each tile carries the mark of time, known as a
          'patina' 🕰️, which fits perfectly into both modern and vintage
          designs. If you want to highlight a specific part of a room, you can
          use these tiles to create an accent wall. It will instantly transform
          an ordinary space into something royal and artistic. Beyond personal
          use, these tile designs can be used for business or digital content
          creation: Digital Backgrounds: These can be used as aesthetic
          backgrounds for your website or social media posts. 💻 Fashion Design:
          You can take inspiration from these patterns to create digital prints
          or mosaic designs on fabric. 👗 Furniture Design: By placing these
          tiles on old tables or cabinets, you can turn them into
          expensive-looking 'showpieces'. 🪑 We can use this canvas to create
          something new together. To get started, which path would you like to
          explore? Interior Design: Designing a real-world space, like a kitchen
          backsplash or a living room feature wall. 🏠 Digital Art & Content:
          Creating a digital background, a social media template, or a pattern
          for fashion. 📱 Furniture Transformation: Planning how to upcycle an
          old piece of furniture using these textures. 🛠️ Which one of these
          sounds most interesting to you?
        </span>
      </Marquee>
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
