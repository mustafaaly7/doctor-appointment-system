import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Clock, DollarSign, Eye, GraduationCap, Hospital, MapPin, Phone } from "lucide-react"
import { Avatar } from "./ui/avatar"
import Image from "next/image"

  export default function DoctordetailSheet({doctor}){
    
    return(
<Sheet>
  <SheetTrigger><Eye/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Doctor Detail </SheetTitle>
      <SheetDescription>
        <div className="my-5 flex flex-col gap-5">
        <Avatar>
          <Image src={doctor.user.picture} fill={true} />
        </Avatar>
        <h1>Name : {doctor.user.firstName +" "+ doctor.user.lastName}</h1>
        <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{doctor.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Hospital className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{doctor.hospital}</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{doctor.degree}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{doctor.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{doctor.fees}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{doctor.appointmentTime}</span>
              </div>
            </div>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>



    )
  }