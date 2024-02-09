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
    const oldName = entry.name;
    upDateChildrenOnRename(db, arrToChange, oldName, name);
    entry.name = name;
    store.put(entry);
  };
};
const upDateChildrenOnRename = (db, arrToChange, oldName, newName) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  arrToChange.forEach((e) => {
    const req = store.get(e.id);
    req.onsuccess = (e) => {
      const target = e.target.result;
      const path = target.path.replace(oldName, newName);
      if (target.parent == oldName) {
        target.parent = newName;
        // since arrToChange consists of all entries that are either
        // direct children of the entry or descendant children
        // this clause makes sure thatg if it is a direct child, the parent name
        // should change to the new name
        // also the path should also change
        target.path = path;
      } else {
        // However, if it is an indirect child, only the path should change
        target.path = path;
      }
      store.put(target);
    };
  });
};
const upDateChildrenOnMove = (db, arrToChange, entry) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  arrToChange.forEach((e) => {
    const req = store.get(e.id);
    req.onsuccess = (e) => {
      const target = e.target.result;
      target.path = window.location.pathname + "/" + entry.name;
      store.put(target);
    };
  });
};

export const MoveEntry = (db, entry, location, entries) => {
  const toBeUpdated = entries.filter((e) =>
    e.path.split("/").includes(entry.name)
  );

  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  const request = store.get(entry.id);
  request.onsuccess = (e) => {
    const target = e.target.result;
    upDateChildrenOnMove(db, toBeUpdated, target);
    target.parent = location;
    target.path = document.location.pathname;
    store.put(target);
  };
};
