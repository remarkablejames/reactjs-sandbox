import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: term,
    },
    headers: {
      Authorization: "Client-ID DDE7U1maaYOps2L8qip6v4ES2K_FybMxkole-1xGPrc",
    },
  });
  return response.data.results;
};

export default searchImages;
