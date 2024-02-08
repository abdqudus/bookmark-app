import { useEffect, useState } from "react";
import { getEntriesFromStore } from "../utils/getEntriesFromStore";

const useStore = () => {
  const [entries, setEntries] = useState([]);
  ;

  useEffect(() => {
    getEntriesFromStore(setEntries);
  }, []);

  return { entries, setEntries };
};

export default useStore;
