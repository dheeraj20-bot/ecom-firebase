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
        <button className="bg-yellow-400 px-5 py-2 font-bold text-white rounded-full">
          Login
        </button>
      </Link>
    </nav>
  );
}
