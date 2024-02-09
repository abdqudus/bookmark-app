import useConnectToDb from "../custom Hooks/useConnectToDb";
import useGetEntries from "../custom Hooks/useGetEntries";
import useStoreContext from "../custom Hooks/useStoreContext";
import { removeFromStore } from "../utils/removeFromStore";

const Options = ({ entry, showOptions, setShowOptions }) => {
  const { dispatch } = useStoreContext();

  const { entries, setEntries } = useGetEntries();

  const visibility = showOptions ? "show" : "";

  const { db } = useConnectToDb();

  const handleDelete = () => {
    const toBeRemoved = entries.filter(e => e.path.split('/').includes(entry.name) || e.name == entry.name)
    // this is done to remove the deleted folder alondside every folder or file within it.
    setEntries(entries.filter(entry => !toBeRemoved.some(item => item.id === entry.id)));
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

  const handleMoveClick = () => {
    dispatch({ type: 'move' });
    dispatch({ type: 'move-to', payload: entry });
    setShowOptions(false)
  }
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`absolute options z-10 ${visibility} transition -right-4 top-[110%] rounded-xl w-[150px] bg-white border-2 shadow-slate-600 text-[#0F1035]`}
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
      <p onClick={handleMoveClick} className="cursor-pointer hover:bg-[#0F1035] hover:text-white  p-2 rounded-b-xl">
        Move
      </p>
    </div>
  );
};

export default Options;
