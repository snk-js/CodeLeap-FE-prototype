import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, fetchPosts, updatePost } from "../api/queries";

export const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, 5),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const match = lastPage.next.match(/page=(\d+)/);
      const pageNumber = match ? Number(match[1]) : undefined;
      return pageNumber;
    },
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