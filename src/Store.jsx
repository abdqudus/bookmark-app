import { createContext, useReducer } from "react";
import { getStoreState } from "./utils/mapFolderState";
import { getParentFromUrl } from "./utils/getParentFromPath";

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
  moveTo: '',
  input: '',
  isNameMissing: false,
  isAddressMissing: false,
  isAddressInvalid: false
};


const storeReducer = (storeState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "new bookmark": {
      return getStoreState(storeState, action);
    }
    case "new folder": {
      return getStoreState(storeState, action);
    }
    case "rename bookmark": {
      return getStoreState(storeState, action);
    }
    case "rename folder": {
      return getStoreState(storeState, action);
    }
    case 'parent': {
      return { ...storeState, parent: payload }
    }
    case 'move-to': {
      return { ...storeState, location: payload }
    }
    case 'move': {
      return { ...storeState, isMove: !storeState.isMove }
    }
    case 'search': {
      return { ...storeState, input: payload }
    }
    case 'name-err': {
      return { ...storeState, isNameMissing: !storeState.isNameMissing }
    }
    case 'address-err': {
      return { ...storeState, isAddressMissing: !storeState.isAddressMissing }
    }
    case 'invalid-address': {
      return { ...storeState, isAddressInvalid: !storeState.isAddressInvalid }
    }
    default:
      break;
  }
};
const ModalContext = ({ children }) => {
  const [storeState, dispatch] = useReducer(storeReducer, initialState);



  return (
    <StoreContext.Provider value={storeState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
};

export default ModalContext;
