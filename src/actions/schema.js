import { schema } from "normalizr";

const postSchema = new schema.Entity("posts");
const commentSchema = new schema.Entity("comments");

export const postListSchema = [postSchema];
export const commentListSchema = [commentSchema];
