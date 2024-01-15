import AddFolderModal from "./AddFolderModal";
import useConnectToDb from "../custom Hooks/useConnectToDb";
import { Outlet } from "react-router-dom";
import useModalContext from "../custom Hooks/useModalContext";

const BookmarksInterface = () => {
  const { isNewFolder, dispatch } = useModalContext();

  const { store } = useConnectToDb();

  return (
    <div className="bg-white rounded-2xl overflow-x-hidden relative  text-[#0F1035]">
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
      <AddFolderModal store={store} />
    </div>
  );
};

export default BookmarksInterface;
