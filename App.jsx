import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import Login from "./pages/Login"; 
import { Navigate } from "react-router-dom";
import CategoryDetail from "./pages/CategoryDetail";


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("user_auth") === "true";
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};


function Layout({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
      {children}
      {!isLoginPage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/blogs" element={<ProtectedRoute><Blogs /></ProtectedRoute>} />
          <Route path="/blog/:id" element={<ProtectedRoute><BlogDetail /></ProtectedRoute>} />
          <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/service/:serviceId" element={<ProtectedRoute><ServiceDetails /></ProtectedRoute>} />
          <Route path="/category/:categoryName" element={<ProtectedRoute><CategoryDetail /></ProtectedRoute>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}