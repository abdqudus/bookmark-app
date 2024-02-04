import React, { createContext, useEffect, useState } from "react";
import { getEntriesFromStore } from "../utils/getEntriesFromStore";
import useModalContext from "../custom Hooks/useStoreContext";
import { getParentFromUrl } from "../utils/getParentFromPath";
export const EntryContext = createContext(null);
const EntriesContext = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const { dispatch } = useModalContext();
  useEffect(() => {
    getEntriesFromStore(setEntries);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      dispatch({ type: 'parent', payload: getParentFromUrl(window.location) })

    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [dispatch])
  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  );
};

export default EntriesContext;
