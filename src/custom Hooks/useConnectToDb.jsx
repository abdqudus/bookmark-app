import { useEffect, useState } from "react";
import { getRequest } from "../utils/getRequest";

const useConnectToDb = () => {
  const [db, setDb] = useState(null);

  const [store, setStore] = useState("");

  useEffect(() => {
    const request = getRequest();

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
