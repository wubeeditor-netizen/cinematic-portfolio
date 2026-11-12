import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl aspect-video bg-charcoal">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm bg-gradient-to-br from-zinc-900 to-black">
            {project.title}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-warm group-hover:border-warm transition-all duration-300">
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </div>
        </div>
        <span className="absolute top-4 left-4 text-xs uppercase tracking-widest bg-black/60 backdrop-blur px-3 py-1 rounded-full text-white">
          {project.category}
        </span>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-white group-hover:text-warm transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.article>
  );
}
