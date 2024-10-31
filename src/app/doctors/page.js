import ProfileCard from "@/components/card";
import Selectitems from "@/components/select";
import { doctors, specialties } from "@/lib/data";



export default function DoctorsPage(){

return(
    <div>
<div className=" my-6 flex justify-around">
<h1 className="text-4xl font-bold "> All The Doctors You need </h1>
<Selectitems items={specialties}/>

</div>
<div className="flex flex-col  items-center justify-between ">
  <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {
            doctors.map((data, ind) => (
                <ProfileCard doctor={data} key={ind} />
                
            ))
        }
        </div>
    </div>


    </div>
)

}