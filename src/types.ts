export interface UsersDataStructure {
  id: string;
  image: string;
  username: string;
  password: string;
  email: string;
  enemies: {};
  friends: {};
  isLogged: boolean;
}

export type UsersDataListStructure = UsersDataStructure[];
