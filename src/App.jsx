import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Statistics from "./components/Statistics";
import Academics from "./components/Academics";
import Activities from "./components/Activities";
import Donate from "./components/Donate";
import Admissions from "./components/Admissions";
import News from "./components/News";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.title = "Mabale Primary School | Hwange, Zimbabwe";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Academics />
        <Activities />
        <Donate />
        <Admissions />
        <News />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}