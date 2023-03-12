import SearchBar from "./SearchBar";
import { useState } from "react";
import searchImages from "../api";
import ImageList from "./ImageList";
function App() {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const Images = await searchImages(term);
    setImages(Images);
    setTerm(term);
  };

  return (
    <div>
      <h1>My React App</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
      <p>The user searched for {term}</p>
    </div>
  );
}

export default App;
