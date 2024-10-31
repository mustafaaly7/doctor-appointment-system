import ProfileCard from "@/components/card";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Selectitems from "@/components/select";
import Select from "@/components/select";
import { Button } from "@/components/ui/button";
import { doctors, specialties } from "@/lib/data";

export default function Home() {
  // on installation of next js when asked to add  turbo pack do yes cuz it makes it faster rn we making this project on next 14 instead of 15 cuz alot of libraries aint working simultaneouly fine

  return (
    <div className="container mx-auto">
<Header/>
<Hero/>


<div className=" container flex justify-around my-8">
<h1 className="text-3xl font-bold">Find Doctor by Speciality.</h1>
{/* <Selectitems items={specialties}/> */}
<Button className="text-2xl font-bold" > See All  </Button>
</div>


<div className="flex flex-col  items-center justify-between ">
  <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {
            doctors.slice(0,8).map((data, ind) => (
                <ProfileCard doctor={data} key={ind} />
                
            ))
        }
        </div>
    </div>
    </div>
  );
}
