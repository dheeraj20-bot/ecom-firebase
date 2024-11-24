"use client";
import { Button, CircularProgress } from "@nextui-org/react";
import { useProducts } from "/lib/firestore/products/read";
import { deleteProduct } from "/lib/firestore/products/write";
import { Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ListView() {
  const { data: products, error, isLoading } = useProducts();
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
    if (!confirm("Are you sure you want to delete this category?")) return;
    setLoading(true); // Set loading state before starting deletion
    try {
      await deleteProduct({ id });
      toast.success("Product Deleted Successfully");
      router.push("/admin/products");
      router.refresh();
    } catch (error) {
      toast.error(error?.message);
    }
    setLoading(false); // Reset loading state after completion
  };

  const handleUpdate = (id) => {
    router.push(`/admin/products/form?id=${id}`);
  };

  return (
    <div className="md:pr-5 md:px-0 px-5 flex flex-col gap-3 rounded-xl flex-1">
      {!products ? (
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
                Title
              </th>
              <th className="border-y font-semibold bg-white text-left px-3 py-2">
                Price
              </th>
              <th className="border-y font-semibold bg-white text-left px-3 py-2">
                Stock
              </th>
              <th className="border-y font-semibold bg-white text-left px-3 py-2">
                Orders
              </th>
              <th className="border-y font-semibold bg-white text-left px-3 py-2">
                Status
              </th>
              <th className="border-y font-semibold bg-white px-3 py-2 text-center border-r rounded-lg">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border-y bg-white px-3 py-2 border-l rounded-lg text-center">
                    {index + 1}
                  </td>
                  <td className="border-y bg-white px-3 py-2">
                    <div className="flex justify-center">
                      <Image
                        alt={item?.title}
                        width={1000}
                        height={1000}
                        className=" size-10 rounded-xl"
                        src={item?.featureImageUrl}
                      />
                    </div>
                  </td>
                  <td className="border-y bg-white px-3 py-2 text-left">
                    {item?.title}
                  </td>
                  <td className="border-y bg-white px-3 py-2 text-left">
                    <span className="line-through text-sm text-red-500 mr-2">
                      {" "}
                      INR {item?.price}
                    </span>{" "}
                    INR {item?.salePrice}
                  </td>
                  <td className="border-y bg-white px-3 py-2 text-left">
                    {item?.stock}
                  </td>
                  <td className="border-y bg-white px-3 py-2 text-left">
                    {item?.orders ?? 0}
                  </td>
                  <td className="border-y bg-white px-3 py-2 text-left">
                    {item?.stock - (item?.orders ?? 0) > 0 && (
                      <div className="text-green-500 px-2 text-xs py-1 bg-green-200 font-bold w-fit rounded-lg">
                        Available
                      </div>
                    )}
                    {item?.stock - (item?.orders ?? 0) <= 0 && (
                      <div className="text-red-500 text-xs px-2 py-1 bg-red-200 w-fit rounded-lg">
                        Out of Stock
                      </div>
                    )}
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
