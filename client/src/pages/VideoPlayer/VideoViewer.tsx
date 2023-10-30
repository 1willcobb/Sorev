import ReactPlayer from "react-player";

interface Props {
  videoUrl: string;
}

function VideoViewer({ videoUrl }: Props) {
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
