import React, { createContext, useEffect, useState } from "react";
import { getEntriesFromStore } from "../utils/getEntriesFromStore";
import useStoreContext from "../custom Hooks/useStoreContext";
import { getParentFromUrl } from "../utils/getParentFromPath";
export const EntryContext = createContext(null);
const EntriesContext = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const [isEntriesLoaded, setIsEntriesLoaded] = useState(false);
  const { dispatch } = useStoreContext();

  useEffect(() => {
    getEntriesFromStore(setEntries, setIsEntriesLoaded);

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
    <EntryContext.Provider value={{ entries, setEntries, isEntriesLoaded }}>
      {children}
    </EntryContext.Provider>
  );
};

export default EntriesContext;
