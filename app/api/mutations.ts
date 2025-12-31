import { baseURL } from "./endpoints";
import { apiFetch } from "./requests";
import { PostPost, PostPostResponse } from "./types";


export const createPost = async (newPost: PostPost): Promise<PostPostResponse> => {
  return apiFetch(baseURL, {
    method: "POST",
    body: JSON.stringify(newPost),
  });
};

export const updatePost = async (id: number, updated: Pick<PostPost, 'title' | 'content'>): Promise<PostPostResponse> => {
  return apiFetch(`${baseURL}${id}/`, {
    method: "PATCH",
    body: JSON.stringify(updated),
  });
};

export const deletePost = async (id: number): Promise<void> => {
  await apiFetch(`${baseURL}${id}/`, { method: "DELETE" });
};