import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "@emotion/styled";
import image1 from "/src/Images/sorev-1.webp";
import image2 from "/src/Images/sorev-2.webp";
import image3 from "/src/Images/sorev-3.webp";
import image4 from "/src/Images/sorev-4.webp";
import "@splidejs/react-splide/css";

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
    interval: 5000, // speed of slides
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
      link: "/products",
      cta: "Click Me",
    },
    {
      image: image2,
      title: "MULTIPLY & GROW YOUR BUISNESS",
      link: "/why",
      cta: "Click Me",
    },
    {
      image: image3,
      title: "WE IMPLEMENT THE BEST MARKETING FOR CREATORS",
      link: "/faq",
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
              </div>
            </div>
          </StyledSliders>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default HeadCarousel;
