import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';
import PearlButton from '../../components/ui/PearlButton';

export default function SpecimenDetailModal({ project, color, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Chi tiết chương ${project.chapter}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white/95 backdrop-blur-md rounded-coral border border-[var(--deep-aqua)]/20 p-8 max-w-lg w-full shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--deep-aqua)]/10 transition-colors"
            aria-label="Đóng"
          >
            <X size={20} className="text-[var(--ocean-deep)]/60" />
          </button>

          {/* Chapter badge */}
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-heading font-bold mb-4"
            style={{ backgroundColor: color }}
          >
            {project.chapter}
          </div>

          <h2 className="text-xl font-heading font-bold text-[var(--ocean-deep)] mb-3">
            Chương {project.chapter}: {project.title}
          </h2>

          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-base font-semibold text-[var(--deep-aqua)] mb-1">
                Nội dung
              </h3>
              <p className="text-base text-[var(--ocean-deep)]/80 leading-relaxed">
                {project.content}
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-[var(--deep-aqua)] mb-1">
                Quá trình thực hiện
              </h3>
              <p className="text-base text-[var(--ocean-deep)]/80 leading-relaxed">
                {project.process}
              </p>
            </div>
          </div>

          <PearlButton
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={16} />
            Xem minh chứng (PDF)
          </PearlButton>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
