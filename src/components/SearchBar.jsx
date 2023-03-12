import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(onSubmit);
          console.log("your search term is::::", term);
          onSubmit(e.target[0].value);
        }}
      >
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
