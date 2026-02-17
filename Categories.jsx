import CategoryCard from "../components/CategoryCard";

export default function Categories() {
 
  const categories = [
    {
      id: 1,
      name: "Slow Living",
      description: "Embracing intentional moments and a calmer pace of life.",
      image: "https://i.pinimg.com/736x/42/ab/51/42ab513b3b401a4468b732c62ed49a4c.jpg"
    },
    {
      id: 2,
      name: "Photography",
      description: "Capturing light, shadows, and the beauty of the everyday.",
      image: "https://i.pinimg.com/736x/5f/f7/94/5ff794277c57ef32dc475ce0a278983b.jpg"
    },
    {
      id: 3,
      name: "Minimalism",
      description: "Finding joy in simplicity and curated spaces.",
      image: "https://i.pinimg.com/736x/c5/e8/9a/c5e89a8e53ff63aacab01763529693ed.jpg"
    },
    {
      id: 4,
      name: "Rituals",
      description: "Small daily habits that bring peace and mindfulness.",
      image: "https://i.pinimg.com/736x/ab/3c/aa/ab3caa77f402f2f518d505cb332da043.jpg"
    }
  ];

  return (
    <div className="bg-[#f6d6cf] min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
       
        <div className="text-center mb-20">
          <span className="text-[#e58b8b] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            Browse by Mood
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#7a5c58] font-bold mb-6">
            Curated Collections
          </h2>
          <div className="w-24 h-1 bg-[#7a5c58] mx-auto opacity-20 rounded-full"></div>
        </div>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

      
        <div className="mt-32 bg-white/30 backdrop-blur-md rounded-[3rem] p-12 text-center border border-white/50">
          <h3 className="text-2xl font-serif text-[#7a5c58] mb-4 italic">
            Can't find what you're looking for?
          </h3>
          <p className="text-[#8c736f] mb-8 max-w-lg mx-auto">
            Check out our latest blog posts or reach out for personalized mentorship details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[#7a5c58] text-white rounded-full text-sm font-bold hover:shadow-lg transition-all">
              View All Posts
            </button>
            <button className="px-10 py-4 border border-[#7a5c58] text-[#7a5c58] rounded-full text-sm font-bold hover:bg-white/50 transition-all">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}