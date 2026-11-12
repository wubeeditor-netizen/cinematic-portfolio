import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import GoogleDrivePlayer from './GoogleDrivePlayer';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-start md:items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-5xl bg-charcoal rounded-3xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-warm transition-colors flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-4 md:p-6">
              <GoogleDrivePlayer videoUrl={project.videoUrl} title={project.title} />
            </div>
            <div className="px-6 pb-8 md:px-10">
              <p className="text-xs uppercase tracking-widest text-warm mb-2">
                {project.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {project.title}
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed">
                {project.description}
              </p>
              {project.software?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.software.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
