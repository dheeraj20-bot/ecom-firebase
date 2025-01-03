'use client'

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

const menulist = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About us",
    link: "/about-us",
  },
  {
    name: "Contact us",
    link: "/contact-us",
  },
];

export default function Header() {
  // const {user} = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  // return (
  //   <nav className="py-3 px-20 border-b flex items-center justify-between">
  //     <Link href="/">
  //       <img className=" h-10" src="/logo.svg" alt="logo" />
  //     </Link>

  //     <div className="flex items-center gap-4 font-semibold">
  //       {menulist.map((item) => (
  //         <Link
  //           key={item?.name}
  //           className="hover:text-yellow-500 transition-colors duration-200"
  //           href={item?.link}
  //         >
  //           <button>{item?.name}</button>
  //         </Link>
  //       ))}
  //     </div>

  //     <Link href="/login">
  //       <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-yellow-400 px-6 font-medium  duration-500">
  //         <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
  //           Login
  //         </div>
  //         <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
  //           Login
  //         </div>
  //       </button>
  //     </Link>
  //   </nav>
  // );

  return (
    <Navbar  isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <img className=" h-10" src="/logo.svg" alt="logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/about-us">
           About us
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link aria-current="page" href="#">
              Reserve Cab
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link}  className="bg-yellow-500 text-white" href="/login" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
