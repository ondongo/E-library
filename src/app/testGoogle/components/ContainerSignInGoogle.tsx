"use client";
import React, { useCallback, useEffect, useState } from "react";
import { storeUser } from "../../../../utils/user";
import { UserCredentials } from "../../../../utils/userCredentials";

type UserRetrieve = {
  userId: string;
  email: string | null;
  username: string | null;
  profileImage: string | null;
};

function ContainerSignInGoogle(userCredentialRetrieve: any) {
  const [userCredential, setUserCredential] = useState<UserCredentials | null>(
    null
  );

  const updateUserCredentials = useCallback(async () => {
    //Because Json format {{}}
    const userCredentials = userCredentialRetrieve;

    setUserCredential(userCredentials);
    if (userCredential) {
      const userRetrieve: UserRetrieve = {
        userId: userCredential.userId,
        email: userCredential.email,
        username: userCredential.username,
        profileImage: userCredential.profileImage,
      };
      await storeUser({
        jwt: userCredential.accessToken,
        user: userRetrieve,
        provider: userCredential.provider,
      });
    }
  }, [userCredential, userCredentialRetrieve]);

  useEffect(() => {
    console.log("UseEffect >>>>>>>>>");
    updateUserCredentials();
  }, [updateUserCredentials]);

  return (
    <div>
      <p style={{ background: "teal" }}>
        Test Here User Credentials: {JSON.stringify(userCredential)}
      </p>
    </div>
  );
}

export default ContainerSignInGoogle;
