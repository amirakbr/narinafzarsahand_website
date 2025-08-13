"use client";

import { useState, useRef } from "react";
import { PlayCircle } from "lucide-react";
import { IVideoWithOverlayProps } from "./interface";

export default function VideoWithOverlay({
  cover,
  videoUrl,
  playButtonPosition,
  playButtonStyle,
}: IVideoWithOverlayProps) {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className="relative">
      {!showVideo && (
        <img
          src={cover?.url}
          className="rounded-md w-full h-100"
          alt={cover?.alt}
        />
      )}

      {!showVideo && (
        <div
          className={`${playButtonPosition} cursor-pointer z-10 ${playButtonStyle}`}
          onClick={handlePlay}
        >
          <PlayCircle color="white" size={50} />
        </div>
      )}

      {showVideo && (
        <video
          ref={videoRef}
          controls
          className="rounded-md w-full translate-y-10"
          preload="none"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
