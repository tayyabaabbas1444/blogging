import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

export default function Posts() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/blogs")
      .then(res => setBlogs(res.data));
  }, []);
  

  return (
    <div className="bg-[#f6d6cf] py-16 px-4">
      <h3 className="text-center text-2xl text-[#7a5c58] mb-10">Latest on the Blog</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
      </div>
   
<div className="text-center mt-14">
  <a
    href="/blogs"
    className="inline-block px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base border border-[#7a5c58] rounded-full hover:bg-[#e7b7ad] transition-all duration-300 w-full sm:w-auto"
  >
    Read All Blogs
  </a>
</div>
    </div>
  );
}