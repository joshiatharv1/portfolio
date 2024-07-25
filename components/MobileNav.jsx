"use client"
import { SheetTrigger, Sheet, SheetContent } from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"

const links=[
    {
        name:'home',
        path:'/',
    },
    {
        name:'home',
        path:'/',
    },
    {
        name:'services',
        path:'/services',
    },
    {
        name:'resume',
        path:'/resume',
    },
    {
        name:'work',
        path:'/resume',
    },
    {
        name:'contact',
        path:'/contact',
    },
    
]

const MobileNav = () => {
    const pathname=usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-{32px} text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div>Logo</div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav