"use client"
import Header from "./components/Header"
import Trips from "./components/trips";
import WhyChooseUs from "./components/why-choose-us";
import FAQSection from "./components/faq-section";
import ImageTextSections from "./components/image-text-sections";
import Footer from "./components/Footer";

import { Button } from "@nextui-org/react";

export default function Home() {

  return (
    <div className="">
      <Header />
      <section className="h-screen   items-center justify-center sm:py-40 max-w-4xl px-2 relative flex-col  flex mx-auto">
        <div className="size-96  absolute -top-52 -left-80  blur-3xl opacity-20  bg-gradient-to-r from-yellow-500 to-orange-600  rounded-b-full " />
        <h1 className="text-4xl text-center sm:text-6xl font-bold">
          Your Journey, Our Drive – Cabs for Every  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Destination.</span>
        </h1>
        <p className="mt-8 mb-5 text-lg text-center  max-w-lg mx-auto text-neutral-300">
          Whether it&apos;s a pre-planned trip or a last-minute cab booking, WheelsRoute makes it simple and stress-free.
        </p>

        <Button>
          Get Started
        </Button>
      </section>
      <Trips />
      <WhyChooseUs/>
      <ImageTextSections/>
      <FAQSection/>
      <Footer/>

    </div>
  );
}
