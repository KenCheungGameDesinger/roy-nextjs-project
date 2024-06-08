import React from "react";

type Props = React.HTMLProps<HTMLInputElement> & {};

const SearchInput = (props: Props) => {
  return (
      <div className={props.className + " "}>
      <input
              type="text"
              placeholder="search product..."
              className="border border-gray-300 rounded-md px-3 py-1"
      />
    </div>
  );
};

export default SearchInput;
