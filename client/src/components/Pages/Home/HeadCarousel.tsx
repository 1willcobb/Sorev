import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
import image1 from "/src/images/sorev-1.webp";
import image2 from "/src/images/sorev-2.webp";
import image3 from "/src/images/sorev-3.webp";
import image4 from "/src/images/sorev-4.webp";
import "@splidejs/react-splide/css";
import { StyledCTAButton } from "../../Header/CTA";

const StyledSliders = styled.div`
  position: relative;
  text-align: center;
  color: white;

  div {
    position: absolute;
    background: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 10%;
    h1 {
      background: transparent;
    }
  }
`;

const HeadCarousel = () => {
  const slideOptions = {
    rewind: false,
    autoplay: true,
    interval: 3000, // speed of slides
    type: "loop",
    speed: 1000, // speed of transition
    gap: "1rem",
    arrows: false,
    width: "100vw",
    pauseOnHover: true,
    lazyLoad: true,
    pagination: false,
  };

  const carouselData = [
    {
      image: image1,
      title: "WE DEVELOP COURSES FOR CREATORS",
      link: "/",
      cta: "Click Me",
    },
    {
      image: image2,
      title: "MULTIPLY & GROW YOUR BUISNESS",
      link: "/",
      cta: "Click Me",
    },
    {
      image: image3,
      title: "WE IMPLEMENT THE BEST MARKETING FOR CREATORS",
      link: "/",
      cta: "Click Me",
    },
    {
      image: image4,
      title: "UNLOCK YOUR INFLUENCE",
      link: "/",
      cta: "Click Me",
    },
  ];

  return (
    <Splide options={slideOptions} aria-label="My Favorite Images">
      {carouselData.map((slide) => (
        <SplideSlide>
          <StyledSliders>
            <img width="100%" src={slide.image} alt={slide.title} />
            <div>
              <div>
                <h1>{slide.title}</h1>
                <StyledCTAButton to={slide.link}>
                  <h3>{slide.cta}</h3>
                </StyledCTAButton>
              </div>
            </div>
          </StyledSliders>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HeadCarousel;
