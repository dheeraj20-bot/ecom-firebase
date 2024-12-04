"use client";

import { Button, image } from "@nextui-org/react";
import { ImageIcon, ImagesIcon, Trash2 } from "lucide-react";

export default function Images({
  data,
  featureImage,
  setFeatureImage,
  imageList,
  setImageList,
}) {
  const removeImage = () => {
    setFeatureImage(null);
  };
  const removeImages = (index) => {
    const newImageList = [...imageList];
    newImageList.splice(index, 1);
    setImageList(newImageList);
  };
  return (
    <section className="bg-white  h-full flex flex-col gap-3 rounded-xl p-4 border">
      <h1 className="font-semibold">Images</h1>

      <div className="flex flex-col gap-1">
        {data?.featureImageUrl && !featureImage && (
          <div className="flex mb-5  justify-center">
            <img
              className="h-24   w-24 rounded-lg shadow-xl object-cover"
              src={data?.featureImageUrl}
              alt="feature image"
            />
          </div>
        )}
        {featureImage ? (
          <div className="flex mb-5  justify-center">
            <div className="relative">
              <img
                className="h-24   w-24 rounded-lg shadow-xl object-cover"
                src={URL.createObjectURL(featureImage)}
                alt="feature image"
              />
              <Button
                color="danger"
                isIconOnly
                size="sm"
                className="absolute -top-2  -right-4"
                onClick={() => removeImage()}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <label
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer hover:bg-gray-50"
            htmlFor="product-feature-image"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <ImageIcon className="w-8 h-8 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Feature Image</p>
            </div>
            <input
              
              type="file"
              onChange={(e) => {
                if (e.target.files.length > 0)
                  setFeatureImage(e.target.files[0]);
              }}
              id="product-feature-image"
              name="product-feature-image"
              className="hidden"
            />
          </label>
        )}
      </div>
      <div className="flex flex-col relative gap-1">
        {
          imageList?.length ===0 && data?.imageList?.length !=0 && (
            <div className="flex flex-wrap gap-10">
            {data?.imageList?.map((image, index) => (
              <div key={index} className="relative">
                <img
                  className=" w-36 rounded-lg shadow-xl object-cover"
                  src={image}
                  alt="image List"
                />
              </div>
            ))}
          </div>
          )
        }

        {imageList.length > 0 ? (

          <div className="flex flex-wrap gap-10">
            {imageList?.map((image, index) => (
              <div key={index} className="relative">
                <img
                  className=" w-36 rounded-lg shadow-xl object-cover"
                  src={URL.createObjectURL(image)}
                  alt="image List"
                />

                <Button
                  color="danger"
                  isIconOnly
                  size="sm"
                  className="absolute -top-2  -right-4"
                  onClick={() => removeImages(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <label
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-md cursor-pointer hover:bg-gray-50"
            htmlFor="product-images"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <ImagesIcon className="w-8 h-8 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Images</p>
            </div>
            <input
              type="file"
              multiple
              onChange={(e) => {
                const newFiles = [];
                for (let i = 0; i < e.target.files.length; i++) {
                  newFiles.push(e.target.files[i]);
                }
                setImageList(newFiles);
              }}
              id="product-images"
              name="product-images"
              className="hidden"
            />
          </label>
        )}
      </div>
    </section>
  );
}
