// src/App.jsx
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";

import Team from "./components/Team";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  // scroll reveal logic
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - revealPoint) {
          el.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // first run

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="pt-20"> {/* header height offset */}
        <Hero />
        <Product />
        {/* <Hardware /> */}
        <Team />
        <Achievements />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}

export default App;
