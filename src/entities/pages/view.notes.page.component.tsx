import React from "react";

import { ItemNote } from "../../entities/notes/infrastructure/components";
import { Filter } from "../../entities/shared/filter";

const ViewNotesPage = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
        <h1 className="font-medium text-lg text-slate-800/90">View Notes</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-viewLayout gap-4">
        <Filter />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ItemNote />
          <ItemNote />
          <ItemNote />
          <ItemNote />
          <ItemNote />
          <ItemNote />
        </div>
      </div>
    </div>
  );
};

export default ViewNotesPage;
