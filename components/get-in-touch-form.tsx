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
  name: z.string().min(3, {
    message: "name must be at least 3 characters.",
  }),
  email: z.string().min(5,{
    message: "email must be at least 5 characters"
  }),
  phoneNumber: z.string().min(10,{
    message: "number must be at least 10 characters"
  }),
})

export function GetInTouchForm() {
    // 1. Defining form
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        phoneNumber: "",
      },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      console.log(values)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormDescription>
                This is your name.
              </FormDescription>
              <FormMessage />

              {/* email */}
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormDescription>
                This is your Email
              </FormDescription>
              <FormMessage />

              {/* number */}
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="number" {...field} />
              </FormControl>
              <FormDescription>
                This is your phone number.
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
