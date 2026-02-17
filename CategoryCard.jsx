import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.name}`} className="group block">
      
      <div className="bg-[#fdeee9] p-4 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-full">
        
       
        <div className="w-full aspect-square overflow-hidden rounded-2xl mb-6">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
        </div>
    
        <h4 className="text-[#7a5c58] text-xl font-serif font-bold mb-2">
          {category.name}
        </h4>
        <p className="text-[#8c736f] text-sm opacity-80 mb-4 px-2">
          {category.description}
        </p>

    
        <span className="text-[#e58b8b] text-xs font-bold tracking-[0.2em] uppercase mt-auto pb-2 border-b border-[#e58b8b]/0 group-hover:border-[#e58b8b]/100 transition-all">
          View Stories ✦
        </span>
      </div>
    </Link>
  );
}