import { createContext, useReducer, useState } from "react";
import { getModalState } from "../utils/mapFolderState";

export const ModalsContext = createContext(null);

export const DispatchContext = createContext(null);

const initialState = {
  isNewBookmark: false,
  isNewFolder: false,
  isRenameBookmark: false,
  isRenameFolder: false,
  foldersArray: [],
  bookmarksArray: [],
};

const modalReducer = (modalState, action) => {
  const { type } = action;
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
    case "add bookmark": {
    }

    default:
      break;
  }
};
const ModalContext = ({ children }) => {
  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalsContext.Provider value={modalState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </ModalsContext.Provider>
  );
};

export default ModalContext;
