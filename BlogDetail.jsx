import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogDetail() {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching blog detail:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-20 text-center text-[#7a5c58]">Loading story...</div>;
  if (!blog) return <div className="p-20 text-center text-[#7a5c58]">Story not found.</div>;

  return (
    <div className="bg-[#fdfaf7] min-h-screen p-6 md:p-20">
      <div className="max-w-4xl mx-auto">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-[400px] object-cover rounded-3xl shadow-sm mb-10" 
        />
        <h1 className="text-4xl md:text-5xl font-serif text-[#7a5c58] mb-6 leading-tight">
          {blog.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-[#7a5c58]/70 mb-8 uppercase tracking-widest">
          <span>{blog.category}</span>
          <span>•</span>
          <span>By Author</span>
        </div>
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
         
          <p>{blog.content || blog.description}</p>
        </div>
      </div>
    </div>
  );
}