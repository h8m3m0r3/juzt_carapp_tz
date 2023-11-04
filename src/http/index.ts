import axios from "axios";
const url = "https://retoolapi.dev";

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-type": "application/json",
  },
});

export { api };
