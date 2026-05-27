import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { X, Download, ExternalLink } from 'lucide-react';

export default function PDFViewerDrawer({ isOpen, filePath, title, onClose }) {
  const drawerVariants = {
    hidden: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    visible: { x: 0, transition: { type: 'spring', stiffness: 260, damping: 25 } }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const drawer = (
    <AnimatePresence>
      {isOpen && filePath && (
        <>
          {/* Darkened graphite overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            data-testid="close-pdf-drawer-overlay"
            className="fixed inset-0 bg-charcoal-black/25 backdrop-blur-[4px] z-40 cursor-pointer pointer-events-auto"
          />

          {/* Sliding Glass Drawer container */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[50%] h-full bg-paper-breath border-l border-glass-border shadow-2xl z-50 flex flex-col pointer-events-auto backdrop-blur-md"
            style={{
              background: 'rgba(244, 241, 234, 0.88)'
            }}
          >
            {/* Header section with hand-drawn traits */}
            <div className="p-6 border-b border-pencil-light/30 flex items-center justify-between">
              <div className="flex-1 pr-4">
                <span className="text-xs font-mono text-accent-sepia uppercase font-bold tracking-wider">Xem bài nghiên cứu</span>
                <h3 className="text-xl font-serif truncate mt-1">{title}</h3>
              </div>
              
              <div className="flex items-center gap-3">
                {/* Download alternative */}
                <a
                  href={filePath}
                  download
                  title="Tải PDF về máy"
                  className="p-2 border border-pencil-stroke rounded-lg hover:bg-accent-sepia hover:text-white transition-colors duration-200"
                >
                  <Download size={18} />
                </a>
                
                {/* Open in new tab link */}
                <a
                  href={filePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Mở tab mới"
                  className="p-2 border border-pencil-stroke rounded-lg hover:bg-accent-sepia hover:text-white transition-colors duration-200"
                >
                  <ExternalLink size={18} />
                </a>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  data-testid="close-pdf-drawer"
                  className="p-2 border border-charcoal-black rounded-lg hover:bg-charcoal-black hover:text-bg-paper transition-colors duration-200 ml-2"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Document view core */}
            <div className="flex-1 p-6 relative w-full h-full">
              <iframe
                src={`${filePath}#toolbar=0`}
                className="w-full h-full border-2 border-pencil-stroke rounded-xl bg-white shadow-inner"
                title={`PDF Preview - ${title}`}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(drawer, document.body);
}
