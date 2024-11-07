import { columns } from "@/components/AppointmentTable/colums";
import { AppointmentTable } from "@/components/AppointmentTable/data-table";
import { appointments } from "@/lib/data";


export default function Appointments(){
    return(
<div className="container mx-auto font-bold px-6">
<h1 className="text-6xl my-6  text-center"> APPOINTMENTS</h1>
<AppointmentTable columns={columns} data={appointments} />
</div>



    )
}