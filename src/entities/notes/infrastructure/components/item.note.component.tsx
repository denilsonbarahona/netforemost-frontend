import React from "react";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { Box } from "../../../shared/box";

const ItemNote: React.FC = () => {
  return (
    <Box>
      <div className="relative rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10">
        <p className="absolute top-0 bg-orange-500/80 text-white text-xs m-5 px-2 py-1 rounded z-10">
          Topic
        </p>
        <figure>
          <img
            className="object-cover h-40 2xl:h-52 w-full"
            src="https://imgur.com/kgHDtiz.png"
            alt="View Notes"
          />
          <caption className="absolute bottom-0 left-0 w-full p-4 z-20">
            <p className="text-white font-medium text-base text-left m-0">
              View Notes
            </p>
          </caption>
        </figure>
      </div>
      <div className="w-full h-px bg-gray-500/[0.08] my-5" />
      <div className="flex justify-between items-center gap-1">
        <button className="flex text-blue-800 text-sm gap-1">
          <AiOutlineEye className="text-lg" />
          <span>Preview</span>
        </button>
        <div className="flex gap-1">
          <button className="flex text-red-500 text-sm gap-1">
            <AiOutlineDelete className="text-lg" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ItemNote;
