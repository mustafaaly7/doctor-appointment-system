import Connectdb from "@/lib/connectDb"
import { UserModel } from "@/lib/models/userModel"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"


const RegisterUser = async (obj) => {
  await Connectdb()
  const user = await UserModel.findOne({ email: obj.email })
  if (user) {
    return user
  } else {
    let newUser = await UserModel(obj);
    newUser = await newUser.save();
    return newUser
  }
}



export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {

      if (account.provider === "google") {
        console.log("account=> ", account);
        console.log("profile => ", profile);
        
        
        const obj = {
        firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          picture: profile.picture,
        }
        const user = await RegisterUser(obj)
        return user // Do different verification for other providers that don't have `email_verified`
      }
    },
  }

})