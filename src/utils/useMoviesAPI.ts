import { useQuery } from "@tanstack/react-query";
import fetchApi from ".";
import { MovieJSON } from "./types";

const useMoviesAPI = () => {
  return useQuery<MovieJSON>(["movies"], () => fetchApi("/movie"), {
    refetchOnWindowFocus: false,
  });
};

export default useMoviesAPI;
