"use client";

import { Carousel } from "@material-tailwind/react";

interface Props {
  images: string[];
}

const ProjectCarousel: React.FC<Props> = ({ images }) => {
  return (
    <Carousel className="rounded-xl">
      {images.map((image, key) => (
        <img
          key={key}
          src={`/images/${image}`}
          alt={image}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
