"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2,{
    message: "Username must be at least 2 characters.",
  }).max(50),
  bio: z.string().min(10,{
    message: "bio must be at least 10 characters.",
  }).max(150),
  email: z.string().min(10,{
    message: "enter Correct email address",
  }).max(50),
  days: z.array(z.string()).min(1, "Select at least one day."),
  location: z.string().min(2).max(50),
  hospital: z.string().min(2).max(50),
  degree: z.string().min(2).max(50),
  phone: z.string().min(2).max(50),
  fees: z.string().min(2).max(50),
  appointmentTime: z.date(),
  profileImg : z.string()
})



    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",

      },
    
    
    
    })

    function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    

      