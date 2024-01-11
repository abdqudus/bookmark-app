import { useEffect, useState } from "react";
import AddBtn from "./NewBookmark";
import AddFolderModal from "./AddFolderModal";
import useConnectToDb from "../custom Hooks/useConnectToDb";
import AddNewBookmark from "./AddNewBookmark";
import NewBookmarkForm from "./NewBookmarkForm";
import { getEntriesFromStore } from "../utils/getEntriesFromStore";
import { Outlet, useOutletContext } from "react-router-dom";

const Bookmarks = () => {
  const [isNewFolderOpen, setIsNewFolderOpen] = useState(null);
  const [entries, setEntries] = useOutletContext();
  const { store } = useConnectToDb();

  return (
    <div className="bg-white rounded-2xl overflow-x-hidden relative  text-[#0F1035]">
      <div></div>
      <div
        onClick={() => setIsNewFolderOpen(!isNewFolderOpen)}
        className="p-4 flex cursor-pointer gap-4 hover:bg-[#0F1035] group bg-[#0F1035] text-white items-center flex-wrap"
      >
        <span className="w-[40px] h-[40px] flex items-center justify-center text-2xl font-bold  bg-white group-hover:text-[#0F1035] group-hover:bg-[#7FC7D9] text-[#0F1035] rounded-lg ">
          +
        </span>
        <p className="flex-grow">New folder</p>
      </div>
      <Outlet context={[entries, setEntries]} />
      {/* <AddBtn setIsNewBookmarkModalOpen={setIsNewBookmarkModalOpen} /> */}
      <AddFolderModal
        isNewFolderOpen={isNewFolderOpen}
        setIsNewFolderOpen={setIsNewFolderOpen}
        store={store}
        setEntries={setEntries}
      />
    </div>
  );
};

export default Bookmarks;
