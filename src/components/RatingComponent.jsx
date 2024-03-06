"use client";

import { Rating } from "flowbite-react";

function RatingComponent() {
  return (
    <div className="w-full bg-white p-2 mt-4 flex flex-cols">
      <div className="w-[20%]  grid grid-cols-1 items-center">
        <Rating className="text-xl w-full grid grid-cols-1 ">
          <p className="ml-2 font-medium text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
          <div className="w-full flex flex-cols">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
          </div>
        </Rating>
        <p className="mb-4 font-medium text-gray-500 dark:text-gray-400">
          {" "}
          1,745 global ratings
        </p>
      </div>
      <div className="w-screen pl-20 grid grid-cols-1">
        <Rating.Advanced percentFilled={70} className="mb-2 w-full">
          5 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={17} className="mb-2">
          4 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={8} className="mb-2">
          3 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={4} className="mb-2">
          2 star
        </Rating.Advanced>
        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
      </div>
    </div>
  );
}
export default RatingComponent;
