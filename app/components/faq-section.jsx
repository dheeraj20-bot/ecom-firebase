'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What makes WheelsRoute different from other travel companies?",
    answer: "We focus on creating authentic experiences and building a community of like-minded travelers. Our trips are carefully curated to provide unique adventures while ensuring safety and comfort."
  },
  {
    question: "How safe are the All Girls Trips?",
    answer: "Safety is our top priority. We have experienced tour leaders, maintain small group sizes, choose safe accommodations, and provide 24/7 support throughout the journey."
  },
  {
    question: "What types of bikes do you provide for trips?",
    answer: "We provide well-maintained Royal Enfield motorcycles for our bike trips. All bikes undergo thorough safety checks before each journey."
  },
  {
    question: "Do I need prior experience for bike trips?",
    answer: "While some experience is recommended, we cater to various skill levels. Our guides provide proper orientation and support throughout the journey."
  },
  {
    question: "What's included in the trip package?",
    answer: "Our packages typically include accommodation, meals, activities, local transfers, and experienced guides. Specific inclusions vary by trip and are clearly listed in each tour description."
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Radial Gradients */}
      <div className="absolute top-0   right-0 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-10 blur-[100px]" />
      <div className="absolute  bottom-0 left-0 w-[500px] h-[500px] bg-orange-500 rounded-full opacity-10 blur-[100px]" />

      <motion.div 
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className=" text-4xl sm:text-6xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Find answers to common questions about our services</p>
        </div>

        <div className="space-y-4 relative">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
              initial={false}
              animate={{ backgroundColor: activeIndex === index ? 'rgba(255,255,255,0.05)' : 'transparent' }}
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-yellow-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-6 pb-4 text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

