export async function storeUser({ jwt, user, provider }: any) {
  const providerUsed = !!user?.provider ? "strapi" : provider;

  let profileImage;

  if (providerUsed === "google" && user) {
    profileImage = user.profileImage;
  } else {
    profileImage = null;
  }
  const data = {
    accessToken: jwt,
    userId: user?.id,
    email: user?.email,
    username: user?.username,
    provider: providerUsed,
    type: user?.type,
    profileImage: profileImage,
  };

  const userCredentialsData = JSON.stringify(data);
  console.log("LocalStorage>>>>>>>>>>>>>", userCredentialsData);
  // Vérifiez si localStorage est disponible avant de l'utiliser
  Promise.resolve().then(() => {
    localStorage.setItem("user.credentials", userCredentialsData);
  });
}

export async function getUser() {
  if (typeof window !== "undefined") {
    const storedCredentials = localStorage.getItem("user.credentials");

    if (storedCredentials) {
      return JSON.parse(storedCredentials);
    }
  }

  return null;
}

export function deleteUser() {
  localStorage.removeItem("user.credentials");
}
