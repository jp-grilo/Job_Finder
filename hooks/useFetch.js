import axios from "axios";
import { RAPID_API_KEY } from "@env";

const useFetch = async (endpoint, query) => {
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "x-rapidapi-key": RAPID_API_KEY,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return { data: response.data.data };
  } catch (error) {
    console.log(`DEU RUIM MENÓÓÓÓÓÓ: ${error}`);
    throw error;
  }
};

export default useFetch;