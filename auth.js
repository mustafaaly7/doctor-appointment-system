import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {

      if (account.provider === "google") {
        console.log("account=> ",account);
        console.log("profile => ",profile);

        
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },}

})