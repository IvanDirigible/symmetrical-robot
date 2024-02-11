import CardImage from './CardImage';
import CardText from './CardText';
import CardLink from './CardLink';

export default function CardBody({ image, text, link }) {
  return (
    <div className="card bg-dark text-white">
      <CardImage {...image} />
      <CardText {...text} />
      <CardLink {...link} />
    </div>
  );
}