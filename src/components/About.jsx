import { motion } from "framer-motion";
const TOOLS = ["Premiere Pro", "After Effects", "CapCut", "Photoshop"];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900"
    >
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-warm text-sm uppercase tracking-[0.2em] mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            THE STORY
            <br />
            BEHIND THE EDIT.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-zinc-300 leading-relaxed text-lg">
            I'm a freelance video editor focused on cinematic storytelling. My
            work lives at the intersection of rhythm, emotion, and visual craft
            — from intimate documentaries to punchy YouTube edits and
            motion-driven short-form.
          </p>
          <p className="mt-6 text-zinc-400 leading-relaxed">
            Every cut has a reason. Every frame earns its place. I collaborate
            closely with creators and brands to turn raw footage into narratives
            people remember.
          </p>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
              Tools I use daily
            </p>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((t) => (
                <span
                  key={t}
                  className="text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
