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
          console.log(cursor);
          cursor.continue();
        } else {
          setDbEntries(entriesArray);
        }
      };
    }
  }, [db]);

  return { dbEntries };
};

export default useGetDbEntries;
