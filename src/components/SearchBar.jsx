const SearchBar = () => {
  return (
    <form className="bg-white flex items-center rounded-[40px] p-2 px-4">
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
