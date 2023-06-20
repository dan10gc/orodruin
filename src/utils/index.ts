import axios from "axios";

interface PaginationParams {
  limit?: number;
  page?: number;
  offset?: number;
}

const fetchApi = async (url: string, params?: PaginationParams) => {
  const res = await axios({
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
    baseURL: "https://the-one-api.dev/v2",
    url,
    params,
  });

  return res.data;
};

export default fetchApi;
