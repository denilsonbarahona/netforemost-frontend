import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ItemNote } from "../../entities/notes/infrastructure/components";
import { Filter } from "../../entities/shared/filter";
import { AppDispatch, RootState } from "../../store";
import { getNotes, sortingNotes } from "../notes/application/thunk/action";
import useNotification from "../../hooks/useNotification";
import { BannerNotification } from "../notification/infrastructure/components";

const ViewNotesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isVisible, message, type } = useNotification();
  const { notesLoading, notes } = useSelector((state: RootState) => state.note);

  React.useEffect(() => {
    dispatch(getNotes());
  }, []);

  if (notesLoading === "fetching") {
    return <div>Loading...</div>;
  }

  const handleFilter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const filter = formData.get("filter") as string;
    dispatch(sortingNotes(filter));
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
        <h1 className="font-medium text-lg text-slate-800/90">View Notes</h1>
      </div>
      {isVisible && <BannerNotification message={message} type={type} />}
      <div className="grid grid-cols-1 lg:grid-cols-viewLayout gap-4 mt-10">
        <Filter onSubmit={handleFilter} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {notes?.map((note) => (
            <ItemNote key={note.id} {...note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewNotesPage;
