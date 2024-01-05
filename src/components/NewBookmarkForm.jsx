import { useState } from "react";

const NewBookmarkForm = ({ setIsNewBookmarkModalOpen }) => {
  const [bookmark, setBookmark] = useState({ name: "", address: "" });
  const handleChange = (e) => {
    setBookmark((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSaveBookmark = () => {
    setIsNewBookmarkModalOpen(false);
  };
  return (
    <form>
      <div className="flex flex-wrap smallest:items-start items-center gap-3">
        <label className="flex-grow-0 text-lg" htmlFor="name">
          <span className="block w-full text-white font-semibold">Name :</span>
        </label>
        <input
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
        <button
          type="button"
          onClick={handleSaveBookmark}
          className="bg-blue-400 rounded-xl px-4 py-2 text-lg ml-auto text-white tracking-widest font-semibold"
        >
          Done
        </button>
      </div>
    </form>
  );
};

export default NewBookmarkForm;
