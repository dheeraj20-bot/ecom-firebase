import Link from "next/link";

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

  return (
    <nav className="py-3 px-20 border-b flex items-center justify-between">
      <Link href="/">
        <img className=" h-10" src="/logo.svg" alt="logo" />
      </Link>

      <div className="flex items-center gap-4 font-semibold">
        {menulist.map((item) => (
          <Link
            key={item?.name}
            className="hover:text-yellow-500 transition-colors duration-200"
            href={item?.link}
          >
            <button>{item?.name}</button>
          </Link>
        ))}
      </div>

      <Link href="/login">
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-yellow-400 px-6 font-medium  duration-500">
          <div className="translate-y-0 transition group-hover:-translate-y-[150%]">
            Login
          </div>
          <div className="absolute translate-y-[150%] transition group-hover:translate-y-0">
            Login
          </div>
        </button>
      </Link>
    </nav>
  );
}
