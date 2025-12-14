import { BookOpen, Users, Award, Heart, Palette, Music } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Play-Based Learning',
    description: 'Our curriculum combines fun and education through interactive play activities.',
    color: 'from-[#5B4FBF] to-[#7B6FDF]',
  },
  {
    icon: Users,
    title: 'Small Class Sizes',
    description: 'Individual attention with low student-to-teacher ratios for personalized care.',
    color: 'from-[#4A9FD8] to-[#6AB9E8]',
  },
  {
    icon: Award,
    title: 'Certified Teachers',
    description: 'Experienced, qualified educators passionate about early childhood development.',
    color: 'from-[#FDB64E] to-[#FDC66E]',
  },
  {
    icon: Heart,
    title: 'Safe Environment',
    description: 'State-of-the-art facilities with comprehensive safety measures and monitoring.',
    color: 'from-[#FF6B9D] to-[#FF8BAD]',
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    description: 'Fostering creativity through art, music, dance, and imaginative play.',
    color: 'from-[#9B7FDF] to-[#BB9FEF]',
  },
  {
    icon: Music,
    title: 'Music & Movement',
    description: 'Developing motor skills and rhythm through music and physical activities.',
    color: 'from-[#5BC5D8] to-[#7BD5E8]',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F0EDFF] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8]">Purple Asters</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe every child is unique and deserves a nurturing environment to grow, learn, and discover their potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <img
              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Children playing"
              className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          <div className="animate-slideInRight">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Philosophy
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Purple Asters, we create a warm, inclusive environment where children feel safe to explore, question, and grow. Our play-based curriculum is designed to spark curiosity and foster a love for learning that lasts a lifetime.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We partner with parents to support each child's individual development, celebrating their unique strengths and nurturing their interests through engaging activities and meaningful experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#5B4FBF] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Age-Appropriate Curriculum</h4>
                  <p className="text-gray-600">Tailored programs for different developmental stages</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#4A9FD8] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Holistic Development</h4>
                  <p className="text-gray-600">Focus on cognitive, social, emotional, and physical growth</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-[#FDB64E] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Parent Partnership</h4>
                  <p className="text-gray-600">Regular communication and involvement in your child's journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
