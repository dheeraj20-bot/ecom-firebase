"use client"

import React, { useState } from 'react'
import InputItem from "./inputItem";
import { Button, Input } from "@nextui-org/react";
import Image from 'next/image';

function SearchSection() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  return (
    <div className="p-2 md:p-5  w-full rounded-2xl">
      <p className="text-[20px] font-bold">Reserve a Cab</p>
      <div className="relative">
        <InputItem type="source" />
        <div className="absolute  h-[2.5rem] border-2 border-dashed w-[2px]  border-yellow-500 top-1/2 left-[1.3rem] transform -translate-y-1/2" />
        <InputItem type="destination" />
      </div>

      <div className="mt-5">
        <p className="text-[16px] font-semibold mb-2">Choose Car Type</p>
        <div className="flex justify-around">
          <div
            className={`cursor-pointer p-2 rounded-lg ${
              selectedCar === "4wheeler" ? "bg-yellow-200" : ""
            }`}
            onClick={() => setSelectedCar("4wheeler")}
          >
            <Image
              src="/c4.webp"
              alt="4 Wheeler"
              width={180}
              height={180}
            />
            <p className="text-center mt-2">4 Wheeler</p>
          </div>
          <div
            className={`cursor-pointer p-2 rounded-lg ${
              selectedCar === "7wheeler" ? "bg-yellow-200" : ""
            }`}
            onClick={() => setSelectedCar("7wheeler")}
          >
            <Image
              src="/c7.png"
              alt="7 Wheeler"
              width={180}
              height={180}
            />
            <p className="text-center mt-2">7 Wheeler</p>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <p className='text-[16px] font-semibold mb-2'>Phone Number</p>
        <Input
          type="tel" 
          placeholder="Enter your phone number" 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <Button className="w-full bg-yellow-500 text-white font-semibold mt-5">
        Reserve Now
      </Button>
    </div>
  );
}

export default SearchSection;
