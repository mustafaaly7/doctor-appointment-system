import { Button } from "@/components/ui/button";
import { auth, signIn } from "../../../auth";


export default async function Signin(){
const session = await auth()
console.log(session);

    return(
        <div className="min-h-screen flex container justify-center items-center  text-center mx-auto">
              <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
<Button variant="outline" className="text-3xl" type="submit">Continue With Google </Button>
      {/* <button type="submit">Signin with Google</button> */}
    </form>



        </div>
    )
}