import { useRef } from "react";
import Cancel from "../images/cancel.png";
import useStoreContext from "../custom Hooks/useStoreContext";
import useHandleBookmarkFormChange from "../custom Hooks/useHandleBookmarkFormChange";

const AddNewBookmark = () => {

  const dialogRef = useRef();

  const { handleChange, bookmark, closeModal, handleSaveBookmark } = useHandleBookmarkFormChange()

  const
    {
      isNewBookmark, isRenameBookmark, isNameMissing, isAddressInvalid
    } = useStoreContext();

  const display = isNewBookmark || isRenameBookmark ? "flex fade-in" : "hidden";

  const nameRef = useRef();


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
            onClick={() => closeModal(dialogRef)}
            className="smallest:ml-auto cursor-pointer "
          >
            <img src={Cancel} alt="" />
          </span>
        </div>
        <div className="flex gap-2 mt-3 flex-col">
          <label className="flex-grow-0 text-lg" htmlFor="folderName">
            <span className="block w-full font-semibold">Name :</span>
          </label>
          {isNameMissing && <span className="text-red-400">Name is required</span>}
          <input
            ref={nameRef}
            className={`flex-grow  p-2 focus:outline-[#7FC7D9] outline-2 smallest:w-full ${isNameMissing ? 'border-red-400' : 'border-[#0F1035] '} border rounded-lg `}
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
          {isAddressInvalid && <span className="text-red-400">Invalid address</span>}
          <input
            className={`flex-grow  p-2 focus:outline-[#7FC7D9] outline-2 smallest:w-full ${isAddressInvalid ? 'border-red-400' : 'border-[#0F1035] '} border rounded-lg `}
            type="text"
            id="address"
            name="address"
            value={bookmark.address}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => handleSaveBookmark(dialogRef)}
          className="outline-[#7FC7D9] mt-3 float-right bg-[#0F1035] scale-90 hover:scale-100 transition outline outline-offset-1 rounded-lg px-4 py-1 text-lg ml-auto text-[#7FC7D9] tracking-widest font-semibold"
        >
          Done
        </button>
      </form>
    </dialog>
  );
};
export default AddNewBookmark;
