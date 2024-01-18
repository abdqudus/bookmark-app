import { useContext } from "react";
import { DispatchContext, ModalsContext } from "../contexts/ModalContext";

const useModalContext = () => {
  const modalsContext = useContext(ModalsContext);
  const {
    isNewBookmark,
    isNewFolder,
    move,
    isRenameBookmark,
    dispatcherId,
    isRenameFolder,
  } = modalsContext;
  const dispatch = useContext(DispatchContext);
  return {
    isNewBookmark,
    isNewFolder,
    move,
    isRenameBookmark,
    isRenameFolder,
    dispatch,
    dispatcherId
  };
};

export default useModalContext;
