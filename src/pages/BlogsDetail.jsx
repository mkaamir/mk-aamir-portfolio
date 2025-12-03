import { useParams, useNavigate } from "react-router-dom";
import { blogsData } from "../data/blogsData";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogsData.find((b) => b.id === parseInt(id));
  const relatedBlogs = blogsData
    .filter((b) => b.id !== parseInt(id))
    .slice(0, 2);

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Blog Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-yellow-400 text-slate-950 font-semibold rounded hover:bg-yellow-500 transition"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </button>

        {/* Blog Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-400 bg-opacity-10 text-yellow-400 rounded-full text-sm font-semibold mb-4">
            {blog.category}
          </span>

          <h1 className="text-5xl font-bold text-white mb-6">{blog.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <User size={16} className="text-yellow-400" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-yellow-400" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-yellow-400" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 border border-yellow-400 border-opacity-30 text-yellow-400 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-lg overflow-hidden border-2 border-yellow-400 border-opacity-30">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Blog Content */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-16"
          style={{
            color: "#e2e8f0",
          }}
          dangerouslySetInnerHTML={{ __html: blog.fullContent }}
        />

        {/* Related Blogs */}
        <div className="mt-20 pt-12 border-t border-yellow-400 border-opacity-20">
          <h2 className="text-3xl font-bold text-white mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedBlogs.map((relatedBlog) => (
              <div
                key={relatedBlog.id}
                onClick={() => {
                  navigate(`/blog/${relatedBlog.id}`);
                  window.scrollTo(0, 0);
                }}
                className="group bg-slate-900 rounded-lg overflow-hidden border border-yellow-400 border-opacity-20 hover:border-opacity-100 transition duration-300 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={relatedBlog.image}
                    alt={relatedBlog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-yellow-400 bg-opacity-10 text-yellow-400 text-xs font-semibold rounded mb-3">
                    {relatedBlog.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {relatedBlog.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={12} />
                    <span>{relatedBlog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-slate-900 rounded-lg p-12 border border-yellow-400 border-opacity-20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Want to discuss your project?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's turn your ideas into reality with modern web technologies.
          </p>
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="px-8 py-3 bg-yellow-400 text-slate-950 font-semibold rounded hover:bg-yellow-500 transition"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Custom Styles for Blog Content */}
      <style>{`
        .prose h2 {
          color: #fbbf24;
          font-size: 2rem;
          font-weight: bold;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .prose h3 {
          color: #fbbf24;
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          color: #cbd5e1;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
        .prose ul, .prose ol {
          color: #cbd5e1;
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.75rem;
        }
        .prose strong {
          color: #fbbf24;
          font-weight: 600;
        }
        .prose pre {
          background-color: #1e293b;
          border: 1px solid rgba(251, 191, 36, 0.3);
          border-radius: 0.5rem;
          padding: 1.5rem;
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }
        .prose code {
          color: #fbbf24;
          font-size: 0.9em;
        }
      `}</style>
    </div>
  );
}
