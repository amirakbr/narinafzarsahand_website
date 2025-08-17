import { PlayCircle } from "lucide-react";
import { IVideoWithOverlayProps } from "./interface";

export default function VideoWithOverlay({
  cover,
  videoUrl,
  playButtonPosition,
  playButtonStyle,
}: IVideoWithOverlayProps) {
  return (
    <div className="relative">
      <img
        src={cover?.url}
        className="rounded-md w-full h-100"
        alt={cover?.alt}
      />

      <div
        className={`${playButtonPosition} cursor-pointer z-10 ${playButtonStyle}`}
      >
        <PlayCircle color="white" size={50} />
      </div>
    </div>
  );
}
