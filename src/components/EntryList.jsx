import Folder from './Folder';
import BookMarkLink from './BookMarkLink';
import useGetEntries from '../custom Hooks/useGetEntries';
import useStoreContext from '../custom Hooks/useStoreContext';
import Empty from './Empty';

const EntryList = () => {
    const { entries, isEntriesLoaded } = useGetEntries()


    const { parent } = useStoreContext()

    let filteredEntries = entries.filter((entry) => entry.parent == parent);

    if (filteredEntries.length == 0 && isEntriesLoaded) {
        return <Empty header="There is nothing here yet" par='Add a bookmark/folder to this folder' />
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
