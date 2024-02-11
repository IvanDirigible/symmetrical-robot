import CardImage from './CardImage';
import CardText from './CardText';
import CardLink from './CardLink';

export default function CardBody({ image, text, link }) {
  return (
    <div class="card">
      <CardImage {...image} />
      <CardText {...text} />
      <CardLink {...link} />
    </div>
  );
}
