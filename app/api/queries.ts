import { baseURL } from "./endpoints";
import { PaginatedPosts, PostPost, PostPostResponse } from "./types";


export const fetchPosts = async (page = 1, page_size = 5): Promise<PaginatedPosts> => {
  const response = await fetch(`${baseURL}?page=${page}&page_size=${page_size}`);
  if (!response.ok) throw new Error("Failed to fetch posts");
  const data: PaginatedPosts = await response.json();
  return data;
};

export const createPost = async (newPost: PostPost): Promise<PostPostResponse> => {
  const post: PostPost = { ...newPost };
  const res = await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(post),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to create post");
  const responseData: PostPostResponse = await res.json();
  return responseData;
};

export const updatePost = async (id: number, updated: Pick<PostPost, 'title' | 'content'>): Promise<PostPostResponse> => {
  const res = await fetch(`${baseURL}${id}/`, {
    method: "PATCH",
    body: JSON.stringify(updated),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) throw new Error("Failed to update post");
  const responseData: PostPostResponse = await res.json();
  return responseData;
};

export const deletePost = async (id: number): Promise<void> => {
  const res = await fetch(`${baseURL}${id}/`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete post");
};