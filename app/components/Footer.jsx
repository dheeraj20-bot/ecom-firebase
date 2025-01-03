'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react'

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const socialLinks = [
  { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
  { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
  { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
  { icon: Youtube, href: '#', color: 'hover:text-red-600' },
]

export default function Footer() {
  return (
    <motion.footer 
      className="bg-black relative text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.svg" 
                alt="WheelsRoute" 
                width={180} 
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Contact Us', 'Our Blogs', 'Career With Us', 'Payment Policy'].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    className="hover:text-yellow-500 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Trips</h3>
            <ul className="space-y-3">
              {[
                'Backpacking Trips',
                'Weekend Getaways',
              ].map((item) => (
                <li key={item}>
                  <motion.a 
                    href="#" 
                    className="hover:text-yellow-500 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-yellow-500" />
                <span>B-42, 2nd Floor, Tower- B, The Corenthum, Block A, Sector 62, Noida, Uttar Pradesh 201301</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <span>+91-8810 457 631</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <span>contact@wheelsroute.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} WheelsRoute Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow-500 transition-colors">Terms & Conditions</Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

