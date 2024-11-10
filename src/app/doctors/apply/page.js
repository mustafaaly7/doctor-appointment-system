import { ApplyForm } from "@/components/applyForm";
import { auth } from "../../../../auth";


export default async function ApplyasDoc(){
const session =await auth()
return(
<div className="container">





<ApplyForm session={session}/>
</div>


)


}