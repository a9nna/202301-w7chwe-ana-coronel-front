export interface UserApiDataStructure {
  username: string;
  password: string;
  email: string;
  enemies: [];
  friends: [];
}
export interface UserDataStructure extends UserApiDataStructure {
  isLogged: boolean;
}

export type UsersDataListStructure = UserDataStructure[];
