import React from "react";
import { Badge } from "./badge";
import { TagStyle, getTagStyle } from "@/constants/tags";

interface TagBadgeProps {
  tag: string;
  className?: string;
}

interface TagBadgeWithStyleProps extends TagStyle {
  tagName: string;
  className?: string;
}

// Tag badge component that accepts a tag name and looks up the style
export const TagBadge = ({ tag, className = "" }: TagBadgeProps) => {
  const tagName = tag.trim();
  const { icon: Icon, color, bgColor } = getTagStyle(tagName);

  return (
    <Badge
      variant="outline"
      className={`text-xs gap-1.5 transition-colors hover:scale-105 ${bgColor} hover:bg-opacity-20 border-opacity-40 ${className}`}
    >
      <Icon className={`h-3.5 w-3.5 ${color}`} />
      <span className={color}>{tagName}</span>
    </Badge>
  );
};

// Tag badge component that accepts pre-defined style props
export const TagBadgeWithStyle = ({
  tagName,
  icon: Icon,
  color,
  bgColor,
  className = "",
}: TagBadgeWithStyleProps) => {
  return (
    <Badge
      variant="outline"
      className={`text-xs gap-1.5 transition-colors hover:scale-105 ${bgColor} hover:bg-opacity-20 border-opacity-40 ${className}`}
    >
      <Icon className={`h-3.5 w-3.5 ${color}`} />
      <span className={color}>{tagName}</span>
    </Badge>
  );
};
