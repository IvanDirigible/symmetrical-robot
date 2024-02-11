export default function CardText({ title, module }) {
  return (
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
        <p class="card-text">{module}</p>
    </div>
  );
}