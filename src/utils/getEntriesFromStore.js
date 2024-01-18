import { makeTransaction } from "../..";
import { getRequest } from "./getRequest";
export const getEntriesFromStore = (setNewEntries) => {
  const entriesArray = [];
  let store;
  const request = getRequest();
  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction("Bookmarks", "readwrite");
    store = transaction.objectStore("Bookmarks");
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
          setNewEntries(entriesArray);
        }
      };
    }
  };
};
