import { Button } from "@nextui-org/react";
import {
  CalendarArrowUp,
  CarFront,
  Layers2,
  Layers3,
  LayoutDashboard,
  LibraryBig,
  LogOut,
  ShieldCheck,
 
  Star,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "/lib/firebase";

export default function Sidebar() {
  const menulist = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard className="size-5" />,
    },
    {
      name: "Pre Trips",
      link: "/admin/pretrips",
      icon: <CarFront className="size-5" />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <Layers2 className="size-5" />,
    },
    {
      name: "States",
      link: "/admin/states",
      icon: <Layers3 className="size-5" />,
    },
    {
      name: "Bookings",
      link: "/admin/orders",
      icon: <CalendarArrowUp className="size-5" />,
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon: <User className="size-5" />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="size-5" />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <LibraryBig className="size-5" />,
    },
    {
      name: "Admins",
      link: "/admin/admins",
      icon: <ShieldCheck className="size-5 " />,
    },
  ];
  return (
    <section className="bg-white border-r sticky top-0 flex flex-col  gap-10 px-5 py-3 h-screen overflow-hidden w-[200px]">
      <Link href="/" className="flex justify-center py-1">
        <img src="/logo.svg" alt="" className="h-10" />
      </Link>
      <ul className="flex-1 h-full overflow-y-auto flex flex-col gap-4">
        {menulist.map((item) => (
          <Tab key={item.name} item={item} />
        ))}
      </ul>
      <Button
        onClick={async () => {
          try {
            await toast.promise(signOut(auth), {
              error: (e) => e?.message,
              loading: "Loading",
              success: "Logout Successfully",
            });
          } catch (error) {
            toast.error(error.message);
          }
        }}
        className="flex gap-2 items-center px-3 py-1 hover:bg-yellow-700 transition-colors duration-300 hover:text-white rounded-xl"
      >
        <LogOut className="size-5" />
        Logout
      </Button>
    </section>
  );
}

function Tab({ item }) {
  const pathname = usePathname();
  const isSelected = pathname === item.link;

  return (
    <Link className="" href={item.link} key={item.name}>
      <li
        className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold 
     ease-soft-spring transition-all duration-300 
        hover:shadow-md hover:text-white hover:bg-yellow-400 ${
          isSelected && "bg-yellow-400 text-white"
        }`}
      >
        {item.icon}
        {item.name}
      </li>
    </Link>
  );
}
