import Folder from "../components/Folder";
import BookMarkLink from "../components/BookMarkLink";
import useGetEntries from "../custom Hooks/useGetEntries";
import Empty from "../components/Empty";

const HomePageEntryList = () => {
  const { entries, isEntriesLoaded } = useGetEntries();

  const filteredEntries = entries.filter((entry) => !entry.parent);

  if (filteredEntries.length == 0 && isEntriesLoaded) {
    return <Empty header="There is nothing here yet" par='Add a bookmark/folder to this folder' />
  }

  return (
    <div className="min-h-[80vh]">
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
};

export default HomePageEntryList;
