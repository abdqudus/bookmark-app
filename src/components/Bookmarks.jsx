import AddFolderModal from "./AddFolderModal";
import useConnectToDb from "../custom Hooks/useConnectToDb";
import { Outlet } from "react-router-dom";
import useStoreContext from "../custom Hooks/useStoreContext";
import { getParentFromUrl } from "../utils/getParentFromPath";
import useGetEntries from "../custom Hooks/useGetEntries";
import { MoveEntry } from "../utils/updateStore";

const BookmarksInterface = () => {
  const { dispatch, isMove, location } = useStoreContext();
  const { db } = useConnectToDb()
  const { setEntries, entries } = useGetEntries()
  const { store } = useConnectToDb();

  const handleMoveHere = () => {
    const parent = getParentFromUrl(window.location)
    setEntries(prev => prev.map(e => {
      if (e.id == location.id) {
        return { ...e, parent }
      } else {
        return e
      }
    }))
    const entry = entries.find(e => e.id == location.id)
    dispatch({ type: 'move' });
    MoveEntry(db, entry, parent)
  }
  return (
    <div className=" bg-white rounded-2xl overflow-x-hidden relative  text-[#0F1035]">
      <div
        onClick={() => dispatch({ type: "new folder", name: "isNewFolder" })}
        className="p-4 flex cursor-pointer gap-4 hover:bg-[#0F1035] group mb-4 bg-[#0F1035] text-white items-center flex-wrap"
      >
        <span className="w-[40px] h-[40px] flex items-center justify-center text-2xl font-bold  bg-white group-hover:text-[#0F1035] group-hover:bg-[#7FC7D9] text-[#0F1035] rounded-lg ">
          +
        </span>
        <p className="flex-grow">New folder</p>
      </div>
      <Outlet />
      {isMove && <button onClick={handleMoveHere} className="absolute bottom-0 w-full bg-[#0F1035] text-white p-3">Move Here</button>}
      <AddFolderModal store={store} />
    </div>
  );
};

export default BookmarksInterface;
