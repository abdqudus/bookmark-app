import { useEffect, useState } from "react";
import useModalContext from "./useStoreContext";
import { addToStore, updateEntry } from "../utils/updateStore";
import useGetEntries from "./useGetEntries";
import useConnectToDb from "./useConnectToDb";
import { useParams } from "react-router-dom";
import { formatEntry } from "../utils/formatEntry";
import { fadeOutModal } from '../utils/fadeModalOut'

const useHandleBookmarkFormChange = () => {

  const [bookmark, setBookmark] = useState({ name: "", address: "" });

  const { isNewBookmark, isRenameBookmark, dispatch, dispatcherId } = useModalContext();

  const { setEntries, entries } = useGetEntries();

  const { db } = useConnectToDb();

  const { parentName } = useParams();

  const entry = entries.find(e => e.id == dispatcherId)

  const bookmarkName = entry?.name

  const bookmarkAddress = entry?.address

  useEffect(() => {

    if (bookmarkName && isRenameBookmark) {

      setBookmark({ address: bookmarkAddress, name: bookmarkName })
    }

  }, [isRenameBookmark, bookmarkName, bookmarkAddress])

  const handleChange = (e) => {
    setBookmark((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const closeModal = (dialogRef) => {
    if (isNewBookmark) {
      const eventObj = {
        type: "new bookmark",
        name: "isNewBookmark",
      };
      fadeOutModal(dialogRef.current, dispatch, eventObj);
    } else {
      const eventObj = {
        type: "rename bookmark",
        name: "isRenameBookmark",
      };
      fadeOutModal(dialogRef.current, dispatch, eventObj);
    }
  };

  const handleSaveBookmark = (dialogRef) => {
    const { name, address } = bookmark
    if (isRenameBookmark) {
      const arr = address.split("/").filter((i) => i.includes("."));
      const domain = arr.length == 1 ? arr[0] : arr.join();
      const newEntry = entries.map(e => {
        if (e.id === entry.id) {
          return { ...e, name, address, domain }
        }
        return e
      })
      updateEntry(db, entry.id, name, address, domain)

      setEntries(newEntry)
    } else {

      const entry = formatEntry({
        name,
        parent: parentName,
        address,
      });
      if (entry) {
        addToStore(db, entry);
        setEntries((prev) => [...prev, entry]);
      }
    }
    closeModal(dialogRef);
  };

  return { bookmark, handleChange, entry, handleSaveBookmark, closeModal };
};

export default useHandleBookmarkFormChange;
