import { getRequest } from "./src/utils/getRequest";

export function DB() {
  let db;
  const request = getRequest();

  request.onsuccess = (event) => {
    db = event.target.result;
  };
  request.onupgradeneeded = (event) => {
    let db = event.target.result;
    if (!db.objectStoreNames.contains("Bookmarks")) {
      db.createObjectStore("Bookmarks", { keyPath: "id" });
    }
  };
  return db;
}
export function makeTransaction(db, mode) {
  let transaction = db.transaction("Bookmarks", mode);
  transaction.onerror = (err) => console.warn(err);
  return transaction;
}
// Arrange folders such that they have a property isTopMost
// If isTopMost is not true, then , the folder should have a parent property
// The value of the parent property should be the name of the parent.
// TO render, in the top most page, render only folders with topMost value of true
// When i click a folder, fetch the folders that has a parent property equal to the name of the folder as well as files.
