import { makeTransaction } from "../..";

export const addToStore = (db, entry) => {
  console.log(db, entry);
  const transaction = makeTransaction(db, "readwrite");
  const store = transaction.objectStore("Bookmarks");
  console.log(store);
  store.add(entry);
};
