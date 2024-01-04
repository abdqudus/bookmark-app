import { useRef } from "react";

const AddFolderModal = ({
  isNewFolderOpen,
  folderName,
  setFolderName,
  setIsNewFolderOpen,
  store,
}) => {
  const inputRef = useRef(null);
  if (inputRef.current) {
    inputRef.current.focus();
  }
  const handleSaveBookmark = () => {
    if (folderName.value) {
      store.add({ id: Date.now(), name: folderName.value, isTopMost: true });
    }
    setIsNewFolderOpen(false);
  };
  const display = isNewFolderOpen ? "flex animate-fadeIn" : "hidden";
  return (
    <div
      className={`${display} p-4 w-[90%] bg-[#7FC7D9] max-w-[500px] absolute top-1/4 left-1/2 overflow-x-auto -translate-x-1/2  flex-col gap-4 rounded-xl shadow-slate-500 mx-auto border-2`}
    >
      <div className="flex justify-between text-white font-semibold items-center smallest:flex-col-reverse smallest:items-start">
        <h2>Create New Folder</h2>
        <span className="smallest:ml-auto">X</span>
      </div>
      <form className="flex flex-wrap smallest:items-start items-center gap-3">
        <label className="flex-grow-0 text-lg" htmlFor="folderName">
          <span className="block w-full text-white font-semibold">Name :</span>
        </label>
        <input
          ref={inputRef}
          className="flex-grow outline-2  smallest:w-full border-2 outline-white p-2 rounded-xl"
          type="text"
          id="folderName"
          name="value"
          value={folderName.value}
          onChange={(e) => setFolderName({ [e.target.name]: e.target.value })}
        />
      </form>
      <button
        onClick={handleSaveBookmark}
        className="bg-blue-400 rounded-xl px-4 py-2 text-lg ml-auto text-white tracking-widest font-semibold"
      >
        Done
      </button>
    </div>
  );
};

export default AddFolderModal;
