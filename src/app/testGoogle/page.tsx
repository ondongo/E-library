import React from "react";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth";

import SignInButtonGoogle from "./components/SignInButtonGoogle";
import { getUser } from "../../../utils/user";
import ContainerPrincipal from "./components/ContainerPrincipalGoogle";
import { Box } from "@chakra-ui/react";

 function IndexPage() {
  return (
    <Box
    style={{
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      marginBottom: 24,
      flexDirection: "column",
    }}
  >
      <SignInButtonGoogle />
    </Box>
  );
}

export default IndexPage;
