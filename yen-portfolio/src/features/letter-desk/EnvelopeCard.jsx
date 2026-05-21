import React from "react";
import EnvelopeCardBase from "../../components/ui/EnvelopeCard";

export default function EnvelopeCard({ title, children, className, variant }) {
  return (
    <EnvelopeCardBase title={title} className={className} variant={variant}>
      {children}
    </EnvelopeCardBase>
  );
}
