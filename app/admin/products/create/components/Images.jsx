"use client";

export default function Images({ data,featureImage,setFeatureImage,imageList,setImageList }) {
  return (
    <section className="bg-white  w-full flex flex-col gap-3 rounded-xl p-4 border">
      <h1 className="font-semibold">Images</h1>

      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="product-feature-image">
          Feature Image<span className="text-red-500"> *</span>{" "}
        </label>
        <input
          required
          type="file"
          value={data?.featureImage ?? ""}
          onChange={(e) => {
            if(e.target.files.length > 0 )
            setFeatureImage(e.target.files[0])
          }}
          placeholder="Enter Title"
          id="product-feature-image"
          name="product-feature-image"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>
    </section>
  );
}
