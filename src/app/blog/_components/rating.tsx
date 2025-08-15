import { Star, StarHalf, StarOff, LucideStar } from "lucide-react";
import { IRatingPrpos } from "../interface";

export default function Rating({ rate, size }: IRatingPrpos) {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="relative">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }, () => (
          <Star
            strokeWidth={2}
            size={size}
            key={`empty star base ${Math.random()}`}
            className="scale-x-[-1]"
          />
        ))}
      </div>
      <div className="flex items-center gap-1 absolute left-0 top-0">
        {Array(fullStars)
          .fill(5)
          .map((_, i) => (
            <Star fill="" size={size} key={`full star ${i}`} />
          ))}

        {hasHalfStar && (
          <StarHalf fill="" size={size} className="scale-x-[-1]" />
        )}

        {Array(emptyStars)
          .fill(5)
          .map((_, i) => (
            <Star
              className="scale-x-[-1]"
              size={size}
              key={`empty star ${i}`}
            />
          ))}
      </div>
    </div>
  );
}
