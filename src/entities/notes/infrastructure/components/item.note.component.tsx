import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { Box } from "../../../shared/box";
import { INoteDTO } from "../../../../types";
import { AppDispatch, RootState } from "../../../../store";
import { deleteNote } from "../../application/thunk/action";
import { getHyphenDate } from "../../../../utils/dates";

const ItemNote: React.FC<INoteDTO> = ({ topic, title, date, id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isCurrentDeleting = useRef(false);
  const { notesLoading } = useSelector((state: RootState) => state.note);

  const handleDeleteNote = () => {
    if (notesLoading === "deleting") return;
    dispatch(deleteNote(id as string));
    isCurrentDeleting.current = true;
  };

  React.useEffect(() => {
    if (notesLoading !== "deleting") isCurrentDeleting.current = false;
    return () => {
      isCurrentDeleting.current = false;
    };
  }, [notesLoading]);

  return (
    <Box>
      <div className="relative rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-gradient-to-t before:from-black before:to-black/10">
        <p className="absolute top-0 bg-orange-500/80 text-white text-xs m-5 px-2 py-1 rounded">
          {topic}
        </p>
        <figure>
          <img
            className="object-cover h-40 2xl:h-52 w-full"
            src="https://imgur.com/kgHDtiz.png"
            alt={title}
          />
          <figcaption className="absolute bottom-0 left-0 w-full p-4">
            <p className="text-white font-medium text-base text-left m-0">
              {title}
            </p>
            <p className="text-white/90 text-xs mt-3">
              {getHyphenDate(new Date(date))}
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="w-full h-px bg-gray-500/[0.08] my-5" />
      <div className="flex justify-between items-center gap-1">
        <Link
          to={`/edit/${id as string}`}
          className="flex text-blue-800 text-sm gap-1"
        >
          <AiOutlineEye className="text-lg" />
          <span>Preview</span>
        </Link>
        <div className="flex gap-1">
          <button
            onClick={handleDeleteNote}
            className="flex text-red-500 text-sm gap-1 items-center"
          >
            {notesLoading === "deleting" && isCurrentDeleting.current ? (
              <>
                <div className="animate-spin h-4 rounded-full aspect-square border-b-2 border-red-500" />
                <span>Deleting</span>
              </>
            ) : (
              <>
                <AiOutlineDelete className="text-lg" />
                <span>Delete</span>
              </>
            )}
          </button>
        </div>
      </div>
    </Box>
  );
};

export default ItemNote;
