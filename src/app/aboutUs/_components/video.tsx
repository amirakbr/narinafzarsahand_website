import { useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle, PlayCircle } from "lucide-react";

export default function VideoWithOverlay() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className="relative w-[350px]">
      {!showVideo && (
        <Image
          src="/assets/aboutUs/friendly.png"
          width={350}
          height={200}
          className="rounded-md"
          alt="Friendly"
        />
      )}

      {!showVideo && (
        <div className="absolute -right-11 bottom-0 -translate-y-1/2 cursor-pointer z-10 bg-[#4249d8] p-3 rounded-lg">
          <PlayCircle onClick={handlePlay} color="white" size={50} />
        </div>
      )}

      {showVideo && (
        <div className="translate-y-12">
          <video
            ref={videoRef}
            controls
            className="rounded-md w-[350px]"
            preload="none"
          >
            <source src="/assets/aboutUs/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
