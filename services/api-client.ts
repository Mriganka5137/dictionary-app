import axios from "axios";
const base_url = "https://api.dictionaryapi.dev/api/v2/entries/en";

const axiosInstance = axios.create({
  baseURL: base_url,
});

export const getWord = async (word: string) => {
  try {
    const data = await axiosInstance.get("/" + word);
    return data;
  } catch (error) {
    console.log(error);
  }
};
