import React from 'react'
import Folder from './Folder'
import BookMarkLink from './BookMarkLink'

const SearchResultEntries = ({ val }) => {

    return (
        <>
            <p className='px-5 mb-4 text-[#0F1035] font-semibold text-lg sm:text-2xl'>Result found in all bookmarks:</p>
            {val
                .filter((entry) => entry.type === "folder")
                .map((folder) => (
                    <Folder key={folder.id} folder={folder} />
                ))}
            {val
                .filter((entry) => entry.type !== "folder")
                .map((entry) => (
                    <BookMarkLink key={entry.name} entry={entry} />
                ))}
        </>
    )
}

export default SearchResultEntries
