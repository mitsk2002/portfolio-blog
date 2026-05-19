import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { SacredBg } from "./components/Sigils";
import ScrollToHash from "./components/ScrollToHash";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import MiniProjects from "./pages/MiniProjects";
import HealthcareProjects from "./pages/HealthcareProjects";

export default function App() {
  return (
    <div className={styles.appWrapper}>
      <SacredBg className={styles.sacredBg} />

      <div className={styles.content}>
        <ScrollToHash />
        <div className={styles.pageWrapper}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mini-projects" element={<MiniProjects />} />
            <Route path="/healthcare-projects" element={<HealthcareProjects />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}
