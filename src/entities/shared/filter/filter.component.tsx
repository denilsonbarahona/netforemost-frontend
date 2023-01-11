import React from "react";
import { Box } from "../box";
import { InputSelect } from "../input";

const Filter: React.FC<{
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}> = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
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
              <option value="title">Title</option>
              <option value="date">Date</option>
            </InputSelect>
          </div>
          <button
            type="submit"
            className="text-slate-500 font-medium text-sm py-1 px-2 border border-slate-200/60 rounded-md"
          >
            Filter
          </button>
        </div>
      </Box>
    </form>
  );
};

export default Filter;
