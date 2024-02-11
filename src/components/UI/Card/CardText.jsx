export default function CardText({ title, module }) {
  return (
    <div className="card-img-overlay">
      <h5 className="card-title">{title}</h5>
        <p className="card-text">{module}</p>
    </div>
  );
}