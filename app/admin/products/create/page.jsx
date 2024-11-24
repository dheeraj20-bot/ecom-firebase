"use client";

import { useState } from "react";
import BasicDetails from "./components/BasicDetails";
import Images from "./components/Images";
import Description from "./components/Description";
import { Button } from "@nextui-org/react";
import { createNewProduct } from "/lib/firestore/products/write";
import toast from "react-hot-toast";


export default function Page() {
  const [data, setData] = useState(null);
  const [featureImage, setFeatureImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [loading,setLoading] = useState(false)
  

  const handleData = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleSubmit = async ()=>{
    setLoading(true)
     try {
       await createNewProduct({data, featureImage, imageList})
       setData(null)
       setImageList([])
       setFeatureImage(null)
       toast.success("Product Created Successfully")
       

     } catch (error) {
        console.log(error?.message);
        toast.error(error?.message);
        
     }
     setLoading(false)
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit()
      }}
      className="p-5 flex flex-col gap-4"
    >
      <div className="flex justify-between w-full items-center">
        <h1 className=" font-semibold">Create New Trip</h1>
        <Button isLoading={loading} isDisabled={loading} type="submit" className="bg-yellow-500/90 text-white">Create</Button>
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
