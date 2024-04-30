import React from "react";

type WidthType = string | number;

export default function Title({
  text,
  className,
  width
}: {
  text: string;
  className?: string;
  width: WidthType;
}) {

  const widthClass = width;
  return (
    <div className={`${className ?? ""} relative`}>
      <h1 className="text-3xl font-bold group-hover:text-green-500 transition-all">
        {text}
      </h1>
      <div className="space-y-0.5 absolute -bottom-3 left-0">
        <div
          className={`${widthClass} h-1.5 bg-green-500 rounded-full -translate-x-2`}
        ></div>
        <div
          className={`${widthClass} h-1.5 bg-indigo-500 rounded-full translate-x-2`}
        ></div>
      </div>
    </div>
  );
}
