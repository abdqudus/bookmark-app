import { useEffect, useState } from "react";
import useStoreContext from "./useStoreContext";
import { addToStore, updateEntry } from "../utils/updateStore";
import useGetEntries from "./useGetEntries";
import useConnectToDb from "./useConnectToDb";
import { formatEntry } from "../utils/formatEntry";
import { fadeOutModal } from '../utils/fadeModalOut'
import { getParentFromUrl } from "../utils/getParentFromPath";
import isValidAddress from "../utils/checkWebsite";

const useHandleBookmarkFormChange = () => {

  const [bookmark, setBookmark] = useState({ name: "", address: "" });

  const { isNewBookmark, isRenameBookmark, dispatch, dispatcherId, isNameMissing, isAddressInvalid } = useStoreContext();

  const { setEntries, entries } = useGetEntries();

  const { db } = useConnectToDb();

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
    if (e.target.value && isNameMissing) {
      dispatch({ type: 'name-err' })
    }

    if (e.target.value && isAddressInvalid) {
      dispatch({ type: 'invalid-address' })
    }
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
    setBookmark({ name: "", address: "" })
  };

  const handleSaveBookmark = (dialogRef) => {
    const { name, address } = bookmark
    if (isValidAddress(address)) {

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
        if (name && address) {
          const entry = formatEntry({
            name,
            parent: getParentFromUrl(window.location),
            address,
            type: 'bookmark'
          });
          console.log(entry)
          if (entry) {
            addToStore(db, entry);
            setEntries((prev) => [...prev, entry]);
          }
          setBookmark({ name: "", address: "" })
          closeModal(dialogRef);
        }
        else if (!name) {
          dispatch({ type: 'name-err' })
        }
        else if (!address) {
          dispatch({ type: 'address-err' })
        }


      }
    } else {
      dispatch({ type: 'invalid-address' })
    }
  };

  return { bookmark, handleChange, entry, handleSaveBookmark, closeModal };
};

export default useHandleBookmarkFormChange;
