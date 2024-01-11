const SearchBar = () => {
  return (
    <form className="bg-white flex flex-shrink-0 items-center rounded-[40px] px-4 py-2">
      <label className="sr-only" htmlFor="bookmarks">
        Search bar
      </label>
      <input
        type="text"
        placeholder="Search the bookmark"
        id="bookmarks"
        className="w-full outline-none"
      />
    </form>
  );
};

export default SearchBar;
