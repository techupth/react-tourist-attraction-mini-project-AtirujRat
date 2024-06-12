import React from "react";

function SearchBar(props) {
  return (
    <div className="flex flex-col gap-2 w-[1000px] text-1xl">
      <label htmlFor="">ค้นหาที่เที่ยว</label>
      <input
        placeholder="ค้นหาที่เที่ยวแล้วไปกัน..."
        className="w-full outline-none border-b-4 text-center "
        type="text"
        value={props.searchBar}
        onChange={(e) => props.setSearchBarInput(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
