import "../styles/Card.css";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="card">
      <span>
        <img src={icon} alt="ícone do card" width={64} height={64} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
