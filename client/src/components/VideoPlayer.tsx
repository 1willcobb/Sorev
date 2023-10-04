// import { useEffect, useState } from "react";
// import axios from "axios";
import ReactPlayer from "react-player";


const style = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
}

function VideoPlayer() {

  return (
    <div style={style}>
      <ReactPlayer height={"1000px"} width={"1000px"} url="https://d2amnd3jkfva2l.cloudfront.net/Jake%20&%20Brittany%20feature.mp4" controls={false} playing={true} loop={true} muted/>    
    </div>
  );
}

export default VideoPlayer;
