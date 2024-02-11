import CardBody from '../Card/CardBody';

export default function Portfolio({ project }) {
  return (
    <div className="card-deck">
      <CardBody image={project.image} text={project.text} link={project.link}/>
    </div>
  );
}
