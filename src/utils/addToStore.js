import { makeTransaction } from "../..";

export const addToStore = (db, entry) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  store.add(entry);
};