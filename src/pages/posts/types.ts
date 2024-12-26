export interface PostType {
  id: number;
  userId: number;
  body: string;
  title: string;
}
export interface CommentType {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
export interface UserType {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
