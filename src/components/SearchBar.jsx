import { useState } from "react";
import useStoreContext from "../custom Hooks/useStoreContext";

const SearchBar = () => {
  const { input, dispatch } = useStoreContext()

  const handleChange = e => {
    dispatch({ type: 'search', payload: e.target.value })
  }

  return (
    <form className="bg-white flex flex-shrink-0 items-center rounded-[40px] px-4 py-2">
      <label className="sr-only" htmlFor="bookmarks">
        Search bar
      </label>
      <input
        type="text"
        placeholder="Search the bookmark"
        id="bookmarks"
        value={input}
        onChange={handleChange}
        className="w-full outline-none"
      />
    </form>
  );
};

export default SearchBar;
