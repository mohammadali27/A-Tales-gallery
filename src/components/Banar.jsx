import Image from "next/image";
import React from "react";
import BanarImage from "@/assets/banar.png";
import Marquee from "react-fast-marquee";
const Banar = () => {
  return (
    <div className="text-center mt-10 mx-auto">
      <p className="font-extrabold text-4xl ">
        Welcome to the Tales gallery!
      </p>
      <Marquee pauseOnHover={true} className="text-justify mt-5">
        <span className="text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quidem blanditiis earum laudantium, cupiditate nobis consectetur minima dolores impedit assumenda hic ea excepturi error quia quas, illo corrupti facere laborum saepe illum placeat! Quis cupiditate quae illum minima molestiae modi animi aliquid perferendis. Vitae soluta asperiores facilis ea assumenda iste, libero voluptatum, recusandae magni eos quis ipsa reprehenderit qui dignissimos tempora voluptatem. Voluptate facere cumque iure doloremque, eaque doloribus odit veritatis accusantium fuga, aliquam officiis mollitia distinctio nulla neque. Incidunt, impedit nihil possimus dolores sunt odit dolorum minima soluta a corrupti, totam fugit optio praesentium eos nisi quam aspernatur inventore ex itaque eaque vitae id accusamus qui cupiditate. Delectus aut quaerat fuga laboriosam quidem minus, voluptatum sint optio. Vitae pariatur quod, a mollitia ipsam recusandae quo earum, cupiditate corrupti ea delectus veritatis quae voluptatem. Facilis dolorem unde fugiat animi voluptates culpa enim quidem earum obcaecati magnam saepe accusamus optio, id soluta cupiditate quasi, sunt laborum beatae vero ducimus modi quisquam reiciendis officiis. Nostrum optio exercitationem, voluptates modi eum quibusdam aspernatur ipsum similique dolorem possimus vitae quos obcaecati. Ducimus rem maiores dignissimos laudantium esse quibusdam ut, explicabo placeat debitis non qui eligendi culpa molestiae? Blanditiis est aspernatur assumenda, maxime ex cupiditate odit eius libero ratione, illo ipsum. Eaque, distinctio ex modi quo doloribus laboriosam hic dicta, asperiores sapiente sit obcaecati repellat. Iste officiis enim atque illo, laudantium aliquid. Ad molestiae, earum, perferendis assumenda odio id rem temporibus eos hic totam labore nemo at nulla, doloremque voluptates minima vero repellat aut ducimus.</span>

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
