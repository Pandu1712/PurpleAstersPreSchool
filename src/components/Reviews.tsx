import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "latha Muddaraj",
    role: "Parent",
    message:
      "Awesome place for kids..highly recommended as perfect place for play school with lots of facilities to play learn and explore.. last but not the least very good teachers who constantly monitor kids..definitely the best play school.",
    rating: 5,
    color: "#4285F4", // Google Blue
  },
  {
    name: "Syed Jaffer",
    role: "Parent",
    message:
      "Well experienced teachers with good communication skills, its in a prime location ventilated place and Very hygienic, clean with ample parking around highly recommended.",
    rating: 5,
    color: "#DB4437", // Google Red
  },
  {
    name: "Smitha Shetty",
    role: "Parent",
    message:
      "Really amazing place for kids, excellent teachers..",
    rating: 4,
    color: "#F4B400", // Google Yellow
  },
  {
    name: "Vikram Naidu",
    role: "Parent",
    message:
      "Excellent teachers, clean environment, and great communication with parents.",
    rating: 5,
    color: "#0F9D58", // Google Green
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by families who believe in nurturing early childhood growth
            with care and creativity.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 bg-white
              border border-gray-100
              shadow-lg hover:shadow-2xl
              transition-all duration-300"
            >
              {/* Quote Icon */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: review.color }}
              >
                <Quote className="text-white" />
              </div>

              {/* Review Message */}
              <p className="text-gray-600 leading-relaxed mb-6">
                “{review.message}”
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current"
                    style={{ color: review.color }}
                  />
                ))}
              </div>

              {/* Author */}
              <div>
                <h4 className="font-semibold text-gray-900">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
