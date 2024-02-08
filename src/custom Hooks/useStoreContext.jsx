import { useContext } from "react";
import { DispatchContext, StoreContext } from "../Store";

const useStoreContext = () => {
  const modalsContext = useContext(StoreContext);

  const {
    isNewBookmark,
    isNewFolder,
    isMove,
    location,
    isRenameBookmark,
    dispatcherId,
    isRenameFolder,
    parent,
    input
  } = modalsContext;
  const dispatch = useContext(DispatchContext);
  return {
    isNewBookmark,
    location,
    isNewFolder,
    isMove,
    isRenameBookmark,
    isRenameFolder,
    dispatch,
    dispatcherId,
    parent,
    input
  };
};

export default useStoreContext;
