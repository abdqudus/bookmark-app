import Folder from './Folder';
import BookMarkLink from './BookMarkLink';
import useGetEntries from '../custom Hooks/useGetEntries';
import useModalContext from '../custom Hooks/useModalContext';
import { useParams } from 'react-router-dom';

const EntryList = () => {
    const { entries } = useGetEntries()
    const { parent } = useModalContext()
    let filteredEntries = entries.filter((entry) => entry.parent == parent);




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
