"use client";
import { Button, CircularProgress } from "@nextui-org/react";
import { usePreTrips } from "/lib/firestore/pretrips/read";
import { deletePreTrip } from "/lib/firestore/pretrips/write";
import { Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ListView() {
  const [pageLimit, setPageLimit] = useState(20);
  const [lastSnapDocList, setLastSnapDocList] = useState([]);

  const {
    data: pretrips,
    lastSnapDoc,
    error,
    isLoading,
  } = usePreTrips({
    pageLimit,
    lastSnapDoc: lastSnapDocList[lastSnapDocList.length - 1],
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLastSnapDocList([]);
  }, [pageLimit]);

  const handleNextPage = () => {
    let newStack = [...lastSnapDocList];
    newStack.push(lastSnapDoc);
    setLastSnapDocList(newStack);
  };

  const handlePrePage = () => {
    let newStack = [...lastSnapDocList];
    newStack.pop();
    setLastSnapDocList(newStack);
  };

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
      await deletePreTrip({ id });
      toast.success("Pre Trip Deleted Successfully");
      router.push("/admin/pretrips");
      router.refresh();
    } catch (error) {
      toast.error(error?.message);
    }
    setLoading(false); // Reset loading state after completion
  };

  const handleUpdate = (id) => {
    router.push(`/admin/pretrips/form?id=${id}`);
  };

  return (
    <div className="md:pr-5 md:px-0 px-5 w-full overflow-x-auto flex flex-col gap-3 rounded-xl flex-1">
      {!pretrips ? (
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
              <th className="border-y font-semibold bg-white px-3 py-2 text-center border-r rounded-lg">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {pretrips?.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border-y bg-white px-3 py-2 border-l rounded-lg text-center">
                    {index + lastSnapDocList.length * pageLimit + 1}
                  </td>
                  <td className="border-y bg-white px-3 py-2">
                    <div className="flex justify-center">
                      <Image
                        alt={item?.tripName}
                        priority={true}
                        width={1000}
                        height={1000}
                        className=" size-10 rounded-xl"
                        src={item?.featureImageUrl}
                      />
                    </div>
                  </td>
                  <td className="border-y whitespace-nowrap bg-white px-3 py-2 text-left">
                    {item?.tripName}
                  </td>
                  <td className="border-y bg-white px-3 py-2 text-left">
                    INR {item?.price}
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

      <div className="flex justify-between text-sm">
        <Button
          isDisabled={isLoading || lastSnapDocList.length === 0}
          onClick={handlePrePage}
          size="sm"
          variant="bordered"
        >
          Previous
        </Button>
        <select
          value={pageLimit}
          onChange={(e) => setPageLimit(e.target.value)}
          className=" px-5 rounded-xl bg-gray-100 border"
          name="perpage"
          id=""
        >
          <option value={3}>3 </option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={100}>100</option>
        </select>
        <Button
          isDisabled={isLoading || pretrips?.length === 0}
          onClick={handleNextPage}
          size="sm"
          variant="bordered"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
