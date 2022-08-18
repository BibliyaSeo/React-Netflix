import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "85c65f579cc1ebb9bf1dd4f7ebe65a85",
    language: "ko-KR",
  },
});

export default instance;
