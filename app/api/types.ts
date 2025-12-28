

export type PostPost = {
  username: string
  title: string
  content: string
}

export type PatchPost = {
  title: string
  content: string
}

export type PostPostResponse = {
  id: number,
  username: string,
  created_datetime: string,
  title: string,
  content: string,
  author_ip: string
}

export type Post = Omit<PostPostResponse, "author_ip">

export type GetPostsResponse = Post[]


export type PaginatedPosts = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PostPostResponse[];
};