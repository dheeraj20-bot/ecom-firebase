'use client'

import { motion } from 'framer-motion'
import { Users, Bike, UserCircle, MessageCircle, MapPin, Calendar } from 'lucide-react'

const stats = [
  { icon: Users, number: '56541+', label: 'Satisfied Travelers' },
  { icon: UserCircle, number: '150+', label: 'All Girls Trips' },
  { icon: Bike, number: '250+', label: 'Bike Trips' },
  { icon: MessageCircle, number: '1000+', label: 'Reviews' },
  { icon: MapPin, number: '50+', label: 'Destinations' },
  { icon: Calendar, number: '365', label: 'Days Active' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function WhyChooseUs() {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Radial Gradients */}
      <div className="absolute top-0 -z-5 left-0 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-10 blur-[100px]" />
      <div className="absolute bottom-0 -z-5 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full opacity-10 blur-[100px]" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h3 className="text-yellow-500 text-lg font-medium mb-4">WHY CHOOSE US</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why WheelsRoute</h2>
          <p className="text-xl italic text-gray-300 mb-8">
            "You are not living, if you are not dreaming"
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Years ago, when WheelsRoute organized its first trip, we had the opportunity to turn other people's
            dreams into reality. We became the bridge that narrowed the gap between individuals and their travel dreams.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3  relative gap-8 md:gap-12"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="inline-block p-4 bg-gray-900 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

