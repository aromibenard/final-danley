import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CopyrightIcon } from "lucide-react"

export function ContactCard() {
  return (
    <Card className="w-[400px] h-[300px] p-4">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>We are available weekdays 9am-5pm</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="px-2">
          <div className="flex space-x-2">
            <p>Telephone:</p>
            <p>0700 356 545</p>
          </div>
          <div className="flex space-x-2">
            <p>Address:</p>
            <p>Nairobi West</p>
          </div>
          <div className="flex space-x-2">
            <p>Email:</p>
            <p>danleywaste@gmail.com</p>
          </div>
       </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className='flex italic text-xs text-gray-600'>
          <CopyrightIcon className="p-1"/>
          <p className="py-1">All rights reserved, D-Waste</p>
        </div>
      </CardFooter>
    </Card>
  )
}
