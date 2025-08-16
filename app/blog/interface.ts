export interface IBlogCardProps {
  size: "small" | "large";
  title: string;
  publishDate: string;
  rate: number;
  summary: string;
  imageUrl: string;
}

export interface IRatingPrpos {
  rate: number;
  size:number
}
