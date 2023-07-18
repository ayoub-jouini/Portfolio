"use client";

import { Carousel } from "@material-tailwind/react";

interface Props {
  images: string[];
}

const ProjectCarousel: React.FC<Props> = ({ images }) => {
  return (
    <Carousel className="rounded-xl">
      {images.map((image, key) => (
        <div key={key} className="flex justify-center items-center">
          <img
            src={`/images/${image}`}
            alt={image}
            className="object-contain"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
