import { redirect } from "next/navigation"
import { auth } from "../../../../auth"
import { GetRequest } from "@/actions/request"
import RequestCard from "@/components/requestCard"


export default async function RequestPage(){
const session = await auth()
if(!session || session.user.role != "admin") redirect("/")
const requests = await GetRequest()
console.log("requests =>",requests);

return(
    <div>
        <h1 className="text-center font-bold text-xl my-3"> {"Doctor's"} Requests</h1>
    <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {requests?.Request?.map((req,ind)=>(
            <RequestCard requests ={req} key={ind} />
        ))}
    </div>

    </div>
)

}