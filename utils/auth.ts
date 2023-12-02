/* import { authconfig } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";

export const getAuthSession = async (): Promise<Session | null> => {
  const session = (await getServerSession(authconfig)) as Session | null;

  return session;
};

export const getRequiredAuthSession = async () => {
  const session = await getAuthSession();

  if (!session?.user) {
    throw new Error("session not found");
  }

  return session;
};
 */

import { getSession, signIn } from "next-auth/react";
import { UserCredentials } from "./userCredentials";
import { storeUser } from "./user";

export async function handleLoginGoogle() {
  try {
    await signIn();
  } catch (error) {
    console.error("Erreur de connexion Google", error);
    throw error;
  }
}

export async function handleGoogleCallback(sessionData: any) {
  try {
    if (sessionData?.user) {
      const userCredentials: UserCredentials = {
        userId: sessionData?.user.id,
        email: sessionData?.user.email || null,
        username: sessionData?.user.name || null,
        provider: "Google",
        profileImage: sessionData.user.picture || null,
        accessToken: sessionData.user.jwt,
      };

      await storeUser({
        jwt: userCredentials.accessToken,
        user: userCredentials,
        provider: "Google",
      });
      return sessionData.user;
    }
  } catch (error) {
    throw error;
  }
}
