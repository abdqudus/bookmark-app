import { useParams } from "react-router-dom";
import useConnectToDb from "../custom Hooks/useConnectToDb";
import useGetEntries from "../custom Hooks/useGetEntries";
import useModalContext from "../custom Hooks/useModalContext";
import { removeFromStore } from "../utils/removeFromStore";
import AddFolderModal from "./AddFolderModal";

const Options = ({ entry, showOptions, setShowOptions }) => {
  const { dispatch } = useModalContext();

  const { entries, setEntries } = useGetEntries();

  const visibility = showOptions ? "show" : "";

  const { db } = useConnectToDb();

  const handleDelete = () => {
    const toBeRemoved = entries.filter(e => e.path.includes(entry.name))
    setEntries(entries.filter(e => !e.path.includes(entry.name)));
    removeFromStore(db, toBeRemoved);
  };

  const handleRenameClick = () => {

    if (entry.type === 'folder') {
      dispatch({ type: "rename folder", name: "isRenameFolder", id: entry.id });
    } else {
      dispatch({ type: "rename bookmark", name: "isRenameBookmark", id: entry.id });
    }

    setShowOptions(false)
  };

  const handleMoveClick = () => { console.log(parentName) }

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
        onClick={handleRenameClick}
        className="cursor-pointer hover:bg-[#0F1035] hover:text-white  p-2 "
      >
        Rename
      </p>
      <p onClick={handleMoveClick} className="cursor-pointer hover:bg-[#0F1035] hover:text-white  p-2 ">
        Move
      </p>
      <p className="cursor-pointer hover:bg-[#0F1035] hover:text-white  p-2 rounded-b-xl">
        Copy
      </p>
    </div>
  );
};

export default Options;
