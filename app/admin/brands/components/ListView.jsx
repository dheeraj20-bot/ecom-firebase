"use client";
import { Button, CircularProgress } from "@nextui-org/react";
import { useBrands } from "/lib/firestore/brands/read";
import { deleteBrand } from "/lib/firestore/brands/write";
import { Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ListView() {
  const { data: brands, error, isLoading } = useBrands();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }

  const handelDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this brand?")) return;
    setLoading(true); // Set loading state before starting deletion
    try {
      await deleteBrand({ id });
      toast.success("Brand Deleted Successfully");
      router.push("/admin/brands");
      router.refresh();
    } catch (error) {
      toast.error(error?.message);
    }
    setLoading(false); // Reset loading state after completion
  };

  const handleUpdate = (id) => {
    router.push(`/admin/brands?id=${id}`);
  };

  return (
    <div className="md:pr-5 md:px-0 px-5 flex flex-col gap-3 rounded-xl flex-1">
      <h1 className="text-xl font-semibold">Brands</h1>

      {!brands ? (
        <p>There is no Data</p>
      ) : (
        <table className="border-separate  border-spacing-y-3">
          <thead>
            <tr>
              <th className="border-y font-semibold bg-white px-3 py-2 border-l rounded-lg">
                SN
              </th>
              <th className="border-y font-semibold bg-white px-3 py-2">
                Image
              </th>
              <th className="border-y font-semibold bg-white text-left px-3 py-2">
                Name
              </th>
              <th className="border-y font-semibold bg-white px-3 py-2 text-center border-r rounded-lg">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {brands.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border-y bg-white px-3 py-2 border-l rounded-lg text-center">
                    {index + 1}
                  </td>
                  <td className="border-y bg-white px-3 py-2">
                    <div className="flex justify-center">
                      <Image
                        alt={item?.name}
                        width={1000}
                        height={1000}
                        className=" size-10 rounded-xl"
                        src={item?.image}
                      />
                    </div>
                  </td>
                  <td className="border-y bg-white px-3 py-2 text-left">
                    {item?.name}
                  </td>
                  <td className="border-y bg-white px-3 py-2 border-r rounded-r-lg">
                    <div className="flex gap-2 justify-center items-center">
                      <Button
                        isIconOnly
                        isDisabled={loading}
                        onClick={() => handleUpdate(item?.id)}
                        size="md"
                      >
                        <Edit2 size={13} /> {"*"}
                      </Button>
                      <Button
                        onClick={() => handelDelete(item?.id)}
                        isLoading={loading}
                        isDisabled={loading}
                        color="danger"
                        isIconOnly
                        size="md"
                      >
                        <Trash2 size={13} /> {"*"}
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}