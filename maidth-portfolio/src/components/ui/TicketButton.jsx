import { motion } from "framer-motion";
import { ticketHover } from "../../app/motionConfig";

export function TicketButton({ children, className = "", ...props }) {
  return (
    <motion.button className={`ticket-button ${className}`} type="button" {...ticketHover} {...props}>
      {children}
    </motion.button>
  );
}

