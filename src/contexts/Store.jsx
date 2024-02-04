import { createContext, useReducer } from "react";
import { getModalState } from "../utils/mapFolderState";
import { getParentFromUrl } from "../utils/getParentFromPath";
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext(null);

export const DispatchContext = createContext(null);

const url = new URL(window.location.href);
const parent = getParentFromUrl(url)

const initialState = {
  isNewBookmark: false,
  isNewFolder: false,
  isRenameBookmark: false,
  isRenameFolder: false,
  dispatcherId: undefined,
  isMove: false,
  parent,
  moveTo: ''
};


const storeReducer = (modalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "new bookmark": {
      return getModalState(modalState, action);
    }
    case "new folder": {
      return getModalState(modalState, action);
    }
    case "rename bookmark": {
      return getModalState(modalState, action);
    }
    case "rename folder": {
      return getModalState(modalState, action);
    }
    case 'parent': {
      return { ...modalState, parent: payload }
    }
    case 'move-to': {
      return { ...modalState, location: payload }
    }
    case 'move': {
      return { ...modalState, isMove: !modalState.isMove }
    }
    default:
      break;
  }
};
const ModalContext = ({ children }) => {
  const [modalState, dispatch] = useReducer(storeReducer, initialState);



  return (
    <StoreContext.Provider value={modalState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};

export default ModalContext;
