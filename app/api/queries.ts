import { baseURL } from "./endpoints";
import { apiFetch } from "./requests";
import { PaginatedPosts } from "./types";

export const fetchPosts = async (offset = 0, limit = 10): Promise<PaginatedPosts> => {
  return apiFetch(`${baseURL}?offset=${offset}&limit=${limit}`);
};

