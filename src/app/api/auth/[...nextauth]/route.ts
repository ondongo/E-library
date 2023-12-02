import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

/*===========================================================
Define Google env variable
============================================================*/
const googleId =
  "675379939665-11mdjvmu9a7u3niha6tg3aa3r57omgl1.apps.googleusercontent.com";
//process.env.GOOGLE_CLIENT_ID;
const googleSecret = "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";
//process.env.GOOGLE_CLIENT_SECRET;

if (!googleId || !googleSecret) {
  throw new Error("Missing googleId or googleSecret");
}

/*===========================================================
Manage authenfication with nextAuth , Strapi and google
============================================================*/
const authconfig = NextAuth({
  providers: [
    GoogleProvider({
      clientId: googleId as string,
      clientSecret: googleSecret as string,
    }),
    //Other provider for other authentification
  ],

  callbacks: {
    async session({ user, session, token }) {
      session.user = token as any;

      if (session?.user && user) {
        session.user.id = user ? user.id : "";
      }

      return Promise.resolve(session);
    },

    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn && account) {
        const url = new URL(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${account.provider}/callback`
        );
        url.searchParams.set("access_token", account.access_token!);
        const response = await fetch(url.toString());
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id || "";
      }
      return Promise.resolve(token);
    },
  },

  secret: process.env.NEXTAUTH_SECRET as string,
});

export { authconfig as GET, authconfig as POST };
