'use client';
import './ServiceCard.css';

export default function ServiceCard({ icon, title, description, deliverables, index }) {
  return (
    <div className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="service-card__glow" />
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{description}</p>
      
      {deliverables && deliverables.length > 0 && (
        <ul className="service-card__list">
          {deliverables.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      
      <div className="service-card__border" />
    </div>
  );
}
