import Avatarimg from "@/components/avatar";
import ProfileCard from "@/components/card";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Selectitems from "@/components/select";
import Select from "@/components/select";
import { Button } from "@/components/ui/button";
import { doctors, specialties } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  // on installation of next js when asked to add  turbo pack do yes cuz it makes it faster rn we making this project on next 14 instead of 15 cuz alot of libraries aint working simultaneouly fine

  return (
    <div className="container mx-auto">
      <Hero />


      <div className=" container flex justify-around my-8">
        <h1 className="text-3xl font-bold">Find Doctor by Speciality.</h1>
        <Link href={"/doctors"}>
          <Button className="text-2xl font-bold" > See All  </Button>
        </Link>
      </div>


      <div className="flex flex-col  items-center justify-between ">
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {
            doctors.slice(0, 8).map((data, ind) => (

              <div className="max-w-full w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={ind}>
                <div className="flex justify-end px-4 pt-4">

              
                </div>
                <Link href={`/doctors/${data.id}`}>
                <div className="flex flex-col items-center pb-10 gap-4">

                  <Avatarimg />
                  <h1 className="mb-1 text-4xl font-medium text-gray-900 dark:text-white">
                    {data.name}
                  </h1>
                  <span className="text-xl text-gray-500 dark:text-gray-400">
                    {data.specialty}
                  </span>
                  <div className="flex mt-4 md:mt-6">
                    <Button className="text-lg ">See More</Button>
                  </div>
                </div>
                </Link>
              </div>


            ))
          }
        </div>
      </div>
    </div>
  );
}
