import { useContext } from "react";
import { DispatchContext, ModalsContext } from "../contexts/ModalContext";

const useModalContext = () => {
  const modalsContext = useContext(ModalsContext);
  const {
    isNewBookmark,
    isNewFolder,
    bookmarksArray,
    foldersArray,
    isRenameBookmark,
    isRenameFolder,
  } = modalsContext;
  const dispatch = useContext(DispatchContext);
  return {
    isNewBookmark,
    isNewFolder,
    bookmarksArray,
    foldersArray,
    isRenameBookmark,
    isRenameFolder,
    dispatch,
  };
};

export default useModalContext;
