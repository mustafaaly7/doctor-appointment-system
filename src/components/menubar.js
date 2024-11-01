
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { Avatar } from "./ui/avatar"
import Avatarimg from "./avatar"
  
export default function MenubarHeader(){
    return(

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <Avatarimg />
    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>My Profile</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        My Appointments 
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Signout</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>


    )
}