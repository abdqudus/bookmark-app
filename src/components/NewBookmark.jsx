import AddNewBookmark from "./AddNewBookmark";
import useModalContext from "../custom Hooks/useModalContext";

const AddBtn = ({ setEntries }) => {
  const { isNewBookmarkModalOpen, setIsNewBookmarkModalOpen } = useModalContext;
  const addBookmark = () => {
    setIsNewBookmarkModalOpen((prev) => !prev);
  };
  return (
    <div className="flex">
      <button
        onClick={addBookmark}
        className="rounded-full medium:w-full w-[250px] mx-auto text-[#7FC7D9] px-4 py-2 bg-[#0F1035] font-semibold "
      >
        New Bookmark
      </button>
      <AddNewBookmark setEntries={setEntries} />
    </div>
  );
};

export default AddBtn;
