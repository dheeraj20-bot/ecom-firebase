"use client";

import { useState } from "react";
import BasicDetails from "./components/BasicDetails";
import Images from "./components/Images";
import Description from "./components/Description";

export default function Page() {
  const [data, setData] = useState(null);
  const [featureImage, setFeatureImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  const handleData = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  return (
    <main className="p-5 flex flex-col gap-4">
      <h1 className=" font-semibold">Create New Product</h1>
      <div className="flex gap-5 flex-col md:flex-row">
        <BasicDetails
          data={data}
          featureImage={featureImage}
          setFeatureImage={setFeatureImage}
          imageList={imageList}
          setImageList={setImageList}
        />

        <div className="w-full flex flex-col gap-5">
          <Images data={data} handleData={handleData} />
          <Description />
        </div>
      </div>
    </main>
  );
}
