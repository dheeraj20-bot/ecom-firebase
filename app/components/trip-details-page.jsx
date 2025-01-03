'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Calendar, Clock, MapPin, Users, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"

const tripDetails = {
  title: "Rajasthan Backpacking to Udaipur Jodhpur Jaisalmer",
  duration: "5N/6D",
  startPoint: "Udaipur",
  groupSize: "15-20 people",
  price: "21,000",
  highlights: [
    "Visit the majestic City Palace of Udaipur",
    "Desert camping under the stars in Jaisalmer",
    "Jeep safari in the Thar Desert",
    "Local cultural experiences and traditional meals",
    "Photography sessions at iconic locations",
    "Expert local guides throughout the journey"
  ],
  images: [
    "https://firebasestorage.googleapis.com/v0/b/wheelsroute-b5a90.firebasestorage.app/o/pretrips%2FHeart%20of%20India?alt=media&token=e35d1d82-fca2-4927-88ce-2f018895c767",
    "/dd.jpg",
    "/dd.jpg",
    "/dd.jpg",
    "/dd.jpg"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Udaipur",
      activities: [
        "Airport/Railway station pickup",
        "Check-in to hotel",
        "Evening boat ride in Lake Pichola",
        "Welcome dinner with group"
      ]
    },
    {
      day: "Day 2",
      title: "Udaipur City Tour",
      activities: [
        "Visit City Palace complex",
        "Explore local markets",
        "Sunset at Monsoon Palace",
        "Cultural performance in evening"
      ]
    },
    {
      day: "Day 3",
      title: "Jodhpur Adventure",
      activities: [
        "Travel to Jodhpur",
        "Visit Mehrangarh Fort",
        "Local street food tour",
        "Night stay in heritage hotel"
      ]
    }
  ]
}

export default function TripDetailsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const containerRef = useRef(null)
  const formRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const formOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])
  const formY = useTransform(scrollYProgress, [0, 0.1], [50, 0])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === tripDetails.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? tripDetails.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen text-white pb-20">
      {/* Radial Gradients */}
      <div className="fixed top-0 -z-5 left-0 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-10 blur-[100px]" />
      <div className="fixed bottom-0  -z-5 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full opacity-10 blur-[100px]" />

      <div className="max-w-7xl relative mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {tripDetails.title}
            </motion.h1>

            {/* Trip Overview */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <Clock className="text-yellow-500" />
                <span>{tripDetails.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-yellow-500" />
                <span>{tripDetails.startPoint}</span>
              </div>
            
            </motion.div>

            {/* Image Slider */}
            <motion.div 
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Image
                src={tripDetails.images[currentImageIndex]}
                alt={`Trip image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <ChevronLeft className="text-white" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
              >
                <ChevronRight className="text-white" />
              </button>
            </motion.div>

            {/* Trip Highlights */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">Trip Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tripDetails.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 mt-1 text-yellow-500 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
              <div className="space-y-8">
                {tripDetails.itinerary.map((day, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-8 border-l-2 border-yellow-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-yellow-500" />
                    <h3 className="text-xl font-bold mb-2">{day.day} - {day.title}</h3>
                    <ul className="space-y-2">
                      {day.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-gray-300">{activity}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enquiry Form */}
          <div
            
            className="lg:sticky lg:top-16 h-fit"
            
          >
            <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Book This Trip</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    rows={4}
                    placeholder="Any specific requirements?"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 rounded-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Enquiry
                </motion.button>
                <p className="text-sm text-gray-400 text-center mt-4">
                  Starting from ₹{tripDetails.price} per person
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Enquiry Button (visible on mobile) */}
        <motion.div
          className="fixed bottom-4 left-4 right-4 lg:hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Button 
            onPress={onOpen}
            className="w-full bg-yellow-500 text-black py-4 rounded-lg font-medium text-lg"
          >
            Enquire Now
          </Button>
        </motion.div>
      </div>

      {/* Enquiry Modal */}
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        className="bg-gray-900 text-white"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Enquire About This Trip</ModalHeader>
          <ModalBody>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 bg-black/50 rounded-lg border border-gray-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  rows={4}
                  placeholder="Any specific requirements?"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Send Enquiry
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

