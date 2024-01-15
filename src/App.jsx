import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DB } from "..";
import Home from "./Routes/Home";
import FolderChild from "./components/FolderChild";
import EntryList from "./Routes/EntryList";
import BookmarksInterface from "./components/Bookmarks";
import ModalContext from "./contexts/ModalContext";
import EntriesContext from "./contexts/EntriesContext";

DB();

function App() {
  return (
    <BrowserRouter>
      <ModalContext>
        <EntriesContext>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<BookmarksInterface />}>
                <Route index element={<EntryList />} />
                <Route path=":parentName" element={<FolderChild />} />
              </Route>
            </Route>
          </Routes>
        </EntriesContext>
      </ModalContext>
    </BrowserRouter>
  );
}

export default App;
// smallest:px-2 py-4 px-6 grid w-[80%] max-w-[800px] mx-auto min-h-screen gap-4
