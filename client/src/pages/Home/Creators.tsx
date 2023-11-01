import React from "react";
import { Box } from "@mui/material";
import sean_teaching from "../../images/sean_teaching.jpg";
import beats from "../../images/beats.webp";
import will from "../../images/will.jpg";

const images = [sean_teaching, beats, will];

const Creators = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          sx={{ width: "calc(33.33% - 10px)", borderRadius: "15px" }}
        />
      ))}
    </div>
  );
};

export default Creators;
