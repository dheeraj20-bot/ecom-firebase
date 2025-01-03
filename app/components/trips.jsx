import { MapPinIcon } from "lucide-react"
import { motion } from "framer-motion"



const tours = [
  {
    id: 1,
    title: "Rajasthan Backpacking to Udaipur Jodhpur Jaisalmer",
    image: "https://firebasestorage.googleapis.com/v0/b/wheelsroute-b5a90.firebasestorage.app/o/pretrips%2FHeart%20of%20India?alt=media&token=e35d1d82-fca2-4927-88ce-2f018895c767",
    route: "Udaipur to Udaipur",
    backgroundGradient: "from-orange-500/80 to-yellow-500/80"
  },
  {
    id: 2,
    title: "All Girls Himachal Backpacking Trip Manali Kasol Jibhi",
    image: "https://firebasestorage.googleapis.com/v0/b/wheelsroute-b5a90.firebasestorage.app/o/pretrips%2FHeart%20of%20India?alt=media&token=e35d1d82-fca2-4927-88ce-2f018895c767",
    route: "Delhi to Delhi",
    backgroundGradient: "from-blue-600/80 to-cyan-500/80"
  },
  {
    id: 3,
    title: "All Girls Himachal Backpacking Trip Manali Kasol Jibhi",
    image: "https://firebasestorage.googleapis.com/v0/b/wheelsroute-b5a90.firebasestorage.app/o/pretrips%2FHeart%20of%20India?alt=media&token=e35d1d82-fca2-4927-88ce-2f018895c767",
    route: "Delhi to Delhi",
    backgroundGradient: "from-blue-600/80 to-cyan-500/80"
  },
  {
    id: 4,
    title: "All Girls Himachal Backpacking Trip Manali Kasol Jibhi",
    image: "https://firebasestorage.googleapis.com/v0/b/wheelsroute-b5a90.firebasestorage.app/o/pretrips%2FHeart%20of%20India?alt=media&token=e35d1d82-fca2-4927-88ce-2f018895c767",
    route: "Delhi to Delhi",
    backgroundGradient: "from-blue-600/80 to-cyan-500/80"
  },

]

export default function Trips(){
  return (
    <section className="py-10 mx-w-6xl relative mx-auto overflow-hidden"> 
          <div className="absolute top-0 -z-5 left-0 w-[500px] h-[500px] bg-yellow-500 rounded-full opacity-10 blur-[100px]" />
          <div className="absolute bottom-0 -z-5 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full opacity-10 blur-[100px]" />
        <h1 className="text-5xl font-semibold text-center">Upcoming Trips</h1>
        <div 
        className="flex gap-6 px-3 mt-10 max-w-7xl mx-auto flex-wrap"
      >
        {tours.map((tour) => (
          <motion.div
            key={tour.id}
            className="min-w-[300px] sm:min-w-[400px] rounded-2xl overflow-hidden snap-start"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative h-[300px] w-full">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Best Seller
                </span>
              </div>
              <img 
                src={tour.image} 
                alt={tour.title}
                className="w-full h-full "
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{tour.title}</h3>
                <div className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span className="text-sm">{tour.route}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

