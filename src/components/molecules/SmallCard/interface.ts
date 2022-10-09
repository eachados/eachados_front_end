import React from "react";

export interface ISmallCardProps {
  title: string;
  subtitle?: string;
  image: React.ImgHTMLAttributes<HTMLImageElement>["src"];
}
