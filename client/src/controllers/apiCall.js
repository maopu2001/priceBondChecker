import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getResultData = (search) => {
  const body = JSON.stringify({ gsearch: search });
  return axios.post(url, body, {
    headers: { "Content-Type": "application/json" },
  });
};
