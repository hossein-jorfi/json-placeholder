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
  id: 1;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface TodoType {
  completed: boolean;
  title: string;
  id: number;
  userId: number;
}
