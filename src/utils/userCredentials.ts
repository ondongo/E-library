/*===========================================================
Define the UserCredentials interface for user information,
including nullable fields, create a variable to temporarily 
store user information,and provide functions to set and 
retrieve this information.
============================================================*/
export type UserCredentials = {
  accessToken: string | undefined;
  userId: string;
  email: string | null;
  username: string | null;
  provider: string;
  profileImage: string | null;
};

let userCredentialsTemp: UserCredentials | null = null;

export function setUserCredentials(credentials: UserCredentials) {
  userCredentialsTemp = credentials;
}

export function getUserCredentials(): UserCredentials | null {
  return userCredentialsTemp;
}
