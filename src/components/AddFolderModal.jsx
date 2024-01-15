import { useRef, useState } from "react";
import useConnectToDb from "../custom Hooks/useConnectToDb";
import { addToStore } from "../utils/addToStore";
import { formatEntry } from "../utils/formatEntry";
import { useParams } from "react-router-dom";
import { fadeOutModal } from "../utils/fadeModalOut";
import useModalContext from "../custom Hooks/useModalContext";
import useGetEntries from "../custom Hooks/useGetEntries";

const AddFolderModal = () => {
  const { setEntries } = useGetEntries();

  const [folderName, setFolderName] = useState({ value: "" });

  const { isNewFolder, dispatch, isRenameFolder } = useModalContext();
  const { db } = useConnectToDb();

  const inputRef = useRef();

  const { parentName } = useParams();

  const modalRef = useRef();

  const display = isNewFolder || isRenameFolder ? "flex fade-in" : "hidden";

  const handleSaveFolder = () => {
    const entry = formatEntry({ name: folderName.value, parent: parentName });
    if (entry) {
      addToStore(db, entry);
      setEntries((prev) => [...prev, entry]);
    }

    closeModal();
  };

  const closeModal = () => {
    if (isNewFolder) {
      const eventObj = {
        type: "new folder",
        name: "isNewFolder",
      };
      fadeOutModal(modalRef.current, dispatch, eventObj);
    } else {
      const eventObj = {
        type: "rename folder",
        name: "isRenameFolder",
      };
      fadeOutModal(modalRef.current, dispatch, eventObj);
    }
  };
  if (inputRef.current) {
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  }

  return (
    <dialog
      ref={modalRef}
      className={`bg-black folder bg-opacity-50 opacity-0 ${display} justify-center items-center  fixed top-0 left-0 w-screen h-screen`}
    >
      <form
        method="dialog"
        className="max-w-[300px] scale-0 w-[90%] p-4 rounded-2xl  bg-white"
      >
        <div className="flex justify-between text-black font-semibold items-center smallest:flex-col-reverse smallest:items-start">
          <h2>{isRenameFolder ? "Rename " : "Create New "} Folder</h2>
          <span
            onClick={() => closeModal()}
            className="smallest:ml-auto cursor-pointer "
          >
            X
          </span>
        </div>
        <div className="flex gap-2 mt-3 flex-wrap items-center">
          <label className="flex-grow-0 text-lg" htmlFor="folderName">
            <span className="block w-full font-semibold">Name :</span>
          </label>
          <input
            className="flex-grow  p-2 focus:outline-[#7FC7D9] outline-2 smallest:w-full border-[#0F1035] border rounded-lg "
            type="text"
            id="folderName"
            name="value"
            value={folderName.value}
            ref={inputRef}
            onChange={(e) => setFolderName({ [e.target.name]: e.target.value })}
          />
        </div>
        <button
          onClick={handleSaveFolder}
          className="outline-[#7FC7D9] mt-3 float-right bg-[#0F1035] scale-90 hover:scale-100 transition outline outline-offset-1 rounded-lg px-4 py-1 text-lg ml-auto text-[#7FC7D9] tracking-widest font-semibold"
        >
          Done
        </button>
      </form>
    </dialog>
  );
};

export default AddFolderModal;
