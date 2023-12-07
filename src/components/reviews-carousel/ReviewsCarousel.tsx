import reviews from "../../data/customer-reviews.json";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider
} from "pure-react-carousel";
import { useGetDeviceTypeFromScreen } from "../../hooks/useGetDeviceTypeFromScreen";
import { Arrow } from "../categories-carousel/Arrow";
import { ReviewCard } from "./ReviewCard";

export const ReviewsCarousel = () => {
  const deviceType = useGetDeviceTypeFromScreen();

  return (
    <CarouselProvider
      totalSlides={reviews.length}
      visibleSlides={deviceType === "mobile" ? 1 : 2}
      infinite={true}
      step={1}
      naturalSlideHeight={215}
      naturalSlideWidth={480}
      isPlaying={true}
    >
      {/* Whole section container */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Title and control buttons */}
        <div className="flex items-end gap-8 md:flex-col md:items-start">
          <h3
            className="text-3xl font-semibold capitalize md:text-5xl"
            style={{ lineHeight: 1.4 }}
          >
            What our <span className="text-primary">students</span> say about us
          </h3>
          <div className="w-min min-w-max">
            <ButtonBack className="mr-8 rounded-full border border-primary bg-white">
              <Arrow direction="left" />
            </ButtonBack>
            <ButtonNext className="rounded-full border border-primary bg-white">
              <Arrow direction="right" />
            </ButtonNext>
          </div>
        </div>
        {/* The carousel itself */}
        <Slider className="col-span-2 md:w-[125%]">
          {reviews.map((review, index) => (
            <Slide key={index} index={index}>
              <ReviewCard review={review} />
            </Slide>
          ))}
        </Slider>
      </div>
    </CarouselProvider>
  );
};
