import { useEffect, useState } from "react";

const useConnectToDb = () => {
  const [db, setDb] = useState(null);

  const [store, setStore] = useState("");

  useEffect(() => {
    const request = window.indexedDB.open("BookmarksDb", 1);

    request.onerror = (event) => {
      console.log(event);
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction("Bookmarks", "readwrite");
      const store = transaction.objectStore("Bookmarks");
      setDb(db);
      setStore(store);
    };
  }, []);

  return { db, store };
};

export default useConnectToDb;
