'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ImageTextSections() {
  return (
    <>
      {/* First Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-10 blur-[100px]" />
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="relative h-[400px] rounded-2xl overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/dd.jpg"
              alt="Bike trip in mountains"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Experience the Thrill of Mountain Rides</h2>
            <p className="text-gray-300 leading-relaxed">
              Embark on an unforgettable journey through the majestic mountains. Our bike trips offer the perfect blend of adventure, 
              safety, and breathtaking views. Whether you're a seasoned rider or a beginner, our experienced guides ensure an 
              amazing experience.
            </p>
            <motion.button 
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Bike Trips
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Second Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full opacity-10 blur-[100px]" />
        
        <motion.div 
          className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="space-y-6 ">
            <h2 className="text-4xl font-bold">All Girls Trips for Fearless Explorers</h2>
            <p className="text-gray-300 leading-relaxed">
              Join our community of fearless female travelers on specially curated trips designed for women. 
              Experience the joy of traveling with like-minded explorers, create lasting friendships, and discover 
              the world in a safe and empowering environment.
            </p>
            <motion.button 
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover Girls Trips
            </motion.button>
          </div>

          <motion.div 
            className="relative h-[400px] rounded-2xl overflow-hidden md:order-1"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/dd.jpg"
              alt="Girls trip adventure"
              fill
              className="object-cover"
            />
          </motion.div>
          
        </motion.div>
      </section>
    </>
  )
}

