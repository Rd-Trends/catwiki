import React from "react";

interface props {
  name: string;
  rating: number;
}

const CharacterRating = ({ name, rating }: props) => {
  return (
    <div className=" flex items-center justify-between">
      <p className="mr-8 text-xs min-[320px]:text-base font-bold md:text-lg">
        {name}:
      </p>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index: number) => (
          <span
            key={index + name}
            className={` w-3 h-1 min-[320px]:w-7 min-[320px]:h-1 md:w-14 md:h-2 rounded-lg mx-1 ${
              index + 1 <= rating ? "bg-[#544439]" : "bg-[#E0E0E0]"
            } `}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CharacterRating;
