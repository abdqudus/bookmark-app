import useConnectToDb from "../custom Hooks/useConnectToDb";
import useGetEntries from "../custom Hooks/useGetEntries";
import useModalContext from "../custom Hooks/useModalContext";
import { removeFromStore } from "../utils/removeFromStore";
import AddFolderModal from "./AddFolderModal";

const Options = ({ folder, show }) => {
  const { setIsNewFolderOpen } = useModalContext();
  const { entries, setEntries } = useGetEntries();
  const visibility = show ? "show" : "";

  const { db } = useConnectToDb();

  const handleDelete = (e) => {
    setEntries(entries.filter((e) => e.id !== folder.id));
    removeFromStore(db, folder.id);
  };
  const handleRename = () => {
    setIsNewFolderOpen(true);
  };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`absolute options z-10 ${visibility} transition right-0 rounded-xl w-[150px] bg-white border-2 shadow-slate-600 text-[#0F1035]`}
    >
      <p
        onClick={handleDelete}
        className={`cursor-pointer hover:bg-[#0F1035] hover:text-white  p-2 rounded-t-xl `}
      >
        Delete
      </p>
      <p
        onClick={handleRename}
        className="cursor-pointer hover:bg-[#0F1035] hover:text-white  p-2 "
      >
        Rename
      </p>
      <p className="cursor-pointer hover:bg-[#0F1035] hover:text-white  p-2 ">
        Move
      </p>
      <p className="cursor-pointer hover:bg-[#0F1035] hover:text-white  p-2 rounded-b-xl">
        Copy
      </p>
      {/* <AddFolderModal /> */}
    </div>
  );
};

export default Options;
