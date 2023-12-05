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
import { CategoryCard } from "./CategoryCard";

export const CategoriesCarousel = () => {
  return (
    <CarouselProvider
      totalSlides={categories.length}
      visibleSlides={4}
      infinite={true}
      step={1}
      naturalSlideHeight={400}
      naturalSlideWidth={300}
      isPlaying={true}
    >
      <div className="relative">
        <Slider>
          {categories.map((category, index) => (
            <Slide key={index} index={index} className="border">
              <CategoryCard
                key={`category-card-idx-${index}`}
                category={category}
              />
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="absolute left-4 top-1/2 hidden -translate-y-1/2 md:block">
          <Arrow direction="left" />
        </ButtonBack>
        <ButtonNext className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:block">
          <Arrow direction="right" />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};
