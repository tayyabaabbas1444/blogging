export default function Footer() {
  return (
    <footer className="bg-[#fdeee9] text-[#7a5c58] mt-20">
      
    
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        
  
        <div>
          <h2 className="text-2xl font-semibold mb-4">From Roses</h2>
          <p className="text-sm leading-6">
            From Roses is a soft aesthetic lifestyle and blogging platform
            where we share peaceful thoughts, minimal living ideas,
            photography stories, and everyday inspiration.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Blogs</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

     
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Slow Living</li>
            <li>Travel</li>
            <li>Photography</li>
            <li>Minimal Living</li>
            <li>Rituals</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4">
            Subscribe to receive soft updates, new blog posts, and gentle
            inspiration directly in your inbox.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 mb-3 rounded-md outline-none text-sm"
          />
          <button className="w-full border border-[#7a5c58] py-2 rounded-md hover:bg-[#e7b7ad] transition">
            Subscribe
          </button>
        </div>

      </div>

    
      <div className="border-t border-[#e7b7ad] text-center py-4 text-sm">
        <p>© 2026 From Roses. All rights reserved.</p>
        <p className="mt-1">
          Designed with care • Soft thoughts • Calm stories
        </p>
      </div>

    </footer>
  );
}