import { useState } from "react";
import ReactPlayer from "react-player";

// interface Props {
//   videos: string[];
//   root: string;
// }

function VideoViewer() {
  const [videoUrl, setVideoUrl] = useState("");

  const root = "https://d2amnd3jkfva2l.cloudfront.net/";

  const videos = [
    "Jake%20&%20Brittany%20feature.mp4",
    "pt1.mp4",
    "pt2.mp4",
    "pt3.mp4",
    "pt4.mp4",
  ];

  const handleVideoSelect = (videoKey: string) => {
    setVideoUrl(root + videoKey);
  };

  return (
    <div>
      {videos.map((video) => (
        <ul>
          <button key={video} onClick={() => handleVideoSelect(video)}>
            {video}
          </button>
        </ul>
      ))}
      {videoUrl && (
        <ReactPlayer
          height={"500px"}
          width={"500px"}
          url={videoUrl}
          controls={false}
          playing={true}
          loop={true}
          muted
        />
      )}
    </div>
  );
}

export default VideoViewer;
