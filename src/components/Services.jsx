import { motion } from "framer-motion";
import { Film, Video, Zap, Sparkles, Megaphone } from "lucide-react";

const SERVICES = [
  {
    icon: Film,
    title: "Documentary Editing",
    desc: "Story-driven long-form editing that respects your subject and your audience.",
  },
  {
    icon: Video,
    title: "YouTube Video Editing",
    desc: "Retention-focused cuts, pacing, and sound design for creators.",
  },
  {
    icon: Zap,
    title: "Shorts & Reels",
    desc: "Punchy vertical edits built for scroll-stopping hooks.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    desc: "Custom animations, lower thirds, and title sequences.",
  },
  {
    icon: Megaphone,
    title: "Promotional Videos",
    desc: "Brand films and ads that look premium and convert.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-warm text-sm uppercase tracking-[0.2em] mb-3">
          Services
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          What I Do
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-8 rounded-2xl bg-charcoal border border-zinc-900 hover:border-warm/40 transition-colors"
          >
            <s.icon className="w-8 h-8 text-warm mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
