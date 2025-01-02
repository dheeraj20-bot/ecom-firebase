"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {useAuth} from "/contexts/AuthContext";


export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef(null);
  const {user} = useAuth();

  useEffect(() => {
    toggle();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutSide(event) {
      if (sidebarRef.current && !sidebarRef?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex relative text-black">
      <div
        ref={sidebarRef}
        className={`${
          isOpen ? "translate-x-0" : " -translate-x-[260px]"
        } transition-all ease-in-out duration-400 z-50 block md:hidden fixed`}
      >
        <Sidebar />
      </div>

      <div className="hidden md:block">
        <Sidebar />
      </div>
      <section className="flex-1 flex flex-col min-h-screen overflow-x-clip">
        <Header toggle={toggle} />
        <section className="flex-1 bg-gray-50 ">{children}</section>
      </section>
    </main>
  );
}
