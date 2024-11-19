import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Phone, DollarSign, GraduationCap, Hospital } from 'lucide-react'
import Image from "next/image"



export default function RequestCard( {requests} ) {
  return (
     
        <Card  className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Doctor Request</span>
              <Badge variant={requests.status === 'pending' ? 'secondary' : 'success'}>
                {requests.status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center gap-10 items-center">
            <Image src={requests.user.picture} width={50} height={50} />
            
            <h1>{requests?.user?.firstName + requests?.user?.lastName }</h1>
            </div>
            <p className="text-sm text-muted-foreground">{requests.bio}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{requests.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Hospital className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{requests.hospital}</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{requests.degree}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{requests.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{requests.fees}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{requests.appointmentTime}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline">Reject</Button>
            <Button>Approve</Button>
          </CardFooter>
        </Card>
    
  )
}