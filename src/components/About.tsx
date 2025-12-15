import { BookOpen, Users, Award, Heart, Palette, Music } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Play-Based Learning",
    description:
      "Our curriculum combines fun and education through interactive play activities.",
    bgColor: "#e073e0ff", // Google Blue
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description:
      "Individual attention with low student-to-teacher ratios for personalized care.",
    bgColor: "#DB4437", // Google Red
  },
  {
    icon: Award,
    title: "Certified Teachers",
    description:
      "Experienced, qualified educators passionate about early childhood development.",
    bgColor: "#F4B400", // Google Yellow
  },
  {
    icon: Heart,
    title: "Safe Environment",
    description:
      "State-of-the-art facilities with comprehensive safety measures and monitoring.",
    bgColor: "#0F9D58", // Google Green
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description:
      "Fostering creativity through art, music, dance, and imaginative play.",
    bgColor: "#4285F4", // Blue reuse
  },
  {
    icon: Music,
    title: "Music & Movement",
    description:
      "Developing motor skills and rhythm through music and physical activities.",
    bgColor: "#571d17ff", // Red reuse
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Soft top background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F0EDFF] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8]">
              Purple Asters
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe every child is unique and deserves a nurturing environment
            to grow, learn, and discover their potential.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-2xl p-8
              shadow-lg hover:shadow-2xl
              transform hover:-translate-y-2
              transition-all duration-300 animate-fadeIn"
              style={{
                backgroundColor: feature.bgColor,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-black/20 flex items-center justify-center mb-6">
                <feature.icon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <img
              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Children playing"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div className="animate-slideInRight">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h3>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Purple Asters, we create a warm, inclusive environment where
              children feel safe to explore, question, and grow. Our play-based
              curriculum sparks curiosity and fosters lifelong learning.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We partner closely with parents to support each child's individual
              development, celebrating their unique strengths and interests.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Age-Appropriate Curriculum",
                  desc: "Tailored programs for every developmental stage",
                  color: "#5B4FBF",
                },
                {
                  title: "Holistic Development",
                  desc: "Cognitive, emotional, social, and physical growth",
                  color: "#4A9FD8",
                },
                {
                  title: "Parent Partnership",
                  desc: "Transparent communication and active involvement",
                  color: "#FDB64E",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
