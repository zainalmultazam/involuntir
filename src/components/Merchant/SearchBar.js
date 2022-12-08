const SearchBar = () => {
  return (
    <div className="px-4 mb-[17px]">
      <form className="relative flex items-stretch text-black">
        <input
          type="text"
          name="search"
          placeholder="Tulis Pencarian"
          className="block rounded-full w-full py-5 pl-12 pr-4 focus:outline-none"
        />
        <div className="flex absolute inset-y-0 left-0 items-center pl-5 pointer-events-none">
          <img
            src="/images/icon/landing-page/search.svg"
            className="w-5 h-5"
            alt=""
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
