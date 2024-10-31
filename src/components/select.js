import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  export default function Selectitems({items}){
    return(
<>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select Category" className="placeholder:text-lg" />
  </SelectTrigger>
  <SelectContent>
    {items.map((data,ind)=>(

    <SelectItem value="data" key={ind} className="text-bold text-lg">{data}</SelectItem>
    ))}
  </SelectContent>
</Select>



</>

    )
  }