import { makeTransaction } from "../..";

export const removeFromStore = (db, entriesArray) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");
  entriesArray.forEach((e) => store.delete(e.id));
};
