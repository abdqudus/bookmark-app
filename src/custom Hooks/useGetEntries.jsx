import React, { useContext } from "react";
import { EntryContext } from "../contexts/EntriesContext";

const useGetEntries = () => {
  
  const entriesContext = useContext(EntryContext);
  return entriesContext;
};

export default useGetEntries;
