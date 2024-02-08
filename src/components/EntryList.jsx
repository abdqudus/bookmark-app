import Folder from './Folder';
import BookMarkLink from './BookMarkLink';
import useGetEntries from '../custom Hooks/useGetEntries';
import useStoreContext from '../custom Hooks/useStoreContext';
import Empty from './Empty';
import { useEffect, useState } from 'react';

const EntryList = () => {
    const { entries } = useGetEntries()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (entries.length > 0) {
            setIsLoading(false)
        }
    }, [entries])


    const { parent } = useStoreContext()

    let filteredEntries = entries.filter((entry) => entry.parent == parent);

    if (filteredEntries.length == 0 && !isLoading) {
        return <Empty />
    }

    return (
        <div>
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
