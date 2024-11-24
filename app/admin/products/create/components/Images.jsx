"use client";

import { image } from "@nextui-org/react";

export default function Images({
  data,
  featureImage,
  setFeatureImage,
  imageList,
  setImageList,
}) {
  return (
    <section className="bg-white  h-full flex flex-col gap-3 rounded-xl p-4 border">
      <h1 className="font-semibold">Images</h1>

      <div className="flex flex-col gap-1">
        {featureImage && (
          <div className="flex justify-center">
            <img
              className="h-24 rounded-lg shadow-xl object-cover"
              src={URL.createObjectURL(featureImage)}
              alt="feature image"
            />
          </div>
        )}

        <label
          className="text-gray-600 text-sm"
          htmlFor="product-feature-image"
        >
          Feature Image<span className="text-red-500"> *</span>{" "}
        </label>
        <input
          required
          type="file"
          onChange={(e) => {
            if (e.target.files.length > 0) setFeatureImage(e.target.files[0]);
          }}
          id="product-feature-image"
          name="product-feature-image"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        {imageList.length > 0 && (
          <div className="flex flex-wrap gap-3 ">
            {imageList?.map((image, index) => (
              <img
                key={index}
                className=" w-36 rounded-lg shadow-xl object-cover"
                src={URL.createObjectURL(image)}
                alt="feature image"
              />
            ))}
          </div>
        )}
        <label className="text-gray-600 text-sm" htmlFor="product-images">
          Images<span className="text-red-500"> *</span>{" "}
        </label>
        <input
          required
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
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>
    </section>
  );
}
