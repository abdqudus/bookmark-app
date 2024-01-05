import { makeTransaction } from "../..";

export const addToStore = (
  db,
  name,
  address = "none",
  type = "folder",
  isTopMost = true,
  parent = "none"
) => {
  if (name) {
    const transaction = makeTransaction(db, "readwrite");
    const store = transaction.objectStore("Bookmarks");
    if (type == "folder") {
      if (isTopMost) {
        store.add({ id: Date.now(), name, isTopMost, type });
      } else {
        store.add({ id: Date.now(), name, isTopMost, parent, type });
      }
    } else {
      if (isTopMost) {
        store.add({ id: Date.now(), name, isTopMost, type, address });
      } else {
        store.add({ id: Date.now(), name, isTopMost, type, address, parent });
      }
    }
  }
};
