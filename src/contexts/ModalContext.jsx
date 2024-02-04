import { createContext, useEffect, useReducer, useState } from "react";
import { getModalState } from "../utils/mapFolderState";
import { getParentFromUrl } from "../utils/getParentFromPath";
import { useNavigate } from "react-router-dom";

export const ModalsContext = createContext(null);

export const DispatchContext = createContext(null);

const url = new URL(window.location.href);
const parent = getParentFromUrl(url)

const initialState = {
  isNewBookmark: false,
  isNewFolder: false,
  isRenameBookmark: false,
  isRenameFolder: false,
  dispatcherId: undefined,
  move: false,
  parent,
  wind: '/'
};


const modalReducer = (modalState, action) => {
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
    case 'window': {
      return { ...modalState, wind: payload }
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
