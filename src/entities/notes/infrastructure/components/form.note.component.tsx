import React, { useRef } from "react";
import { TbNotes } from "react-icons/tb";
import { useSelector } from "react-redux";
import { INoteDTO } from "../../../../types";
import { RootState } from "../../../../store";
import {
  InputText,
  InputSelect,
  InputDate,
  InputTextarea,
} from "../../../shared/input";
import useCleanForm from "../../../../hooks/useCleanForm";
import useNotification from "../../../../hooks/useNotification";
import { BannerNotification } from "../../../notification/infrastructure/components";

import { Box } from "../../../shared/box";

const FormNote: React.FC<{
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  defaultValues?: INoteDTO;
}> = ({ onSubmit, defaultValues }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { isVisible, message, type } = useNotification();
  const { notesLoading, notesFormSubmitted } = useSelector(
    (state: RootState) => state.note
  );
  useCleanForm(formRef, notesFormSubmitted, "fulfilled");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (notesLoading === "loading") return;
    onSubmit(event);
  };

  return (
    <>
      {isVisible && <BannerNotification message={message} type={type} />}
      <form
        aria-label="form"
        ref={formRef}
        onSubmit={handleSubmit}
        id="formNote"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div className="grid gap-4">
          <InputText
            name="title"
            placeholder="Title"
            defaultValue={defaultValues?.title}
          />
          <div className="rounded-md w-full bg-white">
            <div className="bg-slate-200 rounded-t-lg">
              <div className="flex h-14 gap-2 justify-center items-center w-[160px] rounded-t-lg bg-white font-medium text-blue-800 text-sm">
                <TbNotes className="text-lg font-thin" />
                Content
              </div>
            </div>
            <div className="py-3 px-4">
              <InputTextarea
                defaultValue={defaultValues?.body}
                name="body"
                placeholder="Text Content"
              />
            </div>
          </div>
        </div>
        <div>
          <Box>
            <label
              htmlFor="topic"
              className="mb-2 inline-block font-Roboto text-sm text-slate-800/90 font-medium"
            >
              Topic
            </label>
            <InputSelect defaultValue={defaultValues?.topic} name="topic">
              <option value="feature"> feature</option>
              <option value="onDemand"> onDemand </option>
            </InputSelect>
            <label
              htmlFor="date"
              className="mb-2 mt-5 inline-block font-Roboto text-sm text-slate-800/90 font-medium"
            >
              Note Date
            </label>
            <InputDate defaultValue={defaultValues?.date} name="date" />
          </Box>
        </div>
      </form>
    </>
  );
};

export default FormNote;
