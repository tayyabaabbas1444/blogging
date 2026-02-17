import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your message!");
  };

  return (
    <div className="bg-[#f6d6cf] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full bg-[#fdeee9] p-10 md:p-14 rounded-3xl shadow-sm">
        
        {/* Aesthetic Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-[#7a5c58] mb-2">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-[#7a5c58] mx-auto opacity-20 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-[#7a5c58] text-sm font-semibold mb-2 ml-1">Your Name</label>
            <input 
              type="text"
              placeholder="Enter your name"
              className="w-full px-5 py-4 bg-white/50 border border-[#7a5c58]/20 rounded-2xl focus:outline-none focus:border-[#7a5c58] transition-colors text-[#7a5c58] placeholder:opacity-50"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[#7a5c58] text-sm font-semibold mb-2 ml-1">Your Email</label>
            <input 
              type="email"
              placeholder="example@mail.com"
              className="w-full px-5 py-4 bg-white/50 border border-[#7a5c58]/20 rounded-2xl focus:outline-none focus:border-[#7a5c58] transition-colors text-[#7a5c58] placeholder:opacity-50"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-[#7a5c58] text-sm font-semibold mb-2 ml-1">Your Message</label>
            <textarea 
              rows="5"
              placeholder="How can I help you?"
              className="w-full px-5 py-4 bg-white/50 border border-[#7a5c58]/20 rounded-2xl focus:outline-none focus:border-[#7a5c58] transition-colors text-[#7a5c58] placeholder:opacity-50 resize-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
          </div>

          {/* Enhanced Submit Button */}
          <button 
            type="submit"
            className="w-full py-4 bg-[#7a5c58] text-white rounded-full font-bold tracking-wide uppercase hover:bg-[#8c736f] hover:shadow-lg transition-all duration-300 transform active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}