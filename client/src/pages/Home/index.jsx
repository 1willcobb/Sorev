import ContactUs from "./ContactUs";
import Inspo from "./Inspo";
import WhatWeDo from "./WhatWeDo";
import Creators from "./Creators";
import HeadCarousel from "./HeadCarousel";
import styled from "@emotion/styled"

const CenterdContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 100px;
`

const Home = () => {
  return (
    <CenterdContent >
      <HeadCarousel />
      <Inspo />
      <WhatWeDo />
      <Creators />
      <ContactUs />
    </CenterdContent>
  );
};

export default Home;
