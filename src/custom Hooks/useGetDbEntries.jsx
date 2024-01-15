import { useEffect, useState } from "react";
import useConnectToDb from "./useConnectToDb";
import { makeTransaction } from "../..";

const useGetDbEntries = () => {
  const { db } = useConnectToDb();
  const [dbEntries, setDbEntries] = useState([]);
  const entriesArray = [];
  useEffect(() => {
    if (db !== null) {
      const transaction = makeTransaction(db, "readonly");
      const objectStore = transaction.objectStore("Bookmarks");
      const cursorReq = objectStore.openCursor();
      cursorReq.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          if (cursor.value) {
            entriesArray.push(cursor.value);
          }
          cursor.continue();
        } else {
          setDbEntries(entriesArray);
          return entriesArray;
        }
      };
    }
  }, [db]);
  return { dbEntries, setDbEntries, entriesArray };
};

export default useGetDbEntries;
