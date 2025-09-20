import { Secret } from "./../../../../node_modules/next-auth/src/jwt/types";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRECT!,
    }),
  ],
});

export { handler as GET, handler as POST };
