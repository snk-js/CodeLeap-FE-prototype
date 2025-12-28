import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, fetchPosts, updatePost } from "../api/queries";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(1, 5)
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, updated }: { id: number; updated: { title: string; content: string } }) =>
      updatePost(id, updated),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
};