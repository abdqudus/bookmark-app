import Folder from "../components/Folder";
import BookMarkLink from "../components/BookMarkLink";
import useGetEntries from "../custom Hooks/useGetEntries";

const EntryList = () => {
  const { entries } = useGetEntries();
  const filteredEntries = entries.filter((entry) => entry.isTopMost);
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
};

export default EntryList;
