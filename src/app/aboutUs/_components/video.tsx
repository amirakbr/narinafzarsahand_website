export function Video() {
  return (
    <div className="flex justify-end h-100 ">
        
      <video controls preload="none">
        <source src="/path/to/video.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="fa"
          label="farsi"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
