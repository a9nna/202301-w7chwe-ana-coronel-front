export interface UserApiDataStructure {
  image: string;
  username: string;
  enemies: [];
  friends: [];
}
export interface UserDataStructure extends UserApiDataStructure {
  isLogged: boolean;
}

export type UsersDataListStructure = UserDataStructure[];
