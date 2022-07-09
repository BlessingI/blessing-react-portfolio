import React, { useState } from "react";
// import photo from "../../assets/images/portfolioimages/photo0.jpeg";

const PhotoList = ({category}) => {
  const [photos] = useState([
    {
      name: "flipped side",
      category: "portfolioimages",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "occasion",
      category: "portfolioimages",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
    {
      name: "teams",
      category: "portfolioimages",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",
    },
  ]);
  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoList;
