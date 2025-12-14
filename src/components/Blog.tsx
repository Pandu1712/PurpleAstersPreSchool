import { Calendar, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Importance of Play-Based Learning in Early Childhood',
    excerpt:
      'Discover how play-based learning helps children develop essential cognitive, social, and emotional skills that form the foundation for lifelong learning.',
    date: 'December 10, 2024',
    image:
      'https://images.pexels.com/photos/8422149/pexels-photo-8422149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Tips for Preparing Your Child for Their First Day of Preschool',
    excerpt:
      'Starting preschool is a big milestone. Here are practical tips to help make the transition smooth and positive for both you and your child.',
    date: 'December 5, 2024',
    image:
      'https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    title: 'How Music and Movement Support Child Development',
    excerpt:
      'Learn about the powerful connection between music, movement, and brain development in young children, and how we incorporate these into daily activities.',
    date: 'November 28, 2024',
    image:
      'https://images.pexels.com/photos/8613140/pexels-photo-8613140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    title: 'Building Social Skills Through Cooperative Play',
    excerpt:
      'Explore how group activities and cooperative play help children develop empathy, communication skills, and lasting friendships.',
    date: 'November 20, 2024',
    image:
      'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    title: 'Creative Arts: More Than Just Fun and Games',
    excerpt:
      'Understanding how art, crafts, and creative expression contribute to problem-solving skills, fine motor development, and self-confidence.',
    date: 'November 15, 2024',
    image:
      'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    title: 'Nutrition and Healthy Eating Habits for Young Children',
    excerpt:
      'Practical advice on establishing healthy eating habits early and how we support nutritious meal times at Purple Asters.',
    date: 'November 8, 2024',
    image:
      'https://images.pexels.com/photos/8422027/pexels-photo-8422027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-white via-[#F0EDFF] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8]">Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and resources for parents and educators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>Purple Asters</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B4FBF] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button className="flex items-center space-x-2 text-[#5B4FBF] font-semibold group-hover:text-[#4A9FD8] transition-colors">
                  <span>Read More</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
