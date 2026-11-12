import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/projects.json";

const CATEGORIES = [
  "All",
  "Documentary",
  "SaaS",
  "Apple UI",
  "Motion Graphics",
  "Tutorial & How-To",
  "Cinematic Calm Down",
  "3D Map & Geography",
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === "All") return projectsData;
    return projectsData.filter((p) => p.category === active);
  }, [active]);

  return (
    <section
      id="work"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16"
      >
        <p className="text-warm text-sm uppercase tracking-[0.2em] mb-3">
          Selected Work
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Recent Projects
        </h2>
      </motion.div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm border transition-all ${
              active === cat
                ? "bg-warm border-warm text-white"
                : "bg-transparent border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filtered.length === 0 ? (
        <p className="text-zinc-500 py-20 text-center">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      )}

      {/* Video Modal */}
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
