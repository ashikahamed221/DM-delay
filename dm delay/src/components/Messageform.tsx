import React, { useState } from "react"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
const Messageform = () => {
const[message,setmessage] = useState<String>("");
const[delay,setdelay] = useState<number>(10);
const[isSending,setisSending] = useState<boolean>(false);
const[Timerid,setTimerid] = useState<NodeJS.Timeout | null>(null);
const[sentmessage,setsentmessage] = useState<String>("");

const handleSend = () => {
    setisSending(true);

    const id = setTimeout(() => {
        setsentmessage(message);
        setisSending(false);
    },delay * 1000)

    setTimerid(id)
}
const handlecancel = () => {
    if(Timerid) clearTimeout(Timerid)
        setisSending(false);
}

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg showdow-sm bg-white space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">DM delay button</h2>

      <Textarea
       placeholder="Type your message"
       value={message}
       onChange={(e) => setmessage(e.target.value)}/>

      <Input
        type="number"
        placeholder="delay in seconds"
        value={delay}
        onChange={(e) => setdelay(Number(e.target.value))}
        disabled={isSending}/>

     {!isSending ? (
         <Button className="w-full" onClick={handleSend}>
        Sent with delay
      </Button>
  ):(
     <Button className="w-full" variant="destructive" onClick={handlecancel}>
        cancel sending
      </Button>
  )}
  {sentmessage && (
    <div className="bg-green-100 border rounded p-3 text-green-900">
        <p className="font-semibold"></p>
        <p>{sentmessage}</p>
    </div>
  )}
    </div>
  )
}

export default Messageform
