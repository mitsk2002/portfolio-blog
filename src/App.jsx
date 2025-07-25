import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from "./pages/Blog.jsx";
import Projects from "./pages/Projects.jsx";



export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/projects" element={<Projects />} />

      </Routes>
      <Footer />
    </Router>
  );
}
