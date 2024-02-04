import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import AddBtn from "../components/NewBookmark";

const Home = () => {



  return (
    <div className="relative py-4 bg-[#7FC7D9] flex justify-center items-center h-screen overflow-hidden">
      <div className="grid grid-rows-[40px_auto_40px] h-[95%] gap-4 w-[90%] mx-auto max-w-[700px]">
        <SearchBar />
        <Outlet />
        <AddBtn />
      </div>
    </div>
  );
};

export default Home;
