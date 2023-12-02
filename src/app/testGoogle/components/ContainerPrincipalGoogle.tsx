"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import { NextAuthOptions, Session, getServerSession } from "next-auth";
import { getUser } from "../../../../utils/user";
import ContainerSignInGoogle from "./ContainerSignInGoogle";
import SignInButtonGoogle from "./SignInButtonGoogle";
import { Flex } from "@chakra-ui/react";
import {
  getUserCredentials,
  setUserCredentials,
} from "../../../../utils/userCredentials";


function ContainerPrincipal() {
  //const session = await getAuthSession();
  const [session, setSession] = useState<any>(null);
  const [providers, setProviders] = useState<any>(null);
  const [csrfToken, setToken] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const sessionData = await getSession();

      //console.log("csrfToken", csrfToken);
      const providers = await getProviders();
      //console.log("Providers", providers);
      const csrfToken = await getCsrfToken();
      setSession(sessionData);
      setProviders(providers);
      setToken(csrfToken);
    };

    fetchData();
  }, []);

  if (session?.user) {
    // const sessionRetrieve = JSON.stringify(session, null, 2);
    //const sessionObject = JSON.parse(sessionRetrieve);
    //const user = sessionObject.user || {};
    setUserCredentials({
      userId: session?.user.id,
      email: session.user.email || null,
      username: session.user.name || null,
      provider: providers?.google.name || "",
      profileImage: session.user.image || null,
      accessToken: session.user.jwt,
    });

    const userCredentialRetrieve = getUserCredentials();
    return (
      <>
        <Flex direction={"column"} height={"100vh"} background={"black"}>
          <ContainerSignInGoogle
            userCredentialRetrieve={userCredentialRetrieve}
          />

          <p style={{ background: "red" }}>
            {JSON.stringify(session.user, null, 2)}
          </p>
        </Flex>
      </>
    );
  } else {
    return (
      <>
        <SignInButtonGoogle />
      </>
    );
  }
}

export default ContainerPrincipal;
