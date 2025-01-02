"use client"
import Header from "./components/Header"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Home() {

  return (
    <div className="">
      <Header />
      <main className="h-screen py-20 sm:py-40 max-w-6xl px-2 relative flex-col sm:flex-row flex mx-auto">

        <div className="size-96  absolute -top-52 -left-80  blur-3xl  bg-gradient-to-r from-yellow-500 to-orange-600  rounded-b-full "/>

      
        <div className="w-full z-10">
          <h1 className="text-4xl sm:text-6xl font-bold">
            Your Journey, Our Drive – Cabs for Every  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Destination.</span>
          </h1>
          <p className="mt-8 text-lg text-neutral-300">
            Whether it&apos;s a pre-planned trip or a last-minute cab booking, WheelsRoute makes it simple and stress-free.
          </p>
        </div>
        <div className="w-full">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=" w-52 h-52">
          <img className="w-52" src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-52 h-52" >
          <img className="w-52 " src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="w-52 h-52" >
          <img  className="w-52 " src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper>
        </div>
      </main>
    </div>
  );
}
