import Header from "@/components/header";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  // on installation of next js when asked to add  turbo pack do yes cuz it makes it faster rn we making this project on next 14 instead of 15 cuz alot of libraries aint working simultaneouly fine

  return (
    <div className="container mx-auto">
<Header/>
<Hero/>




    </div>
  );
}
