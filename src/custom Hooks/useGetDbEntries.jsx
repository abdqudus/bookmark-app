import { useEffect, useState } from "react";
import useConnectToDb from "./useConnectToDb";
import { makeTransaction } from "../..";

const useGetDbEntries = () => {
  const { db } = useConnectToDb();
  const [dbEntries, setDbEntries] = useState([]);
  useEffect(() => {
    const entriesArray = [];
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
        }
      };
    }
  }, [db]);
  return { dbEntries, setDbEntries };
};

export default useGetDbEntries;
