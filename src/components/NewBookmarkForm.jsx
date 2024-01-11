import { useRef } from "react";
import { formatEntry } from "../utils/formatEntry";
import useConnectToDb from "../custom Hooks/useConnectToDb";
import { addToStore } from "../utils/addToStore";
import useHandleFormChange from "../custom Hooks/useHandleFormChange";
import { fadeOutModal } from "../utils/fadeModalOut";

const NewBookmarkForm = ({
  setIsNewBookmarkModalOpen,
  dialogRef,
  setEntries,
}) => {
  const nameRef = useRef();
  const { bookmark, handleChange } = useHandleFormChange();
  const { db } = useConnectToDb();

  const handleSaveBookmark = () => {
    // const { name, address } = bookmark;
    // const formattedEntry = formatEntry(name, address, "bookmark");
    // if (formattedEntry) {
    //   setEntries((prev) => [...prev, formattedEntry]);
    //   addToStore(db, formattedEntry);
    // }
    // setIsNewBookmarkModalOpen(false);
    fadeOutModal(dialogRef.current, setIsNewBookmarkModalOpen);
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-wrap smallest:items-start items-center gap-3">
        <label className="flex-grow-0 text-lg" htmlFor="name">
          <span className="block w-full text-white font-semibold">Name :</span>
        </label>
        <input
          ref={nameRef}
          className="flex-grow outline-2  smallest:w-full border-2 outline-white p-2 rounded-xl"
          type="text"
          id="name"
          name="name"
          value={bookmark.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-wrap smallest:items-start items-center gap-3 mt-4">
        <label className="flex-grow-0 text-lg" htmlFor="address">
          <span className="block w-full text-white font-semibold">
            Address :
          </span>
        </label>
        <input
          className="flex-grow outline-2  smallest:w-full border-2 outline-white p-2 rounded-xl"
          type="text"
          id="address"
          name="address"
          value={bookmark.address}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={handleSaveBookmark}
        className="bg-blue-400 rounded-xl px-4 py-2 mt-4 text-lg ml-auto text-white tracking-widest font-semibold"
      >
        Done
      </button>
    </form>
  );
};

export default NewBookmarkForm;
