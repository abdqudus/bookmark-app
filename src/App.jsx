import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DB } from "..";
import Home from "./Routes/Home";
import FolderChild from "./components/FolderChild";
import EntryList from "./Routes/EntryList";
import Bookmarks from "./components/Bookmarks";

DB();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Bookmarks />}>
            <Route index element={<EntryList />} />
            <Route path=":parentName" element={<FolderChild />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// smallest:px-2 py-4 px-6 grid w-[80%] max-w-[800px] mx-auto min-h-screen gap-4
