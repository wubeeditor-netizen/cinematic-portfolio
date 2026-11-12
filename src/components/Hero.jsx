import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import myPhoto from "../assets/wube.jpg"; // <--- IMPORTED HERE

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
      {/* Ambient orange glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto w-full pt-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border border-warm/30 bg-warm/10 text-warm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-warm animate-pulse" />
            Available for freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[0.95]"
          >
            I TURN IDEAS INTO
            <br />
            <span className="text-warm">CINEMATIC</span> STORIES.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed"
          >
            Professional Video Editor specializing in cinematic documentaries,
            YouTube content, storytelling, and motion graphics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-warm hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              View My Work <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-zinc-700 hover:border-white text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              <Mail className="w-4 h-4" /> Hire Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Cinematic Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Blurred backdrop glow */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-warm/40 via-transparent to-orange-500/20 blur-3xl scale-95 -z-10" />

          {/* Photo with cinematic framing */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl shadow-black/60 aspect-[4/5] w-full max-w-md"
          >
            <img
              src={myPhoto} // <--- USED HERE
              alt="Wube — Video Editor"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            {/* Film strip ticks (cinematic detail) */}
            <div className="absolute top-4 left-4 flex gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-3 bg-white/40 rounded-full" />
              ))}
            </div>
            <div className="absolute top-4 right-4 text-xs text-white/70 tracking-widest uppercase">
              REC ●
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
