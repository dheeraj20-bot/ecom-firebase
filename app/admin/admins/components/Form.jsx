"use client";

import { Button } from "@nextui-org/react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createNewAdmin,updateAdmin } from "/lib/firestore/admins/write";
import { getAdmin } from "/lib/firestore/admins/read_server";
import { useRouter, useSearchParams } from "next/navigation";

export default function Form() {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  // console.log(id);
  

  const fetchData = async()=>{
      try {
        // console.log(id);
        
           const res = await getAdmin({id})
           if(!res){
               toast.error("Brands not Found")
           }else{
               setData(res)
           }
      } catch (error) {
         toast.error(error?.message);
      }
  }

  useEffect(()=>{
    if(id){
        fetchData()
    }
  },[id])

  const removeImage = () => {
    setImage(null);
  };

  const handleData = (key, value) => {
    setData((prev) => {
      return {
        ...(prev ?? {}),
        [key]: value,
      };
    });
  };

  const handelSubmit = async (e) => {
    setLoading(true);
    try {
      await createNewAdmin({ data, image });
      toast.success("Admin created successfully");
      setData(null);
      setImage(null);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };


  const handelUpdate = async (e) => {
    setLoading(true);
    try {
      await updateAdmin({ data, image });
      toast.success("Successfully Updated ");
      setData(null);
      setImage(null);
      router.push("/admin/admins")
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="p-5 flex flex-col gap-3 bg-white rounded-xl w-full md:w-[400px]">
      <h1 className="font-semibold">
        {id ? "Update" : "Create"}{" "}
         Admin
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(id){
            handelUpdate();
          }else{
            handelSubmit();
          }
        }}
        className="flex flex-col gap-3"
      >
        <div className="flex  gap-1 flex-col">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="admin-image"
          >
            Upload file
          </label>

          {image && (
            <div className="flex relative  justify-center items-center p-3">
              <img
                className="size-28  rounded-xl"
                src={URL.createObjectURL(image)}
                alt="Brand image"
              />
              <X
                onClick={removeImage}
                className="cursor-pointer z-10 absolute top-0  right-28 bg-red-100 text-red-400 rounded-full px-1 shadow-lg "
              />
            </div>
          )}

          <input
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setImage(e.target.files[0]);
              }
            }}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none "
            id="admin-image"
            name="admin-image"
            type="file"
          />
        </div>

        <div className="flex  gap-1 flex-col">
          <label className="text-gray-500 text-sm" htmlFor="admin-name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
            id="admin-name"
            name="admin-name"
            type="text"
            placeholder="Enter Name"
            value={data?.name ?? ""}
            onChange={(e) => {
              handleData("name", e.target.value);
            }}
          />
        </div>
        <div className="flex  gap-1 flex-col">
          <label className="text-gray-500 text-sm" htmlFor="admin-email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            className="border px-4 py-2 rounded-lg w-full focus:outline-none"
            id="admin-email"
            name="admin-email"
            type="text"
            placeholder="Enter email"
            value={data?.email ?? ""}
            onChange={(e) => {
              handleData("email", e.target.value);
            }}
          />
        </div>
        <Button
          isLoading={loading}
          isDisabled={loading}
          type="submit"
          className="bg-yellow-400 text-white font-semibold"
        >
          {id ? "Update Admin" : "Create Admin"}
        </Button>
      </form>
    </div>
  );
}
