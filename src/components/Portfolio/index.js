import React from "react";
import Photo0 from "../../assets/images/small/landscape/0.jpg";
import Photo1 from "../../assets/images/small/landscape/1.jpg";
import Photo2 from "../../assets/images/small/landscape/2.jpg";
import Photo3 from "../../assets/images/small/landscape/3.jpg";
import Photo4 from "../../assets/images/small/landscape/4.jpg";
import Photo5 from "../../assets/images/small/landscape/5.jpg";

function Portfolio() {
  const imagesPool = [
    { src: Photo0, text: "first project" },
    { src: Photo1, text: "second project" },
    { src: Photo2, text: "second project" },
    { src: Photo3, text: "second project" },
    { src: Photo4, text: "second project" },
    { src: Photo5, text: "second project" },
  ];

  return (
    <section className="my-5">
      {imagesPool.map((imgSrc, index) => (
        <img src={imgSrc.src} key={index} alt="Portfolio images" />
      ))}
    </section>
  );
}

export default Portfolio;
