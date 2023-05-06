import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export default async function getData(endpoint: string) {
  const url = `${BASE_URL}${endpoint}`;

  const response = await axios.get(url);

  return response.data;
}
