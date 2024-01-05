import React, { useState } from "react";
import NewBookmarkForm from "./NewBookmarkForm";

const AddNewBookmark = ({
  isNewBookmarkModalOpen,
  NewBookmarkForm,
  setIsNewBookmarkModalOpen,
}) => {
  const display = isNewBookmarkModalOpen ? "flex animate-fadeIn" : "hidden";

  return (
    <div
      className={`${display} p-4 w-[90%] bg-[#7FC7D9] max-w-[500px] absolute top-0 left-1/2 overflow-x-auto -translate-x-1/2  flex-col gap-4 rounded-xl shadow-slate-500 mx-auto border-2`}
    >
      <div className="flex justify-between text-white font-semibold items-center smallest:flex-col-reverse smallest:items-start">
        <h2>Create New Bookmark</h2>
        <span
          onClick={() => {
            setIsNewBookmarkModalOpen(false);
          }}
          className="smallest:ml-auto"
        >
          X
        </span>
      </div>
      {NewBookmarkForm}
    </div>
  );
};
export default AddNewBookmark;
