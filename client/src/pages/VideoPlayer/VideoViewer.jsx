import ReactPlayer from "react-player";

function VideoViewer({ videoUrl }) {
  const root = "https://d2amnd3jkfva2l.cloudfront.net/";

  return (
    <div>
      {videoUrl && (
        <ReactPlayer
          height={"auto"}
          width={"100%"}
          url={root + videoUrl}
          controls={true}
          playing={true}
          loop={true}
          muted
        />
      )}
    </div>
  );
}

export default VideoViewer;
