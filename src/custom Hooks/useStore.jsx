import { useEffect, useState } from "react";

const useStore = () => {
  const [entries, setEntries] = useState([]);
  const [isJustInitialized, setIJustInitialized] = useState(true);
  useEffect(() => {
    let allow;
    if (db && !isJustInitialized) {
      addToStore(db, entries[entries.length - 1]);
    }
   
  }, [entries, isJustInitialized]);

  useEffect(() => {
    getEntriesFromStore(setEntries);
  }, []);

  return { entries, setEntries };
};

export default useStore;
