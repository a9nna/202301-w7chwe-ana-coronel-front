export interface UserApiDataStructure {
  image: string;
  username: string;
  enemies: [];
  friends: [];
}
export interface UserDataStructure extends UserApiDataStructure {
  isLogged: boolean;
}

export interface UserStructure extends UserApiDataStructure {
  isFriend: boolean;
  isEnemy: boolean;
}

export type UsersListApiDataStructure = UserApiDataStructure[];
export type UsersListStructure = UserStructure[];
export type UsersDataListStructure = UserDataStructure[];
