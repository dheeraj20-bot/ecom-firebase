import Link from "next/link";
import ListView from "./components/ListView";

export default function Page() {
  return (
    <main className="p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Pre Planned Trips</h1>
        <Link href="/admin/pretrips/form">
          <button className="bg-[#313131] text-white text-sm px-4 py-2 rounded-lg">
            Create
          </button>
        </Link>
      </div>
      <ListView/>
    </main>
  );
}
