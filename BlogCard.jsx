import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#eee1db]">
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h3 className="text-xl font-bold text-[#7a5c58] line-clamp-1">{blog.title}</h3>
      <p className="text-gray-500 text-sm mt-2 line-clamp-2">{blog.description}</p>
      
 
      <Link 
        to={`/blog/${blog.id}`} 
        className="inline-block mt-4 border border-[#7a5c58] px-6 py-2 rounded-full text-[#7a5c58] text-sm hover:bg-[#f6d6cf] transition-all"
      >
        Read More
      </Link>
    </div>
  );
}