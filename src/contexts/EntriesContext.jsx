import React, { createContext, useEffect, useState } from "react";
import { getEntriesFromStore } from "../utils/getEntriesFromStore";
import useModalContext from "../custom Hooks/useModalContext";
export const EntryContext = createContext(null);
const EntriesContext = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const { dispatch } = useModalContext();
  useEffect(() => {
    getEntriesFromStore(setEntries);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const parentArray = window.location.pathname.split('/');
      const parent = parentArray[parentArray.length - 1]
      dispatch({ type: 'parent', payload: parent })

    };
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [])
  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  );
};

export default EntriesContext;
