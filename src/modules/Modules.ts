export interface User {
  id: number;
  name: string;
}

export interface ListProps {
  users: User[];
}

export interface ListItemProps {
  user: User;
}

export interface Post {
  id: number;
  title: string;
}
