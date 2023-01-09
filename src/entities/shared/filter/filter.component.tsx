import React from "react";
import { Box } from "../box";
import { InputSelect } from "../input";

const Filter: React.FC = () => {
  return (
    <div>
      <Box>
        <div className="grid gap-2">
          <div>
            <label
              htmlFor="filter"
              className="mb-2 inline-block font-Roboto text-sm text-slate-800/90 font-medium"
            >
              Filter by
            </label>
            <InputSelect name="filter">
              <option value="topic">Topic</option>
              <option value="Title">Title</option>
              <option value="Date">Date</option>
            </InputSelect>
          </div>
          <button className="text-slate-500 font-medium text-sm py-1 px-2 border border-slate-200/60 rounded-md">
            Filter
          </button>
        </div>
      </Box>
    </div>
  );
};

export default Filter;
