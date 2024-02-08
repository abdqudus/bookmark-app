import React, { useEffect, useState } from 'react'
import useConnectToDb from './useConnectToDb';
import useStoreContext from './useStoreContext';
import useGetEntries from './useGetEntries';
import { addToStore, updateEntry } from '../utils/updateStore';
import { fadeOutModal } from '../utils/fadeModalOut';
import { formatEntry } from '../utils/formatEntry';

const useHandleFolderForm = () => {

    const { setEntries, entries } = useGetEntries();

    const { isNewFolder, dispatch, dispatcherId, isRenameFolder, parent } = useStoreContext();

    const entry = entries.find(e => e.id == dispatcherId)

    const inputValue = entry?.name

    const [folderName, setFolderName] = useState({ value: '' });

    useEffect(() => {

        if (inputValue && isRenameFolder) {

            setFolderName({ value: inputValue })
        }
    }, [isRenameFolder, inputValue])

    const { db } = useConnectToDb();


    const handleSaveFolder = (modalRef) => {


        if (isRenameFolder) {
            const newEntry = entries.map(e => {
                if (e.id === entry.id) {
                    return { ...e, name: folderName.value }
                }
                return e
            })
            updateEntry(db, entry.id, folderName.value)
            setEntries(newEntry)

        } else {
            const entry = formatEntry({ name: folderName.value, parent, });
            if (entry) {
                addToStore(db, entry);
                setEntries((prev) => [...prev, entry]);
            }
        }
        setFolderName({ value: '' })
        closeModal(modalRef);
    };
    const handleChange = e => setFolderName({ [e.target.name]: e.target.value })

    const closeModal = (modalRef) => {
        if (isNewFolder) {
            const eventObj = {
                type: "new folder",
                name: "isNewFolder",
            };
            fadeOutModal(modalRef.current, dispatch, eventObj);
        } else {
            const eventObj = {
                type: "rename folder",
                name: "isRenameFolder",
            };
            fadeOutModal(modalRef.current, dispatch, eventObj);
        }
    };
    return { handleSaveFolder, handleChange, folderName, closeModal }
}

export default useHandleFolderForm
