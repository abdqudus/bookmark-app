import { useEffect, useState } from "react";
import { getEntriesFromStore } from "../utils/getEntriesFromStore";
import Folder from "../components/Folder";
import BookMarkLink from "../components/BookMarkLink";
import { useOutletContext } from "react-router-dom";

const EntryList = () => {
  const [entries, setEntries] = useOutletContext();

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
