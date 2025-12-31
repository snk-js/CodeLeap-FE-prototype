import z from "zod";

export const postSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(100, "Title must be under 100 characters"),
  content: z
    .string()
    .trim()
    .min(1, "Content is required")
    .max(2000, "Content must be under 2000 characters"),
});