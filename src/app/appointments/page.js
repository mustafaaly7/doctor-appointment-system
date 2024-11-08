import { columns } from "@/components/AppointmentTable/colums";
import { AppointmentTable } from "@/components/AppointmentTable/data-table";
import { appointments } from "@/lib/data";


export default function Appointments(){
    return(
<div className="container mx-auto font-bold px-6">
    <div className="my-10">
<AppointmentTable columns={columns} data={appointments} />
</div>
</div>



    )
}