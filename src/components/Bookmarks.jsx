import { useState } from "react";
import AddBtn from "./AddBtn";
import AddFolderModal from "./AddFolderModal";
import useConnectToDb from "../custom Hooks/useConnectToDb";
import useGetFolders from "../custom Hooks/useGetFolders";
import Folder from "./Folder";

const Bookmarks = () => {
  const [isNewFolderOpen, setIsNewFolderOpen] = useState(false);
  const { store } = useConnectToDb();
  const [folderName, setFolderName] = useState({ value: "" });
  const { dbEntries } = useGetFolders();

  return (
    <div className="bg-white rounded-2xl relative pt-[50px] text-[#0F1035]">
      <nav className="p-4 w-full absolute flex items-center rounded-xl top-0 h-[50px]">
        <p className="text-sm font-semibold">All Bookmarks</p>
      </nav>
      <div
        onClick={() => setIsNewFolderOpen(!isNewFolderOpen)}
        className="p-4 flex gap-4 hover:bg-[#0F1035] group hover:text-white items-center flex-wrap"
      >
        <span className="w-[40px] h-[40px] flex items-center justify-center text-2xl font-bold  bg-[#0F1035] group-hover:text-[#0F1035] group-hover:bg-[#7FC7D9] text-[#7FC7D9] rounded-lg ">
          +
        </span>
        <p className="flex-grow">New folder</p>
      </div>
      {dbEntries.map((folder) => (
        <Folder key={folder.id} folder={folder} />
      ))}
      <AddFolderModal
        isNewFolderOpen={isNewFolderOpen}
        folderName={folderName}
        setFolderName={setFolderName}
        setIsNewFolderOpen={setIsNewFolderOpen}
        store={store}
      />
      <AddBtn />
    </div>
  );
};

export default Bookmarks;
