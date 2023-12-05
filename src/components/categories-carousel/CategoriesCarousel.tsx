import "pure-react-carousel/dist/react-carousel.es.css";

import categories from "../../data/categories.json";

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider
} from "pure-react-carousel";
import { Arrow } from "./Arrow";

export const CategoriesCarousel = () => {
  return (
    <CarouselProvider
      totalSlides={categories.length}
      visibleSlides={4}
      infinite={true}
      step={1}
      naturalSlideHeight={400}
      naturalSlideWidth={300}
    >
      <div className="relative">
        <Slider>
          {categories.map((category, index) => (
            <Slide key={index} index={index} className="border">
              <article className="group relative h-full w-full">
                <img
                  src={category.thumbnail}
                  alt={`${category.name} thumbnail`}
                  className="absolute aspect-[3/4] h-full w-full object-cover object-center brightness-[40%]"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col justify-end gap-2 p-4 text-white">
                  <h3 className="text-3xl font-semibold">{category.name}</h3>
                  <p className="max-h-0 overflow-hidden text-lg transition-all duration-500 ease-in-out group-hover:max-h-64">
                    {category.description}
                  </p>
                </div>
              </article>
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="absolute left-4 top-1/2 -translate-y-1/2">
          <Arrow direction="left" />
        </ButtonBack>
        <ButtonNext className="absolute right-4 top-1/2 -translate-y-1/2">
          <Arrow direction="right" />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};
