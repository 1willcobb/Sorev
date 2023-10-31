import ContactUs from "./ContactUs";
import Inspo from "./Inspo";
import WhatWeDo from "./WhatWeDo";
import Creators from "./Creators";
import HeadCarousel from "./HeadCarousel";

const Home = () => {
  return (
    <>
      <HeadCarousel />
      <div>
        <WhatWeDo />
      </div>
      <Inspo />
      <Creators />
      <ContactUs />
    </>
  );
};

export default Home;
