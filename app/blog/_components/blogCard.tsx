import { Card, CardBody, CardFooter } from "@heroui/card";
import { IBlogCardProps } from "../interface";
import { ArrowLeft, Calendar } from "lucide-react";
import Rating from "./rating";
import Image from "next/image";

const BlogCard = ({
  imageUrl,
  publishDate,
  rate,
  size,
  summary,
  title,
}: IBlogCardProps) => {
  return (
    <Card className="cursor-pointer p-0">
      <CardBody
        className={`flex gap-2 ${
          size === "large" ? "flex-col" : "flex-row"
        } p-0`}
      >
        <div
          className={`shrink-0 ${
            size === "large" ? "w-full h-60" : "min-w-60 max-w-60"
          } relative`}
        >
          <Image
            alt={title}
            src={imageUrl}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-4 p-2">
          <div className="flex items-center gap-4 justify-between text-primary border-b-2 border-b-primary pb-2">
            <div className="flex items-center gap-2 ">
              <Calendar size={size === "large" ? 20 : 15} />
              <p className={`${size === "large" ? "text-xl" : "text-sm"}`}>
                {publishDate}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Rating rate={rate} size={size === "large" ? 20 : 15} />
            </div>
          </div>
          <div className="flex flex-col gap-2 text-right">
            <p
              className={`${
                size === "large" ? "text-xl" : "text-lg"
              } font-bold`}
            >
              {title}
            </p>
            <p
              className={`${
                size === "large"
                  ? "line-clamp-4 text-lg"
                  : "line-clamp-2 text-sm"
              }`}
            >
              {summary}
            </p>
            <CardFooter className="flex items-center justify-end text-primary group p-0 gap-2">
              <p
                className={`${
                  size === "large" ? "text-lg" : "text-sm"
                } right-0 transition-all group-hover:right-4`}
              >
                مطالعه ادامه مطلب
              </p>
              <ArrowLeft size={size === "large" ? 20 : 15} />
            </CardFooter>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
