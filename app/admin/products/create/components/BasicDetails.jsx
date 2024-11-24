"use client";
import { useBrands } from "/lib/firestore/brands/read";
import { useCategories } from "/lib/firestore/categories/read";

export default function BasicDetails({ data, handleData }) {
  const { data: brands } = useBrands();
  const {data:categories} = useCategories()
  console.log(brands);

  return (
    <section className="bg-white flex-1 flex flex-col gap-3 rounded-xl p-4 border">
      <h1 className="font-semibold">Basic Details</h1>
      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="product-title">
          Product Name <span className="text-red-500"> *</span>{" "}
        </label>
        <input
          required
          type="text"
          value={data?.title ?? ""}
          onChange={(e) => {
            handleData("title", e.target.value);
          }}
          placeholder="Enter Title"
          id="product-title"
          name="product-title"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-gray-600 text-sm"
          htmlFor="product-short-description"
        >
          Short Description<span className="text-red-500"> *</span>{" "}
        </label>
        <input
          required
          type="text"
          value={data?.shortDescription ?? ""}
          onChange={(e) => {
            handleData("shortDescription", e.target.value);
          }}
          placeholder="Enter Short Description"
          id="product-short-description"
          name="product-short-description"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="product-brand">
          Brand<span className="text-red-500"> *</span>{" "}
        </label>
        <select
          required
          type="text"
          value={data?.brandId ?? ""}
          onChange={(e) => {
            handleData("brandId", e.target.value);
          }}
          id="product-brand"
          name="product-brand"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        >
          <option value="">Select Brand</option>
          {brands?.map((item) => (
            <option value={item?.id} key={item?.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm" htmlFor="product-category">
          Category<span className="text-red-500"> *</span>{" "}
        </label>
        <select
          required
          type="text"
          value={data?.categoryId ?? ""}
          onChange={(e) => {
            handleData("categoryId", e.target.value);
          }}
          id="product-category"
          name="product-category"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        >
          <option value="">Select Category</option>
          {categories?.map((item) => (
            <option value={item?.id} key={item?.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-gray-600 text-sm"
          htmlFor="product-stock"
        >
          Stock<span className="text-red-500"> *</span>{" "}
        </label>
        <input
          required
          type="number"
          value={data?.stock ?? 0}
          onChange={(e) => {
            handleData("stock", e.target.valueAsNumber);
          }}
          placeholder="Enter Stock"
          id="product-stock"
          name="product-stock"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          className="text-gray-600 text-sm"
          htmlFor="product-price"
        >
          Price<span className="text-red-500"> *</span>{" "}
        </label>
        <input
          required
          type="number"
          value={data?.price ?? 0}
          onChange={(e) => {
            handleData("price", e.target.valueAsNumber);
          }}
          placeholder="Enter Price"
          id="product-price"
          name="product-price"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="text-gray-600 text-sm"
          htmlFor="product-sale-price"
        >
         Sale Price<span className="text-red-500"> *</span>{" "}
        </label>
        <input
          required
          type="number"
          value={data?.salePrice ?? 0}
          onChange={(e) => {
            handleData("salePrice", e.target.valueAsNumber);
          }}
          placeholder="Enter Sale Price"
          id="product-sale-price"
          name="product-sale-price"
          className="border px-4 py-2 rounded-lg w-full outline-none"
        />
      </div>
    </section>
  );
}
