import AddNewBookmark from "./AddNewBookmark";
import useModalContext from "../custom Hooks/useModalContext";

const AddBtn = () => {
  // const { setIsNewBookmark } = useModalContext();
  const { dispatch } = useModalContext();
  const addBookmark = () => {
    dispatch({ type: "new bookmark", name: "isNewBookmark" });
  };
  return (
    <div className="flex">
      <button
        onClick={addBookmark}
        className="rounded-full medium:w-full w-[250px] mx-auto text-[#7FC7D9] px-4 py-2 bg-[#0F1035] font-semibold "
      >
        New Bookmark
      </button>
      <AddNewBookmark />
    </div>
  );
};

export default AddBtn;
