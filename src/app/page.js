import ProfileCard from "@/components/card";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Selectitems from "@/components/select";
import Select from "@/components/select";
import { Button } from "@/components/ui/button";
import { specialties } from "@/lib/specialities";

export default function Home() {
  // on installation of next js when asked to add  turbo pack do yes cuz it makes it faster rn we making this project on next 14 instead of 15 cuz alot of libraries aint working simultaneouly fine

  return (
    <div className="container mx-auto">
<Header/>
<Hero/>


<div className=" container flex justify-around my-4">
<h1 className="text-3xl font-bold">Find Doctor by Speciality.</h1>
<Selectitems items={specialties}/>
</div>

<ProfileCard/>

    </div>
  );
}
