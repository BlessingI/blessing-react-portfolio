import React from "react";
import Photo0 from "../../assets/images/small/landscape/0.jpg";
import Photo1 from "../../assets/images/small/landscape/1.jpg";
import Photo2 from "../../assets/images/small/landscape/2.jpg";
import Photo3 from "../../assets/images/small/landscape/3.jpg";
import Photo4 from "../../assets/images/small/landscape/4.jpg";
import Photo5 from "../../assets/images/small/landscape/5.jpg";

function Portfolio() {
  const imagesPool = [
    {
      src: Photo0,
      text: "Blessing Igbadumhe's Blog",
      href: "https://blessing-igbadumhe-blog.herokuapp.com/",
    },
    {
      src: Photo1,
      text: "The Occasional Movie site",
      href: "https://rjimeneztech.github.io/MovieFinder/",
    },
    {
      src: Photo2,
      text: "Weather Dashboard",
      href: "https://blessingi.github.io/Weather-Dashboard/",
    },
    { src: Photo5, text: "Tech Jobs", href: "https://techjob2.herokuapp.com/" },
    {
      src: Photo4,
      text: "Code Quizz",
      href: "https://blessingi.github.io/codeQuiz/",
    },
    { src: Photo3, text: "Git it done", href: "https://blessingi.github.io/git-it-done/" },
  ];

  return (
    <section>
      <h1 id="about">Portfolio</h1>
      <br />
      <h4>Click on Image to view website </h4>
      <br />
      <div className="flex-row">
        {imagesPool.map((imgSrc, index) => (
          <div>
            <p>{imgSrc.text}</p>
            <a href={imgSrc.href} target="blank">
              <img
                src={imgSrc.src}
                key={index}
                text={imgSrc.text}
                alt="Portfolio images"
                className="img-thumbnail mx-1"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
