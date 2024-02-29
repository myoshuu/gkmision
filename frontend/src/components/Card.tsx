import React from "react";

interface CardProps {
  title: string;
  desc?: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ title, desc, date }) => {
  return (
    <div className="border min-w-[25%] p-7 rounded-xl">
      <h3 className="text-2xl font-medium mb-3 uppercase">{title}</h3>
      <p className="text-lg text-slate-500">{desc}</p>
      <p className="mt-3 text-lg italic">{date}</p>
    </div>
  );
};

export default Card;
