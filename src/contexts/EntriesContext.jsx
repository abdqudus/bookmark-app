import React, { createContext, useEffect, useState } from "react";
import { getEntriesFromStore } from "../utils/getEntriesFromStore";
export const EntryContext = createContext(null);
const EntriesContext = ({ children }) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getEntriesFromStore(setEntries);
  }, []);
  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  );
};

export default EntriesContext;
