"use client";
import { useEffect, useState } from "react";
import BasicDetails from "./components/BasicDetails";
import Images from "./components/Images";
import Description from "./components/Description";
import { Button } from "@nextui-org/react";
import { createNewPreTrip ,updatePreTrip } from "/lib/firestore/pretrips/write";
import { getProduct } from "/lib/firestore/pretrips/read_server";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const [data, setData] = useState(null);
  const [featureImage, setFeatureImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const handleData = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleCreate = async () => {
    setLoading(true);
    try {
      await createNewPreTrip({ data, featureImage, imageList });
      setData(null);

      setImageList([]);
      setFeatureImage(null);
      router.push("/admin/pretrips");
      router.refresh();
      toast.success("Product Created Successfully");
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.message);
    }
    setLoading(false);
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await updatePreTrip({ data, featureImage, imageList });
      setData(null);

      setImageList([]);
      setFeatureImage(null);
      router.push("/admin/pretrips");
      router.refresh();
      toast.success("Product Update Successfully");
    } catch (error) {
      console.log(error?.message);
      toast.error(error?.message);
    }
    setLoading(false);
  };

  const fetchData = async () => {
    try {
      const res = await getProduct({ id })
      if(!res){
         throw new Error("Product Not Found")
      } else {
         setData(res);
      }
      console.log(res);
      
    } catch (error) {
      toast.error(error?.message);
    }
  };

  useEffect(()=>{
    if(id){
      fetchData();
    }
  },[id])
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(id){
          handleUpdate();
        } else {
          handleCreate();
        }
      }}
      className="p-5 flex flex-col gap-4"
    >
      <div className="flex justify-between w-full items-center">
        <h1 className=" font-semibold">{id ? "Edit" : "Create"} New Trip</h1>
        <Button
          isLoading={loading}
          isDisabled={loading}
          type="submit"
          className="bg-yellow-500/90 text-white"
        >
         {id ? "Update" : "Create"}
        </Button>
      </div>

      <div className="flex  gap-5 flex-col md:flex-row">
        <div className="flex-1">
          <BasicDetails data={data} handleData={handleData} />
        </div>

        <div className="flex-1 flex flex-col gap-5 h-full">
          <Images
            data={data}
            handleData={handleData}
            featureImage={featureImage}
            setFeatureImage={setFeatureImage}
            imageList={imageList}
            setImageList={setImageList}
          />
          <Description data={data} handleData={handleData} />
        </div>
      </div>
    </form>
  );
}
