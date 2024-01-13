import { makeTransaction } from "../..";

export const removeFromStore = (db, entry) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  store.delete(entry);
};
