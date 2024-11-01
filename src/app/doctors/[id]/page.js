import Doctordetail from "@/components/doctorDetail"
import { doctors } from "@/lib/data"


export default function Doctordetails({params}){
const doctor =  doctors.find((data)=> data.id == params.id)



    return(
<>
<Doctordetail doctor={doctor}/>
</>



    )
} 