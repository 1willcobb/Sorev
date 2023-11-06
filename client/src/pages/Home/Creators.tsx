import React from "react";
import { Box, Container } from "@mui/material";
import sean_teaching from "../../images/sean_teaching.jpg";
import beats from "../../images/beats.webp";
import will from "../../images/will.jpg";

const images = [sean_teaching, beats, will];

const Creators = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          sx={{ width: "calc(33.33% - 10px)", borderRadius: "15px" }}
        />
      ))}
    </Container>
  );
};

export default Creators;
