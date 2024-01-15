import { useRef } from "react";
import { fadeOutModal } from "../utils/fadeModalOut";
import useHandleFormChange from "../custom Hooks/useHandleFormChange";
import { addToStore } from "../utils/addToStore";
import { formatEntry } from "../utils/formatEntry";
import { useParams } from "react-router-dom";
import Cancel from "../images/cancel.png";
import useConnectToDb from "../custom Hooks/useConnectToDb";
import useModalContext from "../custom Hooks/useModalContext";
import useGetEntries from "../custom Hooks/useGetEntries";

const AddNewBookmark = () => {
  const { setEntries } = useGetEntries();
  const { isNewBookmark, isRenameBookmark, dispatch } = useModalContext();
  const display = isNewBookmark || isRenameBookmark ? "flex fade-in" : "hidden";
  const { db } = useConnectToDb();
  const { parentName } = useParams();
  const nameRef = useRef();
  const { bookmark, handleChange } = useHandleFormChange();
  const dialogRef = useRef();

  const closeModal = () => {
    if (isNewBookmark) {
      const eventObj = {
        type: "new bookmark",
        name: "isNewBookmark",
      };
      fadeOutModal(dialogRef.current, dispatch, eventObj);
    } else {
      const eventObj = {
        type: "rename bookmark",
        name: "isRenameBookmark",
      };
      fadeOutModal(dialogRef.current, dispatch, eventObj);
    }
  };
  const handleSaveBookmark = () => {
    const entry = formatEntry({
      name: bookmark.name,
      parent: parentName,
      address: bookmark.address,
      type: "bookmark",
    });
    if (entry) {
      addToStore(db, entry);
      setEntries((prev) => [...prev, entry]);
    }
    closeModal();
  };
  return (
    <dialog
      ref={dialogRef}
      className={`absolute opacity-0 ${display} w-screen h-screen flex bg-black bg-opacity-50 items-center justify-center inset-0`}
    >
      <form
        method="dialog"
        className="max-w-[400px] scale-0 w-[90%] p-4 rounded-2xl  bg-white"
      >
        <div className="flex justify-between text-black font-semibold items-center smallest:flex-col-reverse smallest:items-start">
          <h2>Create New Bookmark</h2>
          <span
            onClick={closeModal}
            className="smallest:ml-auto cursor-pointer "
          >
            <img src={Cancel} alt="" />
          </span>
        </div>
        <div className="flex gap-2 mt-3 flex-col">
          <label className="flex-grow-0 text-lg" htmlFor="folderName">
            <span className="block w-full font-semibold">Name :</span>
          </label>
          <input
            ref={nameRef}
            className="flex-grow  p-2 focus:outline-[#7FC7D9] outline-2 smallest:w-full border-[#0F1035] border rounded-lg "
            type="text"
            id="name"
            name="name"
            value={bookmark.name}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 mt-3 flex-col mb-2">
          <label className="flex-grow-0 text-lg" htmlFor="folderName">
            <span className="block w-full font-semibold">Address :</span>
          </label>
          <input
            className="flex-grow  p-2 focus:outline-[#7FC7D9] outline-2 smallest:w-full border-[#0F1035] border rounded-lg "
            type="text"
            id="address"
            name="address"
            value={bookmark.address}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleSaveBookmark}
          className="outline-[#7FC7D9] mt-3 float-right bg-[#0F1035] scale-90 hover:scale-100 transition outline outline-offset-1 rounded-lg px-4 py-1 text-lg ml-auto text-[#7FC7D9] tracking-widest font-semibold"
        >
          Done
        </button>
      </form>
    </dialog>
  );
};
export default AddNewBookmark;
