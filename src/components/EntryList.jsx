import React from 'react'
import Folder from './Folder';
import BookMarkLink from './BookMarkLink';
import useGetEntries from '../custom Hooks/useGetEntries';

const EntryList = ({ parentName }) => {
    const { entries } = useGetEntries()

    const filteredEntries = entries.filter((entry) => entry.parent == parentName);
    return (
        <div className=" ">
            {filteredEntries
                .filter((entry) => entry.type === "folder")
                .map((folder) => (
                    <Folder key={folder.id} folder={folder} />
                ))}
            {filteredEntries
                .filter((entry) => entry.type !== "folder")
                .map((entry) => (
                    <BookMarkLink key={entry.name} entry={entry} />
                ))}
        </div>
    );

}

export default EntryList
