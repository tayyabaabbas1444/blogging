import { Link, useNavigate } from "react-router-dom";
import { Flower2, LogOut } from "lucide-react"; 

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
  
    localStorage.removeItem("user_auth");
    
    navigate("/login");
  };

  return (
    <nav className="bg-colour py-5 px-10 flex justify-between items-center">
     
      <Link to="/" className="flex items-center gap-2">
        <Flower2 className="w-8 h-8 text-[#7a5c58]" />
        <h1 className="text-2xl text-[#7a5c58] font-bold">From roses</h1>
      </Link>

      <div className="flex items-center space-x-6 text-[#7a5c58]">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/blogs" className="hover:underline">Blog</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/categories" className="hover:underline">Categories</Link>

      
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 bg-[#7a5c58] text-white px-5 py-2 rounded-full hover:bg-[#634a47] transition-colors ml-4 shadow-sm"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}