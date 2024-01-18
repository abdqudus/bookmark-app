import { makeTransaction } from "../..";

export const addToStore = (db, entry) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  store.add(entry);
};

export const updateEntry = (db, id, name, address, domain) => {
  const transaction = makeTransaction(db, "readwrite");

  const store = transaction.objectStore("Bookmarks");

  const request = store.get(id);

  request.onsuccess = (e) => {
    const entry = e.target.result;

    entry.name = name;

    if (entry.type == "bookmark") {
      entry.address = address;
      entry.domain = domain;
    }

    store.put(entry);
  };
};
