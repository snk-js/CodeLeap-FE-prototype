import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, deletePost, fetchPosts, updatePost } from "../api/queries";

export const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 0 }) => fetchPosts(pageParam, 10),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next || lastPage.results.length === 0) return undefined;
      const nextUrl = new URL(lastPage.next);
      const params = new URLSearchParams(nextUrl.search);
      const nextOffset = parseInt(params.get('offset') || '0', 10);
      return nextOffset;
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