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
    <Card className="cursor-pointer p-0 shadow-lg rounded-lg">
      <CardBody
        className={`flex gap-2 ${
          size === "large" ? "flex-col justify-between h-full" : "flex-row"
        } p-0`}
      >
        <div
          className={`shrink-0 ${
            size === "large"
              ? "w-full h-60"
              : "w-[134px] md:h-full md:min-w-60 md:max-w-60"
          } relative rounded-lg`}
        >
          <Image
            alt={title}
            src={imageUrl}
            fill
            className="object-cover object-center rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <div className="flex items-center gap-4 justify-between text-primary border-b-2 border-b-primary pb-2">
            <div className="flex items-center gap-2 ">
              <Calendar size={size === "large" ? 20 : 15} />
              <p
                className={`font-bold ${
                  size === "large" ? "text-xl" : "text-[9px] md:text-xs"
                }`}
              >
                {publishDate}
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <Rating rate={rate} size={size === "large" ? 20 : 13} />
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <p
              className={`text-justify ${
                size === "large" ? "p-font-size" : "text-sm lg:text-xl"
              } font-bold`}
            >
              {title}
            </p>
            <p
              className={`text-justify ${
                size === "large"
                  ? "line-clamp-4 text-sm xl:text-2xl"
                  : "line-clamp-2 text-xs lg:text-lg"
              }`}
            >
              {summary}
            </p>
            <CardFooter className="flex items-center justify-end text-primary group p-0 gap-2 md:mt-6">
              <p
                className={`text-justify  ${
                  size === "large" ? "text-lg" : "text-[9px] md:text-xs"
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
