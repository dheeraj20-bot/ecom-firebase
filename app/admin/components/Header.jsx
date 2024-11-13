"use client"

import { Menu, User } from "lucide-react";


export default function Header({ toggle }) {
    return <section className="flex gap-3 items-centerbg-white border-b px-4 py-4">
        <div className="flex md:hidden">
            <button onClick={toggle}>
                <Menu />
            </button>
        </div>
          <User className="size-8"/>
    </section>;
  }