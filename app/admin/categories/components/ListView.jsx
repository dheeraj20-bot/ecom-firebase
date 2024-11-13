"use client";
import { Button, CircularProgress } from "@nextui-org/react";
import { useCategories } from "/lib/firestore/categories/read";
import { deleteCategory } from "/lib/firestore/categories/write";
import { Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";

export default function ListView() {
  const { data: categories, error, isLoading } = useCategories();
  const [loading,setLoading] = useState(false)

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
    setLoading(true); // Set loading state before starting deletion
    try {
      await deleteCategory({ id });
      toast.success("Category Deleted Successfully");
    } catch (error) {
      toast.error(error?.message);
    }
    setLoading(false); // Reset loading state after completion
  };
  
  return (
    <div className="px-5 flex flex-col gap-3 rounded-xl flex-1">
      <h1 className="text-xl font-semibold">Categories</h1>

      {!categories? (<p>There is no Data</p>):
       (<table className="border-separate  border-spacing-y-3">
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
            {categories.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border-y bg-white px-3 py-2 border-l rounded-lg text-center">
                    {index + 1}
                  </td>
                  <td className="border-y bg-white px-3 py-2">
                    <div className="flex justify-center">
                      <Image alt={item?.name} width={1000} height={1000} className=" size-10 rounded-xl" src={item?.image}  />
                    </div>
                  </td>
                  <td className="border-y bg-white px-3 py-2 text-left">
                    {item?.name}
                  </td>
                  <td className="border-y bg-white px-3 py-2 border-r rounded-r-lg">
                    <div className="flex gap-2 justify-center items-center">
                      <Button isIconOnly size="md">
                        <Edit2 size={13} /> {"*"}
                      </Button>
                      <Button   onClick={() => handelDelete(item?.id)}  isLoading={loading} isDisabled={loading} color="danger" isIconOnly size="md">
                        <Trash2 size={13} /> {"*"}
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>)}
    </div>
  );
}
