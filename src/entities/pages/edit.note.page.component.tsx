import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FormNote } from "../../entities/notes/infrastructure/components";
import { AppDispatch, RootState } from "../../store";
import { getNote, updateNote } from "../notes/application/thunk/action";

const EditNotePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const { notesLoading, note } = useSelector((state: RootState) => state.note);

  React.useEffect(() => {
    dispatch(getNote(id as string));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Data = new FormData(event.currentTarget);
    const title = Data.get("title") as string;
    const body = Data.get("body") as string;
    const topic = Data.get("topic") as string;
    const date = Data.get("date") as string;
    dispatch(
      updateNote({
        id: id as string,
        data: { title, body, topic, date: new Date(date) },
      })
    );
  };

  if (notesLoading === "fetching") return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
        <h1 className="font-medium text-lg text-slate-800/90">Edit Note</h1>
        <button
          type="submit"
          form="formNote"
          className="bg-blue-800 py-2 px-3 rounded-md text-white font-medium text-sm"
        >
          {notesLoading === "loading" ? "Editing..." : "Save Note"}
        </button>
      </div>
      <div className="mt-10">
        {note?.length > 0 && (
          <FormNote onSubmit={handleSubmit} defaultValues={note[0]} />
        )}
      </div>
    </div>
  );
};

export default EditNotePage;
