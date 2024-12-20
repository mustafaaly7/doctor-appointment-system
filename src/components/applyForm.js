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
import { Textarea } from "@/components/ui/textarea" // for bio field
import { useToast } from "@/hooks/use-toast"
import { AddRequest } from "@/actions/request"

// Define the form schema
const formSchema = z.object({
  bio: z.string().min(10, { message: "Bio must be at least 10 characters." }).max(150),
  // days: z.array(z.string()).min(1, "Select at least one day."),
  location: z.string().min(2).max(50),
  hospital: z.string().min(2).max(50),
  degree: z.string().min(2).max(50),
  phone: z.string().min(10).max(15),
  fees: z.string().min(1),
  appointmentTime: z.string().min(1, "Choose an appointment time."),
  // profileImg: z.string().url().optional()
})

// Main ApplyForm component
export function ApplyForm({session}) {
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      // days: [],
      location: "",
      hospital: "",
      degree: "",
      phone: "",
      fees: "",
      appointmentTime: "",
      // profileImg: ""
    },
  })

  const onSubmit = async (values) => {
    values.user=session.user._id
    
   const response= await AddRequest(values)
      console.log("response =>" ,response);
      
      if(response.error){
        form.reset()
        toast({
            title: "Error",
            description: response.msg,
          })
      }else{
        form.reset()
        toast({
          title: "Your Application has been Submitted",
          description: "You'll be notified via Email in 3 working days ",
        })

      }

      console.log(values);
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Apply Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
         

          {/* Bio */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us about yourself" {...field} className="text-base p-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         

          {/* Days */}
          {/* <FormField
            control={form.control}
            name="days"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Available Days</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Monday, Wednesday, Friday" {...field} className="text-base p-4" />
                </FormControl>
                <FormDescription className="text-sm text-gray-500">Separate days with commas</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* Location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Location</FormLabel>
                <FormControl>
                  <Input placeholder="City or area" {...field} className="text-base p-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Hospital */}
          <FormField
            control={form.control}
            name="hospital"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Hospital</FormLabel>
                <FormControl>
                  <Input placeholder="Hospital name" {...field} className="text-base p-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Degree */}
          <FormField
            control={form.control}
            name="degree"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Degree</FormLabel>
                <FormControl>
                  <Input placeholder="Degree" {...field} className="text-base p-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Phone number" type="tel" {...field} className="text-base p-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Fees */}
          <FormField
            control={form.control}
            name="fees"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Fees</FormLabel>
                <FormControl>
                  <Input placeholder="e.g , $100" {...field} className="text-base p-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Appointment Time */}
          <FormField
            control={form.control}
            name="appointmentTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Appointment Time</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 3:00 PM" type="time" {...field} className="text-base p-4" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Profile Image */}
          {/* <FormField
            control={form.control}
            name="profileImg"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-medium text-gray-700">Profile Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="Image URL" {...field} className="text-base p-4" />
                  <ImgUpload {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* Submit Button */}
          <Button type="submit" className="w-full text-lg py-3 mt-4">
            {form.formState.isSubmitting ? "Loading" : "Submit"}
            </Button>
        </form>
      </Form>
    </div>
  )
}
