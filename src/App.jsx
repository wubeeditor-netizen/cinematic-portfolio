import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-zinc-900 py-8 px-6 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} — Cinematic Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
