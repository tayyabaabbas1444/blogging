import { useParams, Link } from "react-router-dom";

export default function ServiceDetails() {
 
  const { serviceId } = useParams();


  const serviceContent = {
    "problem-solving": {
      title: "Problem Solving",
      description: "We provide tailored strategies to help you navigate life's biggest transitions and solve complex personal challenges.",
      image: "https://i.pinimg.com/736x/c3/95/78/c395784bf56ff9495fb4b44f08b7e05e.jpg"
    },
    "relationships": {
      title: "Relationships",
      description: "Focusing on intentional communication and building deeper connections with those who matter most in your life.",
      image: "https://i.pinimg.com/736x/95/d5/23/95d5232ce4dbcdb9783c91915b2e1fd7.jpg"
    },
    "personal-passion": {
      title: "Identifying Passion",
      description: "Discover what truly drives you. Our mentorship helps you align your daily actions with your core creative passions.",
      image: "https://i.pinimg.com/736x/fe/31/a3/fe31a31e7255c33d6f43149be32074d6.jpg"
    },
    "growth-career": {  
  title: "growth-career",
  description: "Discover what truly drives you. Our mentorship helps you align your daily actions...",
  image: "https://i.pinimg.com/1200x/c6/72/40/c67240d2110d1f795f9dc57f83ec657e.jpg"
},
    

  };

  const data = serviceContent[serviceId] || { 
    title: "Service Not Found", 
    description: "Please go back to the home page to select a valid service." 
  };

  return (
    <div className="bg-[#fff4ec] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full bg-white rounded-[3rem] shadow-sm overflow-hidden flex flex-col md:flex-row">
        
        {data.image && (
          <div className="md:w-1/2 h-64 md:h-auto">
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
          </div>
        )}

       
        <div className="p-10 md:p-16 md:w-1/2 flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3b2b2b] mb-6">{data.title}</h2>
          <p className="text-[#7a6a6a] leading-relaxed mb-8">{data.description}</p>
          
          <Link to="/" className="text-[#e58b8b] font-bold uppercase tracking-widest text-xs border-b-2 border-[#e58b8b] pb-1 self-start hover:opacity-70 transition-opacity">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}