'use client'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
 
export default function Page() {
  // Destructure the 'toast' function from useToast hook
  const { toast } = useToast()

  // Define the handleClick function to show the toast message
  const handleClick = () => {
    toast({
      description: "Your message has been sent.",
    })
  }

  return (
    <div>
      <div className="grid mt-24 w-full text-2xl h-16 gap-1.5">
        {/* Textarea component for typing the message */}
        <Textarea className='text-black text-5xl  bg-blue-100' placeholder="Type your message here" id="message-2" />
        
        <p className="text-lg text-muted-foreground">
          Type your message here. Your message will be copied to the support team.
        </p>
        
        {/* Button to trigger the toast notification */}
        <Button
          className="text-white text-xl bg-blue-950 m-60"
          variant="secondary"
          onClick={handleClick}  // Handle button click event
        >
          SEND YOUR MESSAGE
        </Button>
      </div>

      {/* Toaster container for rendering toast notifications */}
      <Toaster />
    </div>
  )
}
