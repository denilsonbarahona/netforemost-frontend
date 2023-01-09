import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormNote } from "../../entities/notes/infrastructure/components";
import { AppDispatch, RootState } from "../../store";
import { setNotes } from "../notes/application/thunk/action";

const AddNotePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notesLoading } = useSelector((state: RootState) => state.note);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Data = new FormData(event.currentTarget);
    const title = Data.get("title") as string;
    const body = Data.get("body") as string;
    const topic = Data.get("topic") as string;
    const date = Data.get("date") as string;
    dispatch(setNotes({ title, body, topic, date: new Date(date) }));
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
        <h1 className="font-medium text-lg text-slate-800/90">Add New Note</h1>
        <button
          type="submit"
          form="formNote"
          className="bg-blue-800 py-2 px-3 rounded-md text-white font-medium text-sm"
        >
          {notesLoading === "loading" ? "Saving..." : "Save Note"}
        </button>
      </div>
      <div className="mt-10">
        <FormNote onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddNotePage;
