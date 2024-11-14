import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import { GetRequest } from "@/actions/request"


export default async function RequestPage(){
const session = await auth()
if(!session || session.user.role != "admin") redirect("/")
const requests = await GetRequest()
console.log("requests =>",requests);

return(
    <div>
        <h1>REQUESTS</h1>
    </div>
)

}