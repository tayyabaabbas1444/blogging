import { useParams } from "react-router-dom";


const allBlogs = [
  { id: 1, title: "Living with Less", category: "Minimalism", desc: "How to declutter your mind.Living with Less is about choosing simplicity over excess and intention over clutter. It explores how owning fewer things can create more space—for peace, clarity, and what truly matters. This category focuses on mindful living, decluttering habits, and finding beauty in simplicity, helping you build a life that feels lighter, calmer, and more meaningful." },
  { id: 2, title: "Morning Light", category: "Photography", desc: "Golden hour tips.Morning Light captures the quiet beauty of early hours—when shadows are gentle, colors feel fresh, and everything looks untouched. This category celebrates soft sunlight, calm moods, and fleeting moments that exist only at dawn, turning simple scenes into timeless photographs." },
  { id: 3, title: "The Art of Slowing Down", category: "Slow Living", desc: "Finding peace in the rush.The Art of Slowing Down is an invitation to pause in a fast-moving world. It explores mindful moments, gentle routines, and the beauty of taking life one breath at a time. This category is about presence over pressure—finding depth, peace, and meaning in moving slowly and living intentionally." },
];

export default function CategoryDetail() {
  const { categoryName } = useParams();

  const filteredBlogs = allBlogs.filter(
    (blog) => blog.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-[#fdfaf7] p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-[#7a5c58] capitalize mb-6">
          {categoryName} Collection
        </h1>
        
        <div className="grid gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="p-6 bg-white rounded-xl border border-[#eee1db] shadow-sm">
                <h2 className="text-2xl font-bold text-[#7a5c58]">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.desc}</p>
                <button className="mt-4 text-[#7a5c58] font-semibold">Read Story ✦</button>
              </div>
            ))
          ) : (
            <p className="text-gray-400 italic">No stories found yet for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}