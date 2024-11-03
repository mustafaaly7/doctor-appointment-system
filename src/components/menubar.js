
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { auth, signOut } from "../../auth"
import Image from "next/image"
import { Avatar } from "./ui/avatar"

export default async function MenubarHeader() {
  const session = await auth()
  return (

    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          {/* <Image
            className="border-none rounded"
            height={160}
            width={30}
            src={session?.user?.image}
          /> */}
          <Avatar />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>My Profile</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            My Appointments
          </MenubarItem>
          <MenubarSeparator />

          <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
           
            <button type="submit" className=" relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              Signout
            </button>
          </form>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>


  )
}