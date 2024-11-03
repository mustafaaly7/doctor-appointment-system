import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export default function Avatarimg({src = "https://github.com/shadcn.png"}){
    return(

<Avatar>
  <AvatarImage src={src} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    )
}
