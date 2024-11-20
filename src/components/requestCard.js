'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Phone, DollarSign, GraduationCap, Hospital, Check, X } from 'lucide-react'
import Image from "next/image"
import DoctordetailSheet from "./doctorDetailSheet"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { UpdateRequest } from '@/actions/request'

export default function RequestCard({ requests,  }) {
  const [isApproveDialogOpen, setIsApproveDialogOpen] = useState(false)
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false)

  async function handleStatusChange  (status,id)  {
    // onStatusChange(requests.id, status)
    await UpdateRequest(id,status)
    console.log(status,id);
    
    setIsApproveDialogOpen(false)
    setIsRejectDialogOpen(false)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Doctor Request</span>
          <Badge variant={requests.status}>
            {requests.status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center gap-10 items-center">
          <Image src={requests.user.picture} alt={`${requests.user.firstName} ${requests.user.lastName}`} width={50} height={50} />
          <h1 className="text-bold text-xl">{requests.user.firstName} {requests.user.lastName}</h1>
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
      <CardFooter className="flex justify-between space-x-4">
        <DoctordetailSheet doctor={requests} />
        <AlertDialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="text-destructive hover:text-destructive hover:bg-destructive/10">
              <X className="w-4 h-4 mr-2" />
              Reject
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to reject this request?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. The doctor will be notified of the rejection.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleStatusChange('rejected',requests._id)}>Confirm Reject</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog open={isApproveDialogOpen} onOpenChange={setIsApproveDialogOpen}>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="text-green-600 hover:text-green-600 hover:bg-green-100">
              <Check className="w-4 h-4 mr-2" />
              Approve
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to approve this request?</AlertDialogTitle>
              <AlertDialogDescription>
                This action will add the doctor to your network. They will be notified of the approval.
              </AlertDialogDescription>
            </AlertDialogHeader>
            
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleStatusChange('accepted',requests._id)}>Confirm Approve</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  )
}