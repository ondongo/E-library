import { atom } from "recoil";

export const userCredentialsState = atom({
  key: "userCredentialsState",
  default: {
    accessToken: null,
    userId: "",
    email: null,
    username: null,
    provider: "",
    profileImage: null,
  },
});

export function updateUserCredentials(
  userCredentials: any,
  setUserCredentials: any
) {
  setUserCredentials(userCredentials);
}
