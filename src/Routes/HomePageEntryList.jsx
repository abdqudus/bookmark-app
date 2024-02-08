import Folder from "../components/Folder";
import BookMarkLink from "../components/BookMarkLink";
import useGetEntries from "../custom Hooks/useGetEntries";
import Empty from "../components/Empty";
import { useEffect, useState } from "react";

const HomePageEntryList = () => {
  const { entries } = useGetEntries();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (entries.length > 0) {
      setIsLoading(false)
    }
  }, [entries])

  const filteredEntries = entries.filter((entry) => !entry.parent);


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
};

export default HomePageEntryList;
