import React from 'react';

export default function CoffeeCard({ title, icon, children }) {
  return (
    <article className="coffee-panel">
      <div className="panel-header">
        {icon}
        <h2>{title}</h2>
      </div>
      <div className="panel-body">
        {children}
      </div>
    </article>
  );
}
