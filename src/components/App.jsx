import SearchBar from "./SearchBar";
import { useState } from "react";
import searchImages from "../api";
function App() {
  const [term, setTerm] = useState("");
  const handleSubmit = (term) => {
    searchImages(term);
    setTerm(term);
  };

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar onSubmit={handleSubmit} />
      <p>The user searched for {term}</p>
    </div>
  );
}

export default App;
