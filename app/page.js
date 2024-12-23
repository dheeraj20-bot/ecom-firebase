"use client"
import { useEffect, useState } from "react";
import Header from "./components/Header"
import { getProductsByState } from "/lib/firestore/pretrips/read_server";

export default function Home() {
   const[products,setProducts] = useState([]);


  const fetchProducts = async () => {
    const products = await getProductsByState("Uttarkhand");
    setProducts(products);x
    console.log(products); // Log the filtered data
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div>
      <Header />
      <h1>Home Page</h1>
       
    </div>
  );
}
