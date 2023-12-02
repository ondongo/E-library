"use client";
import React, { useEffect, useState } from "react";
import { Button, Box } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { getSession, signIn, signOut } from "next-auth/react";
import {
  handleGoogleCallback,
  handleLoginGoogle,
} from "../../../../utils/auth";
import { useRouter } from "next/navigation";
const SignInButtonGoogle = () => {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const currentSession = await getSession();
        setSession(currentSession);

        if (currentSession) {
          const user = await handleGoogleCallback(currentSession);

          if (user) {
            console.log("useEffect", currentSession);
            const preLoginUrl = localStorage.getItem("preLoginUrl");

            if (preLoginUrl) {
              localStorage.removeItem("preLoginUrl");
              router.push(preLoginUrl);
            } else {
              router.push(`/`);
            }
          } else {
            console.log("la connexion a été annulée ou a échoué");
          }
        }
      } catch (error) {
        // Gérez les erreurs, par exemple, affichez un message d'erreur
      }
    };

    handleCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: 2,
      }}
    >
      <div>
        <p style={{ background: "teal" }}>
          Test Here User Credentials: {JSON.stringify(session)}
        </p>
      </div>
      <Button
        style={{
          width: "360px",
          display: "flex",

          gap: "8px",
          flexDirection: "row",
          borderRadius: "28px",
          background: "#FFF",
          paddingTop: "8px",
          paddingBottom: "8px",
          fontSize: "14px",
          /* googleshadow1 */
          boxShadow:
            "0px 1px 1px 0px rgba(0, 0, 0, 0.17), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)",
          color: "rgba(0, 0, 0, 0.54)",
        }}
        onClick={handleLoginGoogle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456Z"
            fill="#4285F4"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z"
            fill="#34A853"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z"
            fill="#FBBC05"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
            fill="#EA4335"
          />
        </svg>
        Sign in with Google
      </Button>
    </Box>
  );
};

export default SignInButtonGoogle;
