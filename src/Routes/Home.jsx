import { Outlet } from "react-router-dom";
import Bookmarks from "../components/Bookmarks";
import SearchBar from "../components/SearchBar";
import AddBtn from "../components/NewBookmark";
import { useEffect, useState } from "react";
import { getEntriesFromStore } from "../utils/getEntriesFromStore";

const Home = () => {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    getEntriesFromStore(setEntries);
  }, []);
  return (
    <div className="relative py-4 bg-[#7FC7D9] flex justify-center items-center h-screen overflow-hidden">
      <div className="grid grid-rows-[40px_auto_40px] h-[95%] gap-4 w-[90%] mx-auto max-w-[700px]">
        <SearchBar />
        <Outlet context={[entries, setEntries]} />
        <AddBtn setEntries={setEntries} />
      </div>
    </div>
  );
};

export default Home;
