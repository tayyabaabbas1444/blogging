import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   
    localStorage.setItem("user_auth", "true");
    navigate("/"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf7]">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-[#eee1db]">
        <h2 className="text-3xl font-bold text-[#7a5c58] text-center mb-6 italic">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-[#7a5c58] mb-2 text-sm">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full p-3 rounded-lg border border-[#eee1db] focus:outline-none focus:ring-2 focus:ring-[#7a5c58]/20"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-[#7a5c58] mb-2 text-sm">Password</label>
            <input 
              type="password" 
              required
              className="w-full p-3 rounded-lg border border-[#eee1db] focus:outline-none focus:ring-2 focus:ring-[#7a5c58]/20"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#7a5c58] text-white py-3 rounded-lg font-semibold hover:bg-[#634a47] transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}