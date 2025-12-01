import { Calendar, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogs = [
    {
      title: "Getting Started with React Hooks",
      author: "MK Aamir Lehri",
      date: "Dec 15, 2025",
      category: "React",
      excerpt:
        "Learn how to use React Hooks to write cleaner and more efficient functional components.",
      image: "/images/project5.jpg",
    },
    {
      title: "Web Performance Optimization Tips",
      author: "MK Aamir Lehri",
      date: "Dec 10, 2025",
      category: "Performance",
      excerpt:
        "Discover techniques to optimize your website's performance and improve user experience.",
      image: "/images/project3.jpg",
    },
    {
      title: "Building Scalable Node.js Applications",
      author: "MK Aamir Lehri",
      date: "Dec 5, 2025",
      category: "Backend",
      excerpt:
        "Best practices for building scalable and maintainable Node.js applications.",
      image: "/images/project6.jpg",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Our Blog
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Insights, tutorials, and best practices from my experience in web
          development
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="group bg-slate-800 rounded-lg overflow-hidden border border-yellow-400 border-opacity-20 hover:border-opacity-100 hover:bg-slate-750 transition duration-300"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-20 flex items-center justify-center overflow-hidden group-hover:opacity-40 transition">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-400 bg-opacity-10 text-yellow-400 text-xs font-semibold rounded">
                    {blog.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Meta */}
                <div className="space-y-2 text-xs text-gray-500 mb-4 pb-4 border-b border-yellow-400 border-opacity-20">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>{blog.author}</span>
                  </div>
                </div>

                {/* Read More */}
                <button className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 font-semibold transition">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 font-semibold rounded hover:bg-yellow-400 hover:text-slate-950 transition duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
