import { makeTransaction } from "../..";

export const addToStore = (db, entry) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  store.add(entry);
};

export const updateBookmark = (db, id, name, address, domain) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  const request = store.get(id);

  request.onsuccess = (e) => {
    const entry = e.target.result;

    entry.name = name;
    entry.address = address;
    entry.domain = domain;

    store.put(entry);
  };
};
export const updateFolder = (db, id, name, arrToChange) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  const request = store.get(id);

  request.onsuccess = (e) => {
    const entry = e.target.result;
    console.log(entry);
    const oldName = entry.name;
    upDateChildren(db, arrToChange, oldName, name);
    entry.name = name;
    store.put(entry);
  };
};
const upDateChildren = (db, arrToChange, oldName, newName) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  arrToChange.forEach((e) => {
    const req = store.get(e.id);
    req.onsuccess = (e) => {
      const target = e.target.result;
      const path = target.path.replace(oldName, newName);

      if (target.parent == oldName) {
        target.parent = newName;
        target.path = path;
      } else {
        target.path = path;
      }
      store.put(target);
    };
  });
};
export const MoveEntry = (db, entry, location) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  const request = store.get(entry.id);

  request.onsuccess = (e) => {
    const entry = e.target.result;
    entry.parent = location;
    entry.path = document.location.pathname;
    store.put(entry);
  };
};
