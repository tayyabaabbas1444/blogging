import express from "express";
const router = express.Router();


const blogs = [
  {
    id: 1,
    title: "A Soft Autumn Day",
    desc: "Peaceful autumn vibes and minimal moments captured beautifully. This season brings a unique sense of calm and reflection through its golden hues.",
    image: "https://i.pinimg.com/736x/42/ab/51/42ab513b3b401a4468b732c62ed49a4c.jpg"
  },
  {
    id: 2,
    title: "Minimal Living",
    desc: "Soft minimal lifestyle inspirations and calm home ideas. Learn how to declutter your space and your mind for a more intentional life.",
    image: "https://i.pinimg.com/736x/c5/e8/9a/c5e89a8e53ff63aacab01763529693ed.jpg"
  },
  {
    id: 3,
    title: "Photography Tips",
    desc: "Simple photography tips to capture everyday beauty. Focus on natural lighting and composition to tell a story with every click.",
    image: "https://i.pinimg.com/736x/97/67/37/97673793ccb3ac6b90ec556025cf32b5.jpg"
  },
  {
    id: 4,
    title: "Morning Rituals",
    desc: "Starting your day with peace and a warm cup of coffee. Explore how morning routines can set the tone for a productive and happy day.",
    image: "https://i.pinimg.com/736x/44/72/a0/4472a061ff19f3229b877c3ae305bad1.jpg"
  },
  {
    id: 5,
    title: "The Art of Flowers",
    desc: "Bringing nature indoors with simple floral arrangements. Discover the best seasonal blooms to brighten up your living space.",
    image: "https://i.pinimg.com/736x/ea/40/8c/ea408cf52a23aa13e444a051e0b10591.jpg"
  },
  {
    id: 6,
    title: "Cozy Corners",
    desc: "Creating a sanctuary within your home. Tips on textures, lighting, and colors to make your reading nook the perfect escape.",
    image: "https://i.pinimg.com/736x/2a/c5/d6/2ac5d646a61ff2ac37cada17b6e4fad9.jpg"
  },
  {
    id: 7,
    title: "Digital Detox",
    desc: "Finding balance in a connected world. Why stepping away from screens is essential for mental clarity and creative inspiration.",
    image: "https://i.pinimg.com/736x/37/35/0a/37350ab9d356206f26077a0750e58496.jpg"
  },
  {
    id: 8,
    title: "Winter Aesthetic",
    desc: "Embracing the cold with warmth and light. How to style your home for the winter months using candles and soft knits.",
    image: "https://i.pinimg.com/736x/10/95/b7/1095b7a4bf665b1bdbb07279f1c2d75b.jpg"
  }
];


router.get("/", (req, res) => {
  res.json(blogs);
});


router.get("/:id", (req, res) => {
  const { id } = req.params;
  const blog = blogs.find((b) => b.id === parseInt(id));
  
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
});


export default router;