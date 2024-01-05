import { DB } from "..";
import Bookmarks from "./components/Bookmarks";
import SearchBar from "./components/SearchBar";

DB();

function App() {
  return (
    <>
      <div className="relative  overflow-x-auto smallest:px-2 py-4 px-6 grid w-full max-w-[800px] mx-auto min-h-screen gap-4 grid-rows-[40px_1fr]">
        <SearchBar />
        <Bookmarks />
      </div>
    </>
  );
}

export default App;
