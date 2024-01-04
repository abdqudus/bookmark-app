import { useEffect, useState } from "react";
import useConnectToDb from "./useConnectToDb";
import { MakeTransaction } from "../..";

const useGetFolders = () => {
  const { db } = useConnectToDb();
  const [dbEntries, setDbEntries] = useState([]);
  useEffect(() => {
    console.log("rujn");
    const entriesArray = [];
    const arr = [];
    if (db !== null) {
      const transaction = MakeTransaction(db, "readonly");
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

export default useGetFolders;
